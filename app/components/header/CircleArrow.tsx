type CircleArrowProps = {
  className?: string;
};

export function CircleArrow({ className }: CircleArrowProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
    >
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
    </svg>
  );
}

export default CircleArrow;
