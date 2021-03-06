/*

pickety dataset with step interpolation
buttons to activate
deep linking with query params to persist

*/

import React from "react";
import Radium from "radium";
// import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";

class MultiLine extends React.Component {
  render() {
    console.log(mountains)
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div>
        <Heading> Multi Line </Heading>
        <svg height={chartHeight} width={chartWidth} style={{border: "1px solid rgb(230,230,230)"}}>

        </svg>
      </div>
    );
  }
}

export default MultiLine;
