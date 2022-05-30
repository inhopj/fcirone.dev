import React from '../components/Icons/React'
import { MutableRefObject, useState } from 'react';
import classnames from 'classnames';
import { Anchors } from '../interfaces/interfaces';
import { useOutsideClick } from '../hooks/useOutsideClick';

const FloatingGuy = ({
  anchors
}: Anchors) => {
  const [toggle, setToggle] = useState(false);
  const handleOutsideClick = () => {setToggle(false)}
  const ref = useOutsideClick(handleOutsideClick)

  return (
    <div
      ref={ref as any}
      className='flex flex-col-reverse items-center fixed bottom-5 right-5 md:bottom-10 md:right-10'
    >
      <div
        className='flex justify-center items-center w-9 h-9 rounded-lg bg-[#f0db4f] text-lg'
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