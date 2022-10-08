import React from 'react';
import dynamic from 'next/dynamic';
import { useTailWindResponsive } from '../../hooks/useTailWindResponsive';

export const DynamicNav: React.FC<Record<string, unknown>> = () => {
  const match = useTailWindResponsive('sm', 'max');
  const Nav = dynamic(() =>
    match ? import('./MobileNav') : import('./AppNav'),
  );

  return <Nav />;
};

export default DynamicNav;
