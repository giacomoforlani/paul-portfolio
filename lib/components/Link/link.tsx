import React, { PropsWithChildren } from 'react';

import style from './link.module.scss';

type LinkProps = PropsWithChildren<PropsWithClass<{
  target?: string;
  url?: string;
  onClick?: () => void;
}>>;

const Link = ({
  children,
  className,
  target,
  url,
  onClick = () => {},
  ...attributes
}: LinkProps) => (
  <a
    {...attributes}
    className={[style.Link, className].join(' ')}
    href={url ?? '#'}
    target={target}
    onClick={onClick}
  >
    {children}
  </a>
);

export { Link };
