# account-backend-porting

## Available Scripts
In the project directory, you can run:

### `npm install`
Install dependencies. 

### `npm run dev`
Runs the app in the development mode.

### `npm run prod`
Builds the app for production in the `dist` folder.

### `npm run analyze`
Runs webpack bundle analyzer to visualize the size of webpack output files. Good for checking duplicate imports and track tree shaking efforts.

### `npm run type-check`
Runs type checking for the application. There should not be any typescript error in any new CR. Commit hook will also run this check when you commit your your code.

## Host File Configuration
Add the following lines to your hosts file [(e.g. SwitchHosts)](https://github.com/oldj/SwitchHosts) to connect to your local dev server when visiting the cash sit server. This allows you to connect to the SIT APIs while you make changes to the front end code.

```
127.0.0.1   admin.account-sit.1680170.com
127.0.0.1   acc.account-sit.1680170.com
127.0.0.1   share.account-sit.1680170.com
```

After adding to hosts file, you can then visit your local dev server via: admin.account-sit.1680170.com:**3003**/login

Note: In order to access the original SIT url (i.e. without the 3003) you have to switch off your host configuration.

## Main Accounts
|type|username|password|
|----|--------|--------|
|admin|m1|1|
|accountant|acctreact|Asd123|
|shareholder|sharereact|Asd123|

Note: As both account and shareholder accounts only allow 1 login per username, please proceed to create your own accountant and shareholder account (steps to create can be found [here](https://jira.sg.orion.co.com/confluence/pages/resumedraft.action?draftId=32116867&draftShareId=9110182b-83a3-4085-8230-b798904778d4)) for your own testing so that you won't be kicked out when someone logins. 

## API Documentation
Information on API can be found [here](http://admin.account-sit.1680170.com:3003/web/swagger-ui.html#/Setting).

## Commit Message Format
We follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) format. So please commit your code in this format: *type*: *ticket number* - *short description*. For example:
1. feat: CASHRACT-3139 - Winlose detail add on
2. fix: SIT-4546 - Fix translation
3. refactor: CASHRACT-3027,CASHRACT-3028 - Refactor UserGroup search fields
4. chore: Update script (for small changes without ticket number)

Following this format will also automatically update your ticket status when it has been merged to SIT, UAT or PROD via our postbuild script.

## CR, Merge Request and Release

### CR
For new CRs, we checkout a branch from **uat** and start working on that branch.

### SIT
Once you have completed your CR, please open a [new merge request](https://noc-git.orion.co.com/frontend/account-backend-porting/merge_requests/new) with the target branch to SIT. Inform your lead or the developer that will be reviewing your code. When they have finished reviewing your code, you can then proceed to merge to SIT.

### UAT
Once the PM has given the green light to merge to UAT, you can proceed to open a merge request to UAT and merge your code. No review is needed unless you would like the lead to do a final check.

## Jenkins
The frontend jenkins can be found [here](https://jenkins.orion.co.com/job/React/). Besides **production** build which you have to trigger manually, all other builds are trigger automatically via our postbuild script, provided you have the right commit message format.
