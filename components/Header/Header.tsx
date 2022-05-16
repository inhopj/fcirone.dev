import classnames from 'classnames'
import Anchor from '../Link/Anchor';

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
    </div>
  )
}

export default Header;