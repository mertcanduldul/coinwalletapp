import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShape(props) {
  return (
    <Svg
      width={500}
      height={500}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}>
      <Path
        d="M272.654 183.001c-102.002 27.543-227.24 19.331-296.601-3.256C-93.307 157.158-4.79 92.652-4.79 92.652s104.445 30.055 205.372 12.226C301.509 87.05 395.621 2.841 395.621 2.841s40.287 52.114 22.159 98.878c-7.915 20.396-57.068 59.745-145.126 81.282z"
        fill="#0CF2B4"
      />
    </Svg>
  );
}

export default SvgShape;
