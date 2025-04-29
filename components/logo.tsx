export default function Logo() {
  return (
    <svg
      width="200"
      viewBox="0 0 800 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(10,10)">
        <circle
          cx="70"
          cy="70"
          r="65"
          strokeWidth="8"
          className="stroke-yellow-500"
          fill="none"
        />
        <text
          x="15"
          y="90"
          fontFamily="monospace"
          fontSize="48"
          className="fill-yellow-500"
        >
          {'<C/>'}
        </text>
      </g>
      <text
        x="160"
        y="100"
        fontFamily="Arial"
        fontSize="80"
        fontWeight="bold"
        className="fill-black dark:fill-white"
      >
        codeezy
      </text>
    </svg>
  );
}
