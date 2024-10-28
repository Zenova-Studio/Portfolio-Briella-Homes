interface Props {
  fill?: boolean;
}

export default function HeartIconAlt(props: Props) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={props.fill ? "#F7DDDD" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.62 21.6913C12.28 21.8113 11.72 21.8113 11.38 21.6913C8.48 20.7013 2 16.5713 2 9.57132C2 6.48132 4.49 3.98132 7.56 3.98132C9.38 3.98132 10.99 4.86132 12 6.22132C13.01 4.86132 14.63 3.98132 16.44 3.98132C19.51 3.98132 22 6.48132 22 9.57132C22 16.5713 15.52 20.7013 12.62 21.6913Z"
        stroke="#F7DDDD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
