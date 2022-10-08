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

export const DynamicNav: React.FC<Record<string, unknown>> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const match = useTailWindResponsive('md');

  useEffect(() => {
    !match ? setIsOpen(false) : setIsOpen(true);
  }, [match]);

  return (
    <section
      className={`flex flex-col p-3  md:max-w-xs bg-gray-800 ${
        isOpen ? 'w-64' : ''
      }`}
    >
      <header className="my-2">
        <div className="flex justify-center items-center">
          <Icon icon="SHOUTIFY_LOGO" p={0} className="mx-2 py-4" />
          <h1
            className={`font-semibold text-center text-2xl ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            Shoutify
          </h1>
        </div>
      </header>
      <nav className="flex flex-1">
        <ul className="w-full font-light">
          {navItems.map((item, i) => {
            return (
              <NavItem
                key={i}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isOpen={isOpen}
                isActive={router ? router.pathname === item.href : false}
              />
            );
          })}
        </ul>
      </nav>
      {/* footer */}
      <div className="space-y-3">
        <Link href="/settings" passHref>
          <div
            className={`py-3 flex justify-between items-center
                            cursor-pointer 
                            ${
                              isOpen
                                ? 'p-3 rounded-md bg-gray-900 hover:bg-gray-700'
                                : ' rounded-none '
                            }`}
          >
            <div className="flex items-center">
              <Avatar.Avatar className="rounded-full inline-flex  aspect-square w-10">
                <Avatar.AvatarImage
                  className="rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="username"
                />
                <Avatar.AvatarFallback delayMs={600}>SH</Avatar.AvatarFallback>
              </Avatar.Avatar>
            </div>
            <span
              className={`px-2 flex flex-1 text-sm text-gray-300 ${
                isOpen ? 'flex' : 'hidden'
              }`}
            >
              @username
            </span>
            <div className={`text-gray-300 ${isOpen ? 'flex' : 'hidden'}`}>
              <Icon size={16} icon="SETTINGS" p={0} />
            </div>
          </div>
        </Link>
        <div
          className="p-1 flex justify-start items-center bg-gray-900 rounded-md cursor-pointer hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`px-2 block flex-1 text-sm  font-medium text-gray-300 ${
              isOpen ? 'block' : 'hidden'
            }  `}
          >
            Collapse
          </span>
          <Icon
            icon="COLLAPSE_RIGHT"
            size={18}
            className={`text-semibold ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
    </section>
  );
};

export default DynamicNav;
