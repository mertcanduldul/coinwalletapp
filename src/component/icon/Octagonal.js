import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOctagonal(props) {
  return (
    <Svg
      width={375}
      height={177}
      viewBox="0 0 375 177"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        d="M177.477-71.569C279.931-46.005 385.519 21.832 435.325 75.05c49.805 53.217-58.625 66.248-58.625 66.248s-76.9-76.702-173.745-110.17C106.109-2.342-16.688 25.066-16.688 25.066s-10.184-64.73 28.153-96.495c16.728-13.856 78.64-24.152 166.012-.14z"
        fill="#0CF2B4"
      />
    </Svg>
  );
}

export default SvgOctagonal;
