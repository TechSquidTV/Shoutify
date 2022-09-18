import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Avatar from '@radix-ui/react-avatar';

import { NavItem } from './NavItem';
import { IconName, Icon } from '../atoms/Icon';
import { useTailWindResponsive } from '../../hooks/useTailWindResponsive';

type navLink = {
  href: string;
  icon: IconName;
  text: string;
};

const navItems: navLink[] = [
  { href: '/app', icon: 'CHAT_NEW', text: 'Create Post' },
  { href: '/events', icon: 'TICKET_ADD', text: 'Create Event' },
  { href: '/mail', icon: 'MAIL_ADD', text: 'Create Message' },
  { href: '/queue', icon: 'LIST', text: 'Queue' },
  { href: '/drafts', icon: 'EDIT', text: 'Drafts' },
  { href: '/analytics', icon: 'LINE_CHART', text: 'Analytics' },
];

export const AppNav: React.FC<Record<string, unknown>> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const match = useTailWindResponsive('md');

  useEffect(() => {
    !match ? setIsOpen(false) : setIsOpen(true);
  }, [match]);

  return (
    <section className={`p-4 md:max-w-xs bg-gray-800 ${isOpen ? 'w-64' : ''}`}>
      <header className="">
        <div className="flex items-center h-12 py-2">
          <button
            aria-label="toggle menu"
            title="toggle menu"
            className="z-10 rounded-md absolute h-10 hover:bg-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon icon="MENU" />
          </button>
          <div
            className={`flex flex-1 justify-center font-bold text-2xl my-2 ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <Icon icon="SHOUTIFY_LOGO" p={0} size={24} className="mx-2" />
            <h1 className="font-medium">Shoutify</h1>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center rounded-md bg-gray-900 p-4 mt-1 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <div className="flex flex-1 flex-col items-center">
            <Avatar.Avatar className="rounded-full inline-flex w-20 h-20">
              <Avatar.AvatarImage
                className="rounded-full object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="username"
              />
              <Avatar.AvatarFallback delayMs={600}>SH</Avatar.AvatarFallback>
            </Avatar.Avatar>
            <span className="block p-2">@username</span>
            <ul className="text-sm text-gray-500">
              <li className="flex flex-row items-center">
                <Icon icon="TWITTER" />
                <span>3.4K followers</span>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-end">
            <Link href="/settings">
              <a className={`leading-3 text-gray-700 hover:text-gray-500`}>
                <Icon size={16} icon="SETTINGS" p={0} />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <nav className="flex">
        <ul className="w-full font-light">
          {navItems.map((item, i) => {
            return (
              <NavItem
                key={i}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isOpen={isOpen}
                isActive={router.pathname === item.href}
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default AppNav;
