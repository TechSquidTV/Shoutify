import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTailWindResponsive } from '../../hooks/useTailWindResponsive';
import * as Avatar from '@radix-ui/react-avatar';
import { MobileNavItem } from './MobileNavItem';
import { IconName, Icon } from '../atoms/Icon';

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

export const MobileNav = () => {
  const router = useRouter();
  const match = useTailWindResponsive('xs', 'max');
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <section className="relative p-2">
      <header className="flex justify-between items-center">
        <div className="flex flex-1 items-center">
          <Icon icon="SHOUTIFY_LOGO" p={0} size={18} className="mx-2 " />
          <h1 className={`font-semibold text-center text-lg `}>Shoutify</h1>
        </div>
        <Link href="/settings">
          <a className="p-1 flex justify-between items-center bg-gray-700 rounded-full">
            <span
              className={`mx-2  text-xs text-gray-300 ${
                match ? 'hidden' : 'block'
              }`}
            >
              @username
            </span>
            <div>
              <Avatar.Avatar className="rounded-full flex  aspect-square w-9">
                <Avatar.AvatarImage
                  className="rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="username"
                />
                <Avatar.AvatarFallback delayMs={600}>SH</Avatar.AvatarFallback>
              </Avatar.Avatar>
            </div>
          </a>
        </Link>
        <div
          className="px-1 mr-0"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Icon icon="MENU" />
        </div>
      </header>
      <nav
        className={`absolute z-[99] -top-[100rem] left-0 w-full h-screen bg-gray-800 transition-all ${
          menuOpen && 'top-0   '
        }`}
      >
        <div
          className="p-3 flex flex-row-reverse"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <Icon icon="MENU" />
        </div>
        <ul className="flex flex-col  max-w-sm mx-auto">
          {navItems.map((item, i) => {
            return (
              <MobileNavItem
                key={i}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isActive={router ? router.pathname === item.href : false}
                setMenuOpen={setMenuOpen}
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default MobileNav;
