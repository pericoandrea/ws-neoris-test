<h1 align="center"> Customers Resource </h1>

## Description

Webservice for an API's customer resource write with  <a href="https://docs.nestjs.com/" target="_blank">NestJS</a> a progressive <a href="http://nodejs.org" target="_blank">Node.js</a>.

The API retrieve, update and delete any customer.

---

## Usage

* [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1999094-57d0a01b-cab4-41c9-8966-aeda35355935?action=collection%2Ffork&collection-url=entityId%3D1999094-57d0a01b-cab4-41c9-8966-aeda35355935%26entityType%3Dcollection%26workspaceId%3D3cdf2108-042b-42ce-9112-86d67526c572)

* [Swagger Documentation](https://ws-neoris-test.herokuapp.com/doc)

* A Curl Request Example
  ```
  curl -X GET 'https://ws-neoris-test.herokuapp.com/api/customers'
  ````
---

### GIT Repository

[https://github.com/pericoandrea/ws-neoris-test](https://github.com/pericoandrea/ws-neoris-test)
```bash
git clone https://github.com/pericoandrea/ws-neoris-test.git
```
<!-- [Heroku repo](https://git.heroku.com/ws-neoris-test.git) -->
---

## WS Requirements:
1. The service need a Mongo DB connection.

2. The next environment variables must be defined in order to operate correctly:
    - _**PORT:**_ The port number where API will be listening
    - _**MONGOURL:**_ Mongo DB string connection e.g `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`
---    

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

----

## License

Nest is [MIT licensed](LICENSE).
