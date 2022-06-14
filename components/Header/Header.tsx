import classnames from 'classnames'
import Anchor from '../Link/Anchor'
import Github from '../Icons/Github'

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {

  // TODO - create constants file
  const homePath = '/'
  const newsPath = '/news'

  return (
    <div
      className={classnames(
        'flex justify-between items-center text-lg',
        parentClassNames
      )}
    >
      <div className="flex justify-start">
        {/* TODO - use ReactNode for the two anchor slots */}
        <Anchor
          path={homePath}
          title="Home"
          className='pl-0 md:pl-3'
        />
        <Anchor
          path={newsPath}
          title="News"
        />
      </div>
      {/* TODO - create constants file with links */}
      {/* TODO - add github class to have consistent hovering style as Github in Contacts comp */}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        className='flex cursor-pointer'
        href='https://github.com/inhopj/fcirone.dev'
        target="_blank"
        rel="noopener"
      >
        <Github className='fill-white w-10' />
      </a>
    </div>
  )
}

export default Header;