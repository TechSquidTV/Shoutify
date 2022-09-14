import { Twitter } from '../connector';
import { createProtectedRouter } from './protected-router';

// Example router with queries that can only be hit if the user requesting is signed in
export const protectedAppRouter = createProtectedRouter()
  .query('getSession', {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .query('getMeTwitter', {
    async resolve({ ctx }) {
      const userAccount = await ctx.prisma.account.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      });
      if (!userAccount) {
        throw new Error('No account found');
      }
      const accessToken = userAccount.access_token;
      if (!accessToken) {
        throw new Error(
          'No Twitter access token found in database for this user',
        );
      }
      const twitter = new Twitter(accessToken);
      const userData = await twitter.getMe();
      return userData;
    },
  })
  .query('getSecretMessage', {
    resolve({}) {
      return 'He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.';
    },
  });
