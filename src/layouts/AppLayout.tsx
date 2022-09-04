import Head from "next/head";
import React from "react";
import { AppNav } from "../components/nav/AppNav";

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
            name="description"
            content="Schedule and manage social media posts"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex h-full">
          <AppNav />
          <main className="flex-1 px-4">{this.props.children}</main>
        </div>
      </>
    );
  }
}
