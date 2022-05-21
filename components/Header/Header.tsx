import classnames from 'classnames'
import Anchor from '../Link/Anchor'
import Github from '../Icons/Github'

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
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        className='flex cursor-pointer'
        href='https://github.com/inhopj/nextjs_typescript'
        target="_blank"
        rel="noopener"
      >
        <Github className='fill-white hover:fill-yellow-200 w-8' />
      </a>
    </div>
  )
}

export default Header;