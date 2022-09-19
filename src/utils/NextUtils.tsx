import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode } from 'react';

export const getSessionWrappedComponent = (
  Component: any,
  session: any,
  props?: any,
): ReactElement => {
  const getComponent = (): ReactNode => {
    if (Component.getLayout) {
      return Component.getLayout(<Component {...props} />);
    }
    return <Component {...props} />;
  };
  return <SessionProvider session={session}>{getComponent()}</SessionProvider>;
};
