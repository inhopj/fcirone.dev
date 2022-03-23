import classnames from 'classnames'


interface Props {
  className?: String;
  items: Feed[]
}

export interface Feed {
  title: string;

}

const Feeds = ({
  className: parentClassNames,
  items
}: Props) => {

  // const tenRandomItems = 
  return (
    <div
      className={classnames(
        'flex flex-col max-w-2xl w-full pl-3',
        parentClassNames
      )}
    >
      {items.map((item, index) => (
        <div key={index}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Feeds;