#!/bin/bash

REPO=`echo $GIT_URL | grep '.*[^\(\.git\)]' -o`
echo $GIT_URL
echo $REPO
# grep list of new commits
NEW_COMMITS=`git rev-list $GIT_COMMIT...$GIT_PREVIOUS_SUCCESSFUL_COMMIT --abbrev-commit`
echo "commits: $NEW_COMMITS"

# loop through new commits since previous successful build
for commit in $NEW_COMMITS;do
  echo "processing: $commit"

  # get issue numbers
  ISSUES=`git log $commit...$commit^ | grep -e "\(\b\(\([fF][iI][xX]\([eE][sS]\)\?\)\|\([fF][eE][aA][tT]\([uU][rR][eE]\)\?\)\):\?\) \+\(\([A-Z]\)\{1,\}-[0-9]\{1,\}\)\( *, *\([A-Z]\)\{1,\}-[0-9]\{1,\}\)*" -o | grep -e "\(\([A-Z]\)\{1,\}-[0-9]\{1,\}\)" -o`
  echo "issues: $ISSUES"

  for issue in $ISSUES;do

    if [ "$GIT_BRANCH" != 'origin/sit' ] ; then
      if [ `echo $issue | cut -d \- -f 1` == 'SIT' ]; then
        echo "ignoring $issue in $GIT_BRANCH"
        # if is SIT issue, but on non-SIT branch, ignore
        continue
      fi
    fi

    COMMIT_LINK="[$commit|$REPO/commit/$commit]"
    BUILD_LINK="[$BUILD_DISPLAY_NAME|$BUILD_URL]"
    URL="$JIRA_URL/rest/api/2/issue/$issue/transitions"
    COMMENT_URL="$JIRA_URL/rest/api/2/issue/$issue/comment"

    # default, for SIT
    TRANSITION_ID_START="11" # Start Fix
    TRANSITION_ID_START_REOPENED="71" # Start Fix after reopened
    TRANSITION_ID_UNBLOCKED="71" # Unblocked to in progress (only for non-sit?)
    TRANSITION_ID_COMPLETE="21" # Complete Fix
    TRANSITION_ID_READY="31" # Ready to Test

    NON_SIT_ISSUE='false'
    if [ `echo $issue | cut -d \- -f 1`	== 'FINFED' ] || [ `echo $issue | cut -d \- -f 1`	== 'CASHRACT' ]; then
      NON_SIT_ISSUE='true'
    fi

    if [ "$NON_SIT_ISSUE" == 'true' ]; then
      # for FINFED, CASHRACT
      TRANSITION_ID_START="91" # Start Fix
      TRANSITION_ID_START_REOPENED="241" # Start Fix after reopened
      TRANSITION_ID_COMPLETE="301" # Ready To Merge
      TRANSITION_ID_READY="111" # Ready to Test

      # only transition these when issue is not SIT issue, and run on UAT jenkins
      TRANSITION_ID_START_TEST="221" # Start Test
      TRANSITION_ID_PASS_TEST="151" # Pass Test
      TRANSITION_ID_MERGE_UAT="261" # Merge to UAT
      TRANSITION_ID_DEPLOY_UAT="271" # Deploy to UAT
      TRANSITION_ID_DEPLOY_PRODUCTION="141" # Deploy to production
    fi

    # if [ "$JOB_BASE_NAME" == 'Finance-Backend-SIT' ] || [ "$JOB_BASE_NAME" == 'Wind2Cash-Backend-3-SIT' ]; then
      MESSAGE="Fixed in SIT with commit $COMMIT_LINK after build $BUILD_LINK"

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_START"'"
        }
      }'

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_START_REOPENED"'"
        }
      }'

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_UNBLOCKED"'"
        }
      }'

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_COMPLETE"'"
        }
      }'

    if [ "$GIT_BRANCH" == 'origin/sit' ]; then
      READY_STATUS_CODE=$(curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
          "transition": {
              "id": "'"$TRANSITION_ID_READY"'"
          }
      }' -i | head -n 1 | cut -d" " -f2)

      # comment if transitioned to ready
      if [ "$READY_STATUS_CODE" == "204" ]; then
          curl $COMMENT_URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
            "body":  "'"$MESSAGE"'"
          }'
      fi
    else
      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_READY"'"
        }
      }'
    fi
    # fi

    if [ "$GIT_BRANCH" == 'origin/uat' ] || [ "$GIT_BRANCH" == 'origin/production' ]; then

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_START_TEST"'"
        }
      }'

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_PASS_TEST"'"
        }
      }'

      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_MERGE_UAT"'"
        }
      }'
    fi

    if [ "$GIT_BRANCH" == 'origin/uat' ]; then

      # transition to DEPLOYED TO UAT
      READY_STATUS_CODE_UAT=$(curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
          "transition": {
              "id": "'"$TRANSITION_ID_DEPLOY_UAT"'"
          }
      }' -i | head -n 1 | cut -d" " -f2)

      # comment if transitioned to DEPLOYED TO UAT
      MESSAGE="Fixed in UAT with commit $COMMIT_LINK after build $BUILD_LINK"
      if [ "$READY_STATUS_CODE_UAT" == "204" ]; then
          curl $COMMENT_URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
            "body":  "'"$MESSAGE"'"
          }'
      fi
    elif [ "$GIT_BRANCH" == 'origin/production' ]; then

      # transition to DEPLOYED TO UAT
      curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
        "transition": {
            "id": "'"$TRANSITION_ID_DEPLOY_UAT"'"
        }
      }'

      # transition to IN PRODUCTION
      READY_STATUS_CODE_PRODUCTION=$(curl $URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
          "transition": {
              "id": "'"$TRANSITION_ID_DEPLOY_PRODUCTION"'"
          }
      }' -i | head -n 1 | cut -d" " -f2)

      # comment if transitioned to IN PRODUCTION
      MESSAGE="Deployed to production with commit $COMMIT_LINK after build $BUILD_LINK"
      if [ "$READY_STATUS_CODE_PRODUCTION" == "204" ]; then
          curl $COMMENT_URL -H "$AUTH_HEADER" -H "Content-Type: application/json" -X "POST" -d '{
            "body":  "'"$MESSAGE"'"
          }'
      fi
    fi
  done
done
