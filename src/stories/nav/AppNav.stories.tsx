import type { ComponentMeta } from '@storybook/react';

import AppNav from '../../components/nav/AppNav';
import { getSessionWrappedComponent } from '../../utils/NextUtils';

export default {
  title: 'nav/AppNav',
  component: AppNav,
} as ComponentMeta<typeof AppNav>;

export const Default = () => {
  return getSessionWrappedComponent(AppNav, null);
};
