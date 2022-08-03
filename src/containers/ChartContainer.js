import React, { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';

const ChartContainer = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
      getEntries();
    }, [])

    const getEntries = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(feed => setEntries(feed["feed"]["entry"]))
    }


    return (
        <div className="main-container">
            <ChartList entries={entries} />
        </div>
    )
}

export default ChartContainer;