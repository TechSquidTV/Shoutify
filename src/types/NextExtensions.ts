import { NextComponentType, NextPage } from 'next';
import { AppInitialProps } from 'next/app';
import { AppContextType, NextPageContext } from 'next/dist/shared/lib/utils';
import { NextRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';

export type AppTypeWithLayout = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsTypeWithLayout
>;

type AppPropsTypeWithLayout<
  R extends NextRouter = NextRouter,
  P = Record<string, unknown>,
> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, unknown, P> & {
    getLayout: (page: React.ReactNode) => ReactElement<any, any> | null;
  };
  router: R;
  __N_SSG?: boolean;
  __N_SSP?: boolean;
  __N_RSC?: boolean;
};

export type PageWithLayout = NextPage & {
  getLayout: (page: React.ReactNode) => ReactElement<any, any> | null;
};
