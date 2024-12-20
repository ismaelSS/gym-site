export interface iCircularLogo {
  size?: number
  isAnimate?: boolean
  text: string
  animationTime?: number
  className?: string
  hexadecimalColor?: string
  textClass?: string
}

export default function CircularLogo({
  size = 1,
  animationTime = 20,
  className = '',
  isAnimate = false,
  text,
  hexadecimalColor = '#fff',
  textClass = '',
}: iCircularLogo) {
  return (
    <div
      className={`${isAnimate ? `animate-spin ` : ''}  w-fit  ${className}`}
      style={{ animationDuration: `${animationTime}s` }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={`${size * 60}px`}
        height={`${size * 60}px`}
        viewBox="100 55 100 190"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <circle cx="100" cy="100" r="75" fill="none" />
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text
            fill={hexadecimalColor}
            className={`text-3xl font-bold ${textClass}`}
          >
            <textPath xlinkHref="#circlePath">{text}</textPath>
          </text>
        </g>
      </svg>
    </div>
  )
}
