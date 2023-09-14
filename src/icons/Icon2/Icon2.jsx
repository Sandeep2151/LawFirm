/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon2 = ({ color = "#FDD65B", className }) => {
  return (
    <svg
      className={`icon-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.1172 0H0.882759C0.395224 0 0 0.395224 0 0.882759V15.1172C0 15.6048 0.395224 16 0.882759 16H8.55172V9.81241H6.46897V7.39034H8.55172V5.60828C8.55172 3.54207 9.81517 2.41655 11.6579 2.41655C12.2789 2.4152 12.8995 2.44651 13.5172 2.51034V4.67034H12.2483C11.2441 4.67034 11.0483 5.14483 11.0483 5.84552V7.38759H13.4483L13.1366 9.80966H11.0345V16H15.1172C15.6048 16 16 15.6048 16 15.1172V0.882759C16 0.395224 15.6048 0 15.1172 0Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon2.propTypes = {
  color: PropTypes.string,
};
