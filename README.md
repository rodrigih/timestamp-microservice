# Timestamp Microservice

This is an API service that returns both the unix and natural representation of the time sent.
This was created as part of a [Free Code Camp](https://www.freecodecamp.com) project.

This project uses Node.js, Express, Bootstrap, and Pug (formerly Jade)


## How to use
This API takes a string representing either a unix timestamp or a natural language date as a parameter.

## Example

### Parameter

Using natural language date March 23, 2017
```
url/March%2023,%202017
```

Using Unix time (again, March 23, 2017)

```
url/1490310248343
```

### Output

```
{"unix": 1490310248343 ,"natural": March 23, 2017}
```

## Running locally

To run this API locally, perform the following steps:

```
$ git clone https://github.com/rodrigih/timestamp-microservice.git
$ cd timestamp-microservice
$ npm install
$ node server.js
```

You can now perform any API request using the URL ```localhost:8000```
