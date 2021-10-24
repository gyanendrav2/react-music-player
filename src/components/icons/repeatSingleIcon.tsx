import React from "react";

const RepeatSingleIcon = (): JSX.Element => {
  return (
    <svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_4:13)">
        <path
          d="M4.09432 15.42H4.76655V11.88H4.21655C4.15544 12.12 3.9721 12.3 3.78877 12.42C3.60544 12.6 3.4221 12.72 3.23877 12.72V13.32C3.54433 13.2 3.84988 13.02 4.09432 12.78V15.42Z"
          fill="#C7C5D0"
        />
        <path
          d="M4.27788 18C6.17232 18 7.76121 16.8 8.31121 15.12H15.5834C17.2945 15.12 18.8834 14.46 20.1057 13.26C21.3279 12.06 22.0001 10.44 22.0001 8.69997C22.0001 7.97997 21.8779 7.31997 21.6945 6.65997L18.5168 8.51997C18.5168 8.57997 18.5168 8.63997 18.5168 8.75997C18.5168 10.38 17.2334 11.7 15.6445 11.7H8.12788C7.39454 10.32 5.98899 9.41997 4.33899 9.41997C1.95565 9.41997 0.0612091 11.34 0.0612091 13.74C9.80236e-05 16.08 1.95565 18 4.27788 18ZM4.27788 10.74C5.86676 10.74 7.1501 12.06 7.1501 13.62C7.1501 15.24 5.86676 16.5 4.27788 16.5C2.68899 16.5 1.40565 15.18 1.40565 13.62C1.40565 12.06 2.68899 10.74 4.27788 10.74Z"
          fill="#C7C5D0"
        />
        <path
          d="M0.855556 10.14C1.28333 9.66 1.83333 9.3 2.44444 9.06C2.81111 8.94 3.17778 8.82 3.54444 8.76V8.7C3.54444 7.08 4.82778 5.76 6.41667 5.76H13.4444V8.04L20.4111 4.02L13.4444 0V2.28H6.35556C4.64444 2.28 3.05556 2.94 1.89444 4.2C0.672222 5.4 0 7.02 0 8.7C0 9.42 0.122222 10.08 0.305556 10.74C0.488889 10.56 0.672222 10.32 0.855556 10.14Z"
          fill="#C7C5D0"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_4:13"
          x={0}
          y={0}
          width={24}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4:13"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4:13"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_4:13"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RepeatSingleIcon;
