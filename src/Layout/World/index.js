import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dataActions from '../../store/actions/data-actions';
import Table from '../../components/Table';
import Button from '../../components/Buttons';
import styles from './styles';
import sanizeDate from '../../helpers/sanitizeDate';
import ActionBar from '../ActionBar';
import DataMaps from '../../components/DataMaps';
import { mapData, columns, mapOptions } from './data';

const mapState = (state) => ({
  data: state.data.Countries,
  loading: state.loading,
});

const World = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(mapState);
  const defaultCountry = 'Global Data';
  const [country, setCountry] = useState(defaultCountry);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (country && country !== '') {
      dispatch(dataActions.getSummaryData());
    } else {
      setCountry(defaultCountry);
    }

    return () => {
      dispatch(dataActions.clearData());
    };
  }, [country]);

  const toogleView = () => {
    setShowMap(!showMap);
  };

  const dataArray = Object.values({ ...data });

  const formatedData = dataArray.map((item) => {
    const tempItem = { ...item };
    tempItem.Date = sanizeDate(tempItem.Date);
    return tempItem;
  });

  return (
    <div className={classes.worldRoot}>
      <ActionBar>
        <div className={classes.worldActions}>
          <Button variant="link" link="/countries">
            View Country Summary
          </Button>
        </div>

        <div className={classes.worldActions}>
          <Button variant="outlined" handleOnClick={toogleView}>
            {showMap ? 'View Table' : 'View Maps'}
          </Button>
        </div>
      </ActionBar>

      {showMap ? (
        <DataMaps data={mapData} options={mapOptions} />
      ) : (
        <Table
          title={`${country}`}
          columns={columns}
          data={formatedData}
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default World;
