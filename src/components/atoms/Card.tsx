import React from 'react';
export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const styles = ['container flex px-4 rounded-md', props.className].join(' ');
  return <div className={styles}>{props.children}</div>;
};
