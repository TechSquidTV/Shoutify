import Head from 'next/head';
import React from 'react';
import { DynamicNav } from '../components/nav/DynamicNav';

interface LayoutProps {
  children: React.ReactNode;
}

export class AppLayout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Head>
          <title>Shoutify</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,  minimum-scale=1.0"
          />
          <meta
            name="description"
            content="Schedule and manage social media posts"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex h-full flex-col sm:flex-row">
          <DynamicNav />
          <main className="flex-1 px-4">{this.props.children}</main>
        </div>
      </>
    );
  }
}
