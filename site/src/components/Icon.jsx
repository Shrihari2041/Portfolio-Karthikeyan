/**
 * Line icon — renders a 24x24 stroked SVG from an array of path `d` strings.
 * Matches the clean line-icon set used throughout the design.
 */
export default function Icon({ paths, size = 22, strokeWidth = 1.8, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}
