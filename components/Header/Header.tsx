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
      {/* TODO - Add link to portfolio repo */}
      <div className='flex'>
      <Github className='fill-white hover:fill-yellow-200 w-8' />
      </div>
    </div>
  )
}

export default Header;