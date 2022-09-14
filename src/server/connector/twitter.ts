import { TwitterApi } from 'twitter-api-v2';

export class Twitter {
  client: TwitterApi;
  access_token: string;
  constructor(accessToken: string) {
    this.client = new TwitterApi(accessToken);
    this.access_token = accessToken;
  }

  getMe() {
    return this.client.v2.me();
  }
}
