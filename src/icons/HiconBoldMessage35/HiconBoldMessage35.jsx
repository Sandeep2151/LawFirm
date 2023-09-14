/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const HiconBoldMessage35 = ({ color = "white", className }) => {
  return (
    <svg
      className={`hicon-bold-message-35 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.33322 6.40947C2 7.64945 2 9.36008 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 9.35129 22 7.63806 21.6634 6.39709L19.5607 8.49986C17.9284 10.1321 16.6492 11.4113 15.517 12.2752C14.3581 13.1594 13.2653 13.6789 11.9999 13.6789C10.7344 13.6789 9.64167 13.1594 8.48274 12.2752C7.35048 11.4113 6.07131 10.1321 4.43904 8.49984L2.48385 6.54466L2.33322 6.40947Z"
        fill={color}
      />
      <path
        className="path"
        d="M3 5L3.10885 5.09007L3.51587 5.45535L5.45913 7.39861C7.14079 9.08027 8.34981 10.287 9.39261 11.0827C10.4181 11.8651 11.1942 12.1789 11.9999 12.1789C12.8055 12.1789 13.5816 11.8651 14.6071 11.0827C15.6499 10.287 16.8589 9.08027 18.5406 7.39861L20.8485 5.0907L20.9741 4.96579C20.6657 4.54132 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.3084 4.57553 3 5Z"
        fill={color}
      />
    </svg>
  );
};

HiconBoldMessage35.propTypes = {
  color: PropTypes.string,
};
