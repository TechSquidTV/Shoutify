import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Icon } from '../components/atoms/Icon';
import { PageWithLayout } from '../types/NextExtensions';
import { Button } from '../components/atoms/Button';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: PageWithLayout = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const navItems = [
    {
      name: 'Docs',
      href: '/docs',
    },
    {
      name: 'Community',
      href: '/community',
    },
    {
      name: 'Source',
      href: '/source',
    },
    {
      name: 'Sponsor',
      href: '/sponsor',
    },
  ];

  return (
    <>
      <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
        <nav className="flex flex-row w-full text-2xl justify-between">
          <div className="flex flex-row">
            <Icon icon="SHOUTIFY_LOGO" p={0} size={26} className="mx-2" />
            <h1 className="font-bold">Shoutify</h1>
          </div>
          <ul className="flex items-center space-x-8">
            {navItems.map((item, i) => {
              return (
                <Link href={item.href} key={i}>
                  <a>{item.name}</a>
                </Link>
              );
            })}
          </ul>
        </nav>
        <section className="w-full my-4">
          <div className="flex flex-row">
            <div className="flex flex-1 justify-center items-center">
              <Image
                src="/assets/shoutify-preview.png"
                layout="intrinsic"
                width={450}
                height={400}
              />
            </div>
            <div className="flex-1">
              <div className="inline-block">
                <h1 className="text-5xl font-bold">
                  Schedule and manage social media posts
                </h1>
                <p>Take control and ownership of your social media presence.</p>
                <p>Open-source, self-hosted, and entirely free.</p>
                <div className="p-4 text-center font-bold">
                  <Button href="/app" title="Get Started" variant="primary">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
Home.getLayout = (page: ReactNode) => <>{page}</>;

export default Home;
