#!/bin/bash

usage()
{
    echo "usage:  [[[--target -t target ] [--all -l] [--full -f]] | [-h]]"
}

REFERENCE_BRANCH=master
REFTARGET="refs/heads"
FULL=0

while [ "$1" != "" ]; do
    case $1 in
        -t | --target )           shift
            REFERENCE_BRANCH=$1
            ;;
        -a | --all )    REFTARGET="refs/remotes/origin/"
            ;;
        -f | --full )    FULL=1
            ;;
        -h | --help )           usage
            exit
            ;;
        * )                     usage
            exit 1
    esac
    shift
done

echo "[-] Comparing against $REFERENCE_BRANCH"

ESCAPE_CHAR="\x1B"

GREEN="$ESCAPE_CHAR[32m"
YELLOW="$ESCAPE_CHAR[33m"
RED="$ESCAPE_CHAR[31m"
LIGHTRED="$ESCAPE_CHAR[91m"

GRAY="$ESCAPE_CHAR[90m"
DEFAULT_COLOR="$ESCAPE_CHAR[0m"

YELLOW_WARNING_COUNT=50
RED_WARNING_COUNT=500

git rev-parse --verify ${REFERENCE_BRANCH} > /dev/null 2>&1

if [ $FULL == 0 ]; then
    END_STRING="commits behind $REFERENCE_BRANCH"
else 
    END_STRING="commits behind/ahead $REFERENCE_BRANCH"
fi

if [ "$?" == "0" ]; then
    echo "[-] Fetching from origin..."
    git fetch origin

    CURRBRANCH=`git symbolic-ref --short HEAD`
    CURR_BEHIND=`git rev-list --left-right --count ${REFERENCE_BRANCH}...@ | cut -f2`
    CURR_AHEAD=`git rev-list --left-right --count ${REFERENCE_BRANCH}...@ | cut -f2`
    EXPRCURR=`expr "$CURR_AHEAD"`
    if [ $EXPRCURR -ge 0 ]; then
        echo -e "${GREEN}Current branch $CURRBRANCH is $CURR_BEHIND/$CURR_AHEAD commits behind/ahead $REFERENCE_BRANCH$DEFAULT_COLOR"
    fi

    for BRANCH in `git for-each-ref "$REFTARGET" | cut -d/ -f3-`;
    do

        AHEAD=`git rev-list --left-right --count ${REFERENCE_BRANCH}...${BRANCH} | cut -f2`
        BEHIND=`git rev-list --left-right --count ${REFERENCE_BRANCH}...${BRANCH} | cut -f1`

        if [ $FULL == 0 ]; then
            LRTEXT="$BEHIND"
        else 
            LRTEXT="$BEHIND/$AHEAD"
        fi

        EXPR=`expr "$BEHIND"`
        if [ $EXPR -ge $RED_WARNING_COUNT ]; then
            echo -e "$RED$BRANCH: $LIGHTRED$LRTEXT$RED $END_STRING$DEFAULT_COLOR";
        elif [ $EXPR -ge $YELLOW_WARNING_COUNT ]; then
            echo -e "$DEFAULT_COLOR$BRANCH: $YELLOW$LRTEXT$DEFAULT_COLOR $END_STRING$DEFAULT_COLOR";
        elif [ $BEHIND != 0 ]; then
            echo -e "$GRAY$BRANCH: $GREEN$LRTEXT$GRAY $END_STRING$DEFAULT_COLOR";
        elif [ $FULL == 1 ]; then
            echo -e "$GRAY$BRANCH: $GREEN$LRTEXT$GRAY $END_STRING$DEFAULT_COLOR";
        fi
    done
fi
