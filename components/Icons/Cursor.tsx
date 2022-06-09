interface Props {
  className?: string;
  size: number;
}

const Cursor = ({ className: parentClassNames, size }: Props) => {
  return (
    <svg
      className={parentClassNames}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="#ffffff"
      viewBox="0 0 50 10"
    >
      <rect
        width="50"
        height="10"
        fill="none">
      </rect>
      <line
        x1="0"
        y1="10"
        x2="25"
        y2="10"
        fill="none"
        stroke="#fcf258"
        strokeWidth="6"
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.5s"
          repeatCount="indefinite"
        ></animate>
      </line>
    </svg>
  )
}

export default Cursor
