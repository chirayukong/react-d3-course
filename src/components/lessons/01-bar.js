/*
  Managing scales
  Options for axis
*/

import React from "react";
// import _ from "lodash";
import * as d3 from "d3";
import mountains from "../../data/mountains";
import Heading from "../framework/heading";
import {VictoryAxis} from "victory";

class Bar extends React.Component {
  render() {
    console.log(mountains)
    const leftPadding = 30;
    const bottomPadding = 30;
    const chartHeight = 500;
    const chartWidth = 1000;
    const y = d3.scaleLinear().domain([0, 50000]).range([0, chartHeight])
    return (
      <div>
        <Heading> Bar Chart </Heading>
          <svg
            height={chartHeight}
            width={chartWidth}
            style={{border: "1px solid rgb(230,230,230)"}}>
            <circle r={50}/>
            <circle cx={200} cy={200} r={20}/>
            {
              mountains.map((mountain, i) => {
                return (
                  <rect
                    fill={"rgba(0,0,0,1)"}
                    x={i*6 + leftPadding}
                    y={
                      chartHeight -
                      bottomPadding -
                      y(mountain["Height (ft)"])
                    }
                    width={4}
                    height={y(mountain["Height (ft)"])}/>
                )
              })
            }
          </svg>
      </div>
    );
  }
}

export default Bar;

//
// <p>
//   {`
//   ${mountain.Mountain} is in the range
//   ${mountain.Range} and it's
//   ${mountain["Height (m)"]} high.
//   `}
// </p>
//
