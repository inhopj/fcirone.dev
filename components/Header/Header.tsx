import classnames from 'classnames'
import Anchor from '../Link/Anchor'
import Image from 'next/image'

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {

  // TODO - Create constants file
  const homePath = '/'
  const feedsPath = '/feeds'

  return (
    <div
      className={classnames(
        'flex justify-between items-center max-w-2xl w-full text-lg',
        parentClassNames
      )}
    >
      <div className="flex justify-start">
        {/* TODO - Create constants file */}
        <Anchor
          path={homePath}
          title="Home"
          className='pl-0 md:pl-3'
        />
        <Anchor
          path={feedsPath}
          title="Feeds"
        />
      </div>
      {/* TODO - Add link to portfolio repo */}
      {/* TODO - use svg instead of png */}
      <div className='flex'>
        <Image
          src='/github.svg'
          alt="logo-icon"
          width={25}
          height={25}
        />
      </div>
    </div>
  )
}

export default Header;