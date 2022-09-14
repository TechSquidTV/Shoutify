import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { Icon } from '../components/atoms/Icon';
import { PageWithLayout } from '../types/NextExtensions';
import { Button } from '../components/atoms/Button';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useTailWindResponsive } from '../hooks/useTailWindResponsive';
const Home: PageWithLayout = () => {
  const { data: session } = useSession();
  const isLarge = useTailWindResponsive('lg');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  useEffect(() => {
    isLarge ? setIsOpen(true) : setIsOpen(false);
  }, [isLarge]);

  return (
    <>
      <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
        <nav className="flex flex-col w-full justify-between text-2xl lg:flex-row">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <Icon icon="SHOUTIFY_LOGO" p={0} size={26} className="mx-2" />
              <h1 className="font-bold">Shoutify</h1>
            </div>
            <div className="lg:hidden">
              <Button
                aria-label="toggle menu"
                title="toggle menu"
                className="rounded-md h-10 hover:bg-gray-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Icon icon="MENU" />
              </Button>
            </div>
          </div>
          <div className="flex">
            <ul
              className={`${
                isOpen ? '' : 'hidden'
              } flex flex-col lg:flex-row lg:items-center lg:space-x-8`}
            >
              {navItems.map((item, i) => {
                return (
                  <Link href={item.href} key={i}>
                    <a>{item.name}</a>
                  </Link>
                );
              })}
              <li className="text-sm">
                {!session && (
                  <>
                    <Button
                      onClick={() => {
                        signIn('twitter');
                      }}
                      title={'sign in'}
                      variant="primary"
                      className="mx-2 my-2 lg:my-0"
                    >
                      Sign in
                    </Button>
                  </>
                )}
                {session && (
                  <>
                    <Button href="/app" title="App" variant="primary">
                      App
                    </Button>
                    <Button
                      onClick={() => signOut()}
                      title={'sign in'}
                      variant="primary"
                      className="mx-2"
                    >
                      Sign out
                    </Button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <section className="w-full my-4">
          <div className="flex flex-row">
            <div className="flex flex-1 justify-center items-center">
              <Image
                src="/assets/shoutify-preview.png"
                layout="intrinsic"
                width={450}
                height={400}
                alt="Shoutify preview screenshot of the app homepage."
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
