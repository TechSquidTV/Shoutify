import React from 'react';
import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import Home from '../../pages/index';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'pages/HomePage',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Default = () => {
  return (
    <SessionProvider session={null}>
      {Home.getLayout ? Home.getLayout(<Home />) : <Home />}
    </SessionProvider>
  );
};
