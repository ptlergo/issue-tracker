# issue-tracker
angular app to track issues. Tutorial from [here](https://medium.com/codingthesmartway-com-blog/angular-6-mean-stack-crash-course-part-1-front-end-project-setup-and-routing-89bec8332cea)

# frontend

## install
application relies on angular, install all packages. angular must be installed globally to use 'ng'
```
npm i
```

## uses

## run
run application with angular ng
```
ng serve
```
or npm
```
npm run start
```
# components
- list
- create
- edit


# backend
## install
```
npm i
```

## uses
- babel for es6 transpiling
- express server
- mongoose for mongodb
- babel-watch

## run
run the server with babel watching
```
npm run dev
```

## endpoints
### issues routes
| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/issues|get all issues|[{}]|
## Deployment
app is deployed to Heroku.