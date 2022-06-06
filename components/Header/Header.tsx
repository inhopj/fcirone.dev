import classnames from 'classnames'
import Anchor from '../Link/Anchor'
import Github from '../Icons/Github'

interface Props {
  className?: string;
}

const Header = ({ className: parentClassNames }: Props) => {

  const homePath = '/'
  const feedsPath = '/feeds'

  return (
    <div
      className={classnames(
        'flex justify-between text-lg',
        parentClassNames
      )}
    >
      <div className="flex justify-start">
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
      {/* TODO - create constants file with links */}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        className='flex cursor-pointer'
        href='https://github.com/inhopj/fcirone.dev'
        target="_blank"
        rel="noopener"
      >
        {/* TODO - increase a bit dimensions */}
        <Github className='fill-white w-10' />
      </a>
    </div>
  )
}

export default Header;