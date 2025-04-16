/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 */

import { FC, SVGProps } from "react";

const ConnectionIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = "100",
  height = "100",
  x = "0",
  y = "0",
  viewBox = "0 0 512.115 512.115",
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x={x}
      y={y}
      viewBox={viewBox}
      {...rest}
    >
      <circle cx="255.998" cy="374.496" r="32.133" />
      <path d="M259.46 342.551c20.068 21.447 2.961 57.089-26.924 53.889 19.876 21.242 55.595 7.028 55.595-21.944 0-16.576-12.553-30.217-28.671-31.945zM346.922 272.908c-14.694-11.793-31.719-20.793-50.261-26.198l28.056-28.056a181.486 181.486 0 0144.53 26.284c8.351 6.698 9.121 19.122 1.552 26.692-6.461 6.46-16.738 7.007-23.877 1.278zm-204.172-27.97c-8.351 6.698-9.122 19.122-1.552 26.692 6.109 6.254 16.525 7.178 23.876 1.278 20.705-16.617 46.037-27.689 73.723-30.964l35.859-35.859c-48.401-4.971-95.296 9.491-131.906 38.853zm157.933-64.88l29.253-29.253c-79.639-25.044-168.342-8.412-234.2 47.892-7.97 6.814-8.541 18.928-1.127 26.343 6.568 6.568 17.121 7.079 24.173 1.035 51.196-43.872 118.577-59.715 181.901-46.017zm116.705 44.982c7.415-7.415 6.844-19.529-1.127-26.343a248.048 248.048 0 00-42.385-29.203l-26.573 26.573a211.854 211.854 0 0145.912 30.008c7.052 6.044 17.605 5.533 24.173-1.035zm-116.359 95.457c6.604 4.525 15.912 4.623 22.908-2.005 7.88-7.88 6.751-21.016-2.422-27.343a114.995 114.995 0 00-49.967-19.326l-37.95 37.95c22.182-6.494 47.03-3.254 67.431 10.724z" />
      <path d="M416.261 198.697a248.048 248.048 0 00-42.385-29.203l-7.388 7.388a247.907 247.907 0 0129.774 21.814c9.055 7.741 8.317 21.88-1.529 28.533 6.982 4.781 16.543 3.922 22.655-2.19 7.414-7.413 6.843-19.528-1.127-26.342zM369.247 244.938a181.486 181.486 0 00-44.53-26.284l-6.327 6.327a181.811 181.811 0 0130.857 19.957c9.462 7.589 8.937 22.091-1.089 28.871 7.054 4.744 16.544 3.917 22.64-2.178 7.57-7.571 6.8-19.996-1.551-26.693zM321.515 291.148a114.995 114.995 0 00-49.967-19.326l-3.48 3.48a115.07 115.07 0 0133.447 15.846c10.331 7.126 10.2 22.482-.221 29.513 6.595 4.357 15.745 4.365 22.643-2.17 7.88-7.879 6.751-21.016-2.422-27.343z" />
      <path d="M437.077 75.038c-100.046-100.044-261.982-100.057-362.039 0-100.044 100.042-100.058 261.98 0 362.039 100.046 100.044 261.981 100.057 362.04 0 100.043-100.046 100.057-261.981-.001-362.039zm-25.685 67.607c1.856-1.856 4.94-1.582 6.444.568 54.271 77.582 45.249 184.719-22.326 252.297-67.579 67.576-174.715 76.599-252.298 22.326-2.15-1.504-2.423-4.589-.568-6.444l268.748-268.747zM94.274 368.912C5.205 241.953 93.085 58.843 256.057 58.843c40.925 0 79.777 12.225 112.855 35.431 2.147 1.506 2.42 4.588.565 6.443l-268.76 268.761c-1.855 1.854-4.937 1.581-6.443-.566z" />
      <path d="M349.926 17.756c141.317 87.019 164.005 282.465 47.152 399.321-74.64 74.638-183.463 93.269-274.888 57.282 97.36 59.953 228.457 49.147 314.888-37.282 131.453-131.456 82.523-352.533-87.152-419.321z" />
    </svg>
  );
};

export default ConnectionIcon;
