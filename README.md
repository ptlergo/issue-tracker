# issue-tracker
A MEAN Stack application deployed to Heroku, and uses mLab for cloud mongo db.
App can be viewed from [here](https://my-issue-tracker-app.herokuapp.com/)

# FRONTEND

## INSTALL
application relies on angular, install all packages. angular must be installed globally to use 'ng'
```
npm i
```

## RUN
run application front end with angular ng. Must be in the frontend folder, __./frontend/__
Default port is '4200'[http://localhost:4200]( http://localhost:4200)
```
ng serve
```
or using npm
```
npm run start
```

## COMPONENTS
- list
- create
- edit

# BACKEND
Backend uses node.js, mongoose schema and transpiles with babel.
## INSTALL
```
npm i
```

## USES
- babel for es6 transpiling
- express server
- mongoose for mongodb(mlab)
- babel-watch

## RUN
run the server with babel watching for development.
Default port is '4000'[http://localhost:4000]( http://localhost:4000)

```
npm run dev
```

## PRODUCTION
uses babel to build a distribution folder with transpiled files to be deployed to heroku for live.
```
npm run start
```

## ENDPOINTS

### issues routes
| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/issues|get all issues|[{}]|

## DEPLOYMENT
App is setup with automatic deployment pipeline through Heroku
```
git push origin deploy
```