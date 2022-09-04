import React from "react";
import Link from "next/link";
import { styleAnimated } from "../../styles/styles";
import { Icon, IconName } from "../atoms/Icon";

interface NavItemProps {
  href: string;
  text: string;
  icon: IconName;
  isActive: boolean;
  isOpen: boolean;
}

export class NavItem extends React.Component<NavItemProps> {
  ActiveStyle = "bg-gray-900 font-medium";
  render() {
    return (
      <li
        className={`my-2 rounded-md hover:bg-gray-700 focus:scale-105 ${styleAnimated} ${
          this.props.isActive ? this.ActiveStyle : ""
        }`}
      >
        <Link href={this.props.href}>
          <a className="flex items-center">
            <Icon icon={this.props.icon} />
            <span
              className={`flex-1 ml-2 ${this.props.isOpen ? "" : "hidden"}`}
            >
              {this.props.text}
            </span>
          </a>
        </Link>
      </li>
    );
  }
}
