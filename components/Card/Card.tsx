import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

export interface Props {
  className?: string;
  elevate?: boolean;
  title?: string;
  subtitle?: string;
  href?: string;
}

const Card = ({
  className: parentClassNames,
  elevate,
  title,
  subtitle,
  href
}: Props) => {
  const [path, setPath] = useState('')
  useEffect(() => {setPath(href as string)}, [href])
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={path}
      target='_blank'
      className={classnames(
        parentClassNames,
        'bg-zinc-200 dark:bg-zinc-800 rounded-lg p-3',
        {
          'shadow rounded-small': elevate,
        }
      )}
    >
      <p
        className="text-base md:text-lg text-black dark:text-white"
      >
        {title}
      </p>
      <p
        className="text-xs md:text-sm text-zinc-500"
      >
        {subtitle}
      </p>
    </a>
  );
};

export default Card;
