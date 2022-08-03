import React from 'react';

const ChartEntry = ({entry, position}) => {

  return <li><p>{position} - Title: {entry["im:name"]["label"]}</p> <p>Artist: {entry["im:artist"]["label"]}</p></li>
}

export default ChartEntry;