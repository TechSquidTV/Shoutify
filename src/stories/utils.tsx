import { SessionProvider } from 'next-auth/react';
import { ReactComponentElement, ReactElement, ReactNode } from 'react';
import { PageWithLayout } from '../types/NextExtensions';

export function getSessionWrappedComponent(component: any): ReactElement {
  return <SessionProvider session={null}>{component}</SessionProvider>;
}
