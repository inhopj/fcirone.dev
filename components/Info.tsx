/* eslint-disable react/jsx-no-target-blank */
import classnames from 'classnames';
import classNames from 'classnames';
import Link from 'next/link';
import { RssSimple } from 'phosphor-react';
import React from '../components/Icons/React'
import Nfc from "./Icons/Nfc";
import Nodejs from './Icons/Nodejs';

interface Props {
  className?: string;
}
const newsPath = '/news'
const Info = ({ className: parentClassNames }: Props) => {
  return (
    <div className={classnames(
      'flex-col',
      parentClassNames
    )}>
      <div className='flex max-w-2xl w-full md:pl-3 mb-3'>
        <div className='flex justify-center items-center bg-zinc-800 rounded-lg p-4 text-white mr-2 border-2'>
          <a
            href='https://w3c.github.io/web-nfc/'
            target='_blank'
          >
            <Nfc className='flex w-4 h-5' />
          </a>
        </div>
        <div className='flex bg-zinc-800 rounded-lg p-3 text-white w-full md:w-2/4'>
          <div className='flex items-center mr-1'>Currently experimenting with NFC</div>
        </div>
      </div>

      <div className='flex max-w-2xl w-full md:pl-3'>
        <div className='flex justify-center items-center bg-zinc-800 rounded-lg p-4 mr-2 border-2'>
          <Link href='/news'>
            <a>
              <RssSimple size={17} color="#ffffff" weight="bold" />
            </a>
          </Link>
        </div>
        <div className='flex bg-zinc-800 rounded-lg p-3 text-white w-full md:w-2/4'>

          <p className='flex items-center'>
            <span>I love</span>
            <Nodejs className='w-6 h-6 ml-1 mr-1' />
            <span>,</span>
            <React className='w-6 ml-1 mr-1' />
            <span>and web things</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info