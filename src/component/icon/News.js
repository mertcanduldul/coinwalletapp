import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgNews(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}>
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Path d="M3 9h18M9 21V9" />
    </Svg>
  );
}

export default SvgNews;
