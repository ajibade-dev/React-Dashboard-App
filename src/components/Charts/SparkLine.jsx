import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

// const SparkLine = ({currentColor, id, height, data, width, type, color }) => {
//   return (
//     <>
//       <SparklineComponent
//     id={id}
//     height={height}
//     width={width}
//     lineWidth={1}
//     valueType="Numeric"
//     fill={color}
//     border={{ color: currentColor, width: 2 }}
//     tooltipSettings={{
//       visible: true,
//       format: '${x} : data ${yval}',
//       trackLineSettings: { visible: true },
//     }}
//     markerSettings={{visible: ['All'], size: 2.5, fill: currentColor }}
//     dataSource={data}
//     xName="x"
//     yName="yval"
//     type={type}
//     >
//      <Inject services={[SparklineTooltip]} />
//     </SparklineComponent>
//     </>
//   )
// }

// export default SparkLine

// An issue with using functional componenets happened on this page whereby, when resizing the window of this page, the code tries to re-render to call the line chart data, thereby giving an error of "return "null"" ", so a quick search on google gave a solution to use Class Components instead of functional componenets.

export default class SparkLine extends React.PureComponent{

  render()
  {
    const { currentColor, id, height, data, width, type, color } = this.props;

    return <SparklineComponent
    id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{ color: currentColor, width: 2 }}
    tooltipSettings={{
      visible: true,
      format: '${x} : data ${yval}',
      trackLineSettings: { visible: true },
    }}
    markerSettings={{visible: ['All'], size: 2.5, fill: currentColor }}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
    >
     <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  }
}