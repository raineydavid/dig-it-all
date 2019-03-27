# Air Pollution API

This is a [Serverless](https://serverless.com/) app for AWS Lambda.

## Requirements

- Node.js installed globally on your machine
- Serverless installed globally on your machine
- Access to an Amazon Web Services account

## Database

The app connects to an SQL database using [Sequelize](http://docs.sequelizejs.com/).

Create the database tables by running:

    $ node_modules/.bin/sequelize db:migrate

The house prices data is imported from json files stored in `/data` by running:

    $ node_modules/.bin/sequelize db:seed:all

To run to production add:

    --env=production

_See the Sequelize docs for additional commands._

## Development

Copy `.env.sample.yml` to `.env.yml` and edit the values to suit your environment.

You can run the API locally as follows:

    $ serverless offline start

## Deployment

The app is deployed to AWS Lambda via Serverless.

Configure Serverless in the `serverless.yml` file, and deploy by running:

    $ serverless deploy --stage=prod --environment=prod

_See the Serverless docs for additional deployment commands._

## Production

[postcode](https://kc8h8hoecj.execute-api.eu-west-1.amazonaws.com/prod/postcode/{postcode}).
