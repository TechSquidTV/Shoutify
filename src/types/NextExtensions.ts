import { NextComponentType, NextPage } from 'next';
import { AppInitialProps } from 'next/app';
import {
  AppContextType,
  AppPropsType,
  NextPageContext,
} from 'next/dist/shared/lib/utils';
import { NextRouter } from 'next/router';

export type AppTypeWithLayout = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsTypeWithLayout
>;

type AppPropsTypeWithLayout<
  R extends NextRouter = NextRouter,
  P = {},
> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
  };
  router: R;
  __N_SSG?: boolean;
  __N_SSP?: boolean;
  __N_RSC?: boolean;
};

export type PageWithLayout = NextPage & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
};
