import React from 'react';
import classnames from 'classnames';
import { Card } from '../interfaces/interfaces';

const Card = ({
  className: parentClassNames,
  centerText = false,
  title,
  subtitle,
}: Card) => {

  return (
    <div
      className={classnames(
        'bg-zinc-800 rounded-lg pr-12 p-3',
        parentClassNames
      )}
    >
      <p
        className={classnames(
          "text-base md:text-lg text-white",
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
