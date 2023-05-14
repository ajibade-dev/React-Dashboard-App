import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, BarSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Bar" title="Bar Chart" />

    <ChartComponent
    id='bar-chart'
    height='420px'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    title='Employment Rate'
    >
        <Inject services={[BarSeries, Legend, Tooltip, Category, DataLabel]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index, xName, yName) => <SeriesDirective key={index} {...item} xName='x' yName='y' type="Bar" />)}
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Bar