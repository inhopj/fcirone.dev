import classnames from 'classnames'
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  title: string;
  path: string;
}

const Anchor = ({
  className: parentClassNames,
  title,
  path
}: Props) => {

  const router = useRouter();
  
  const isActive = router.asPath === path

  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href={path}
      className={classnames(
        parentClassNames,
        isActive
          ? 'font-semibold text-zinc-200'
          : 'font-normal text-zinc-400',
        'rounded-lg cursor-pointer hover:text-white px-3 text-gray-400'
      )}>
      {title}
    </a>
  )
}

export default Anchor