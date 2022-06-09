import classNames from "classnames";

interface Props {
  className?: string;
}

const Nfc = ({ className: parentClassNames }: Props) => {
  return (
    <svg
      className={classNames(parentClassNames)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.39 34.19"
      fill="white"
    >
      <g
        data-name="Layer 2"
      >
        <g
          data-name="Layer 1">
          <path
            d="M1.43,34.19A1.43,1.43,0,0,1,0,32.76V1.43A1.43,1.43,0,0,1,2.39.37L21,17.17a1.43,1.43,0,0,1-1.92,2.12L2.86,4.65V32.76A1.43,1.43,0,0,1,1.43,34.19Z"
          />
          <path
            d="M24,34.19a1.42,1.42,0,0,1-.95-.37L4.39,17A1.43,1.43,0,0,1,6.3,14.9L22.53,29.54V1.43a1.43,1.43,0,0,1,2.86,0V32.76A1.42,1.42,0,0,1,24,34.19Z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Nfc