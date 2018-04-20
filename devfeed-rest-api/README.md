# DEVFEED REST API

This is the source code for the REST API used in the Medium storie: [Building a API Gateway with GraphQL](final_url)

## Running
Install the dependencies by running:
```
npm i
```

This application consumes data form Github's and Twitter's API's so you'll need to provide your credentials data in order to get the application runing correctly. To retrieve the required data, please follow the steps bellow.

### Configure the .env file
Rename the `.env.example` file to `.env`

### Twitter

1. Go to [Twitter Application Management](https://apps.twitter.com/) and create a new app.
2. In the "Keys and Access Tokens" tab, copy the values of "Consumer Key (API Key)" and "Consumer Secret (API Secret)" to the `.env` file respectively to:
`TWITTER_CONSUMER_KEY` and `TWITTER_CONSUMER_SECRET`
3. Generate a Bearer Token: see more details at [Issuing application-only requests](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only) section. Youl'll need to have your `TWITTER_CONSUMER_KEY` and `TWITTER_CONSUMER_SECRET` encoded to Base64. A simple way to get that is executing the following command in your browser's javascript console:

```
btoa('TWITTER_CONSUMER_KEY:TWITTER_CONSUMER_SECRET')
```
Execute the request bellow replacing `YOUR_ENCODE_CONSUMER_KEY_AND_SECRET` with the output of the previous command
```
curl -X POST \
  https://api.twitter.com/oauth2/token \
  -H 'Authorization: Basic YOUR_ENCODE_CONSUMER_KEY_AND_SECRET' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/x-www-form-urlencoded;charset=UTF-8' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F grant_type=client_credentials
```

4. Paste the generated token as value for the `TWITTER_BEARER_TOKEN` key in the `.env` file

### Github
Easy Peasy, just put your username and password for `GITHUB_USERNAME` and `GITHUB_PASSWORD` keys values. It will allow the application make up to 5000 requests per hour. For unauthenticated requests, the rate limit allows for up to 60 requests per hour.

> WARNING: Keep in mind that these are your Twitter and Github credentials, do not share them in public repositories

### Start the server
Run the command:
```
npm start
```
The server will start at http://localhost:3000

### Inspecting with Postman

Click the button below to interact with the API through Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7c1e420381e04eba3252#?env%5BDEVFEED_DEV%5D=W3sia2V5IjoicmVzdF9hcGlfYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJ0ZXh0In0seyJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2SW5KNU1GRmtNMWs1VFNJc0ltVnRZV2xzSWpvaWFuVnNhVzlBWlcxaGFXd3VZMjl0SWl3aVpXMWhhV3hJWVhOb0lqb2lNVFJtTXpJMVpUZzVaVFE0TkRNNFpXUTJObVUyTjJNeVpEZ3haVEUwTVRFaUxDSm1kV3hzYm1GdFpTSTZJa3AxYkdsdklGTmhiWEJoYVc4aUxDSnBZWFFpT2pFMU1qUXhPRGsxT1Rjc0ltVjRjQ0k2TVRVeU5ERTVNekU1TjMwLnhLa29XQ2lNY1dQSGYwSDBIUEdIZ19sYWhMUTNOWF95TXRERW12S0pUZnciLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoidGV4dCJ9XQ==)
