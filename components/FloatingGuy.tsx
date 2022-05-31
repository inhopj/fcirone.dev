import React from '../components/Icons/React'
import { useState } from 'react';
import classnames from 'classnames';
import { Anchors } from '../interfaces/interfaces';

const FloatingGuy = ({
  anchors
}: Anchors) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className='flex flex-col-reverse items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
    >
      <div
        className='flex justify-center items-center w-12 h-12 rounded-full bg-[#f0db4f] text-lg font-semibold'
        onClick={() => setToggle(!toggle)}
      >
        #
      </div>
      {anchors.map(({ href, icon, parentClassNames }, index) => {
        return (
          <div
            // TODO - use classname also for transitionDelay
            style={{ transitionDelay: `${index * 50}ms` }}
            key={href}
            className={classnames(
              parentClassNames,
              "flex transition-all duration-300",
              { "translate-y-10 scale-0 opacity-0": !toggle },
              { "opacity-1 translate-y-0 scale-1": toggle }
            )}
          >
            <a
              href={href}
            >
              {icon}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default FloatingGuy