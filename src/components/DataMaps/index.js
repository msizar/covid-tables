import React from 'react';
import { Chart } from 'react-google-charts';

import styles from './styles';

const DataMaps = ({ data, options }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={data}
        options={options ? options : null}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyBqHauQZBtXQ1q4w1HQdHJQZH216QdVHUs"
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default DataMaps;
