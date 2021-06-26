import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgBinanceCoin(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2500.01 2500"
      className=""
      {...props}>
      <Defs></Defs>
      <G id="BinanceCoin_svg__Layer_2" data-name="Layer 2">
        <G id="BinanceCoin_svg__Layer_1-2" data-name="Layer 1">
          <Path
            className="BinanceCoin_svg__cls-1"
            d="M764.48 1050.52L1250 565l485.75 485.73 282.5-282.5L1250 0 482 768l282.49 282.5M0 1250l282.51-282.55L565 1249.94l-282.51 282.51zm764.48 199.51L1250 1935l485.74-485.72 282.65 282.35-.14.15L1250 2500l-768-768-.4-.4 282.91-282.12M1935 1250.12l282.51-282.51L2500 1250.1l-282.5 282.51z"
          />
          <Path
            className="BinanceCoin_svg__cls-1"
            d="M1536.52 1249.85h.12L1250 963.19 1038.13 1175l-24.34 24.35-50.2 50.21-.4.39.4.41L1250 1536.81l286.66-286.66.14-.16-.26-.14"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgBinanceCoin;
