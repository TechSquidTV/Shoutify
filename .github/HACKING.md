# Developer Guide

## Prerequisites

### Create Twitter Developer Account + App

In order to use and develop for Shoutify, you will need to create a Twitter Developer Account, and create an app which will be used to authenticate you.

[Follow the setup guide for Twitter, here](./TWITTER.md).

## Repository Setup

### 1. Fork and clone the repository

1. Visit the [Shoutify repository](https://github.com/TechSquidTV/Shoutify) and click the [Fork](https://github.com/TechSquidTV/Shoutify/fork) button in the top right corner.
2. Clone your forked repository to your local machine.

```shell
git clone git@github.com:<YOUR-USER>/Shoutify.git
cd Shoutify
```

### 2. Install npm dependencies

```shell
npm install
```

### 3. Copy the `.env.example` file to `.env`

```shell
cp .env.example .env
```

### 4. Configure the variables in `.env`

| Variable | Value |
|---|---|
| NEXTAUTH_SECRET | Any Random String |
| TWITTER_CLIENT_ID | < OAuth 2.0 Client ID > |
| TWITTER_CLIENT_SECRET  | < OAuth 2.0 Client Secret > |

> Required step: You need to get your own `TWITTER_CLIENT_ID` AND
> `TWITTER_CLIENT_SECRET` from
> [https://developer.twitter.com](https://developer.twitter.com) for Shoutify to
> work.
>
> Be mindful that this may take some time for Twitter to review your request.

### 5. Initialize the database

```shell
npx prisma db push
```

### 6. Run the dev server

```shell
npm run dev
```

### 7. Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 8. Log in with Twitter

Click the "Sign in" button in the top right corner. After authenticating with twitter, you should be redirected back to the Shoutify app, and the "Sign in" button should now say "Sign out" and there should be an additional "App" button.

## Contributing

You are now ready to develop! Congratulations on getting Shoutify up and running!

Next Steps:

- Read the [Contributing Guide](./CONTRIBUTING.md)
- Read the [Code of Conduct](./CODE_OF_CONDUCT.md)
