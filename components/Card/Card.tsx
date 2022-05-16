import React from 'react';
import classnames from 'classnames';

export interface Props {
  className?: string;
  centerText?: boolean;
  title?: string;
  subtitle?: string;
  href?: string;
}

const Card = ({
  className: parentClassNames,
  centerText = false,
  title,
  subtitle,
}: Props) => {

  return (
    <div
      className={classnames(
        'bg-zinc-200 dark:bg-zinc-800 rounded-lg p-3 transition-all duration-500',
        parentClassNames
      )}
    >
      <p
        className={classnames(
          "text-base md:text-lg text-black dark:text-white",
          {
            'text-center': centerText
          },
        )}
      >
        {title}
      </p>
      <p
        className={classnames(
          "text-xs md:text-sm text-zinc-500",
          {
            'text-center': centerText
          }
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Card;
