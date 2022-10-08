import React from 'react';
import Link from 'next/link';
import { Icon, IconName } from '../atoms/Icon';

interface NavItemProps {
  href: string;
  text: string;
  icon: IconName;
  isActive: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export class MobileNavItem extends React.Component<NavItemProps> {
  ActiveStyle = 'bg-gray-900 font-medium';
  render() {
    return (
      <li
        className={`
                            m-2 rounded-md hover:bg-gray-700 focus:scale-105 ${
                              this.props.isActive ? this.ActiveStyle : ''
                            }
                `}
        onClick={() => this.props.setMenuOpen(false)}
      >
        <Link href={this.props.href}>
          <a className="flex items-center">
            <Icon icon={this.props.icon} />
            <span className={`flex-1 ml-2 `}>{this.props.text}</span>
          </a>
        </Link>
      </li>
    );
  }
}
