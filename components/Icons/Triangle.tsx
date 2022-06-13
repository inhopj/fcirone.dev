import classNames from "classnames";

interface Props {
  className?: string;
  fill: string;
  size: number;
}

const Triangle = ({ className: parentClassNames, fill, size }: Props) => {
  return (
    <svg
      className={classNames(parentClassNames)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      fill={fill}
      width={size}
      height={size}
    >
      <polygon
        points="16,0 32,32 0,32"
        transform="matrix(8 0 0 8 0 0)" />
    </svg>
  )
}

export default Triangle