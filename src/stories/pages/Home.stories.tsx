import type { ComponentMeta } from '@storybook/react';

import Home from '../../pages/index';
import { getSessionWrappedComponent } from '../../utils/NextUtils';

export default {
  title: 'pages/HomePage',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Default = () => {
  return getSessionWrappedComponent(Home, null);
};
