import React from 'react';
import type { ComponentStoryFn, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/atoms/Button';

export default {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'An atomic button component that can handle links and onClick events.',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStoryFn<typeof Button> = (args) => (
  <Button {...args}>{`Button ${
    args.variant ? args.variant : 'default'
  }`}</Button>
);

export const Default = Template.bind({});

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
};
ButtonPrimary.parameters = {
  docs: {
    description: {
      story:
        'Primary button, should be used sparingly, only for the critical call to actions on the page, such as submitting a form.',
    },
  },
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: 'secondary',
};
ButtonSecondary.parameters = {
  docs: {
    description: {
      story: 'The secondary button is the default button style.',
    },
  },
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  href: 'https://github.com/TechSquidTV/Shoutify',
};
ButtonLink.parameters = {
  docs: {
    description: {
      story: 'The button can also be used as a link, by passing the href prop.',
    },
  },
};
