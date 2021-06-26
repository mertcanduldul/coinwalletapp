import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgEthereum(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 784.37 1277.39"
      className=""
      {...props}>
      <G fillRule="nonzero">
        <Path
          fill="#343434"
          d="M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"
        />
        <Path fill="#8C8C8C" d="M392.07 0L0 650.54l392.07 231.75V472.33z" />
        <Path
          fill="#3C3C3B"
          d="M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"
        />
        <Path fill="#8C8C8C" d="M392.07 1277.38V956.52L0 724.89z" />
        <Path fill="#141414" d="M392.07 882.29l392.06-231.75-392.06-178.21z" />
        <Path fill="#393939" d="M0 650.54l392.07 231.75V472.33z" />
      </G>
    </Svg>
  );
}

export default SvgEthereum;
