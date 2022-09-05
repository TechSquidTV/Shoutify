import React from 'react';
export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const styles = ['container my-4', props.className].join(' ');
  return <div className={styles}>{props.children}</div>;
};
