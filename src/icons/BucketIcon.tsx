type BucketIconProps = {
  size?: number;
};

export const BucketIcon = ({ size = 50 }: BucketIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 38.25C45.736 38.25 55.25 34.4444 55.25 29.75C55.25 25.0556 45.736 21.25 34 21.25C22.2639 21.25 12.75 25.0556 12.75 29.75C12.75 34.4444 22.2639 38.25 34 38.25Z"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M55.25 29.75L46.75 58.4375C38.675 62.6875 29.325 62.6875 21.25 58.4375L12.75 29.75"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 29.75C12.75 18.0625 22.3125 8.5 34 8.5C45.6875 8.5 55.25 18.0625 55.25 29.75"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.25 10.625H29.75C28.6875 10.625 27.625 9.775 27.625 8.5C27.625 7.4375 28.475 6.375 29.75 6.375H38.25C39.3125 6.375 40.375 7.225 40.375 8.5C40.375 9.775 39.525 10.625 38.25 10.625Z"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
