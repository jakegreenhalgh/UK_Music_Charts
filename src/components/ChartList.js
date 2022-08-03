import React from 'react';
import ChartEntry from './ChartEntry';

const ChartList = ({entries}) => {
    const ChartEntries = entries.map((entry, index) => {
        
        return <ChartEntry entry={entry} key={index} position={index+1}/>
    })

  return (
    <div>
    <ul>
      {ChartEntries}
    </ul>
  </div>
  )
}

export default ChartList;