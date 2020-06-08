import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dataActions from '../../store/actions/data-actions';
import Table from '../../components/Table';
import Button from '../../components/Buttons';
import styles from './styles';
import CountrySelect from '../../components/CountrySelector';
import { sanitizeCountryVal } from '../../helpers/stringSanitizer';
import sanizeDate from '../../helpers/sanitizeDate';
import DataMaps from '../../components/DataMaps';
import ActionBar from '../ActionBar';
import { columns, mapData, mapOptions } from './data';

const mapState = (state) => ({
  data: state.data,
  loading: state.loading,
});

const Countries = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(mapState);
  const defaultCountry = 'South Africa';
  const [country, setCountry] = useState(defaultCountry);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (country && country !== '') {
      dispatch(dataActions.getAllData(sanitizeCountryVal(country)));
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

  const onChangeCountry = (e, value) => {
    setCountry(value);
  };

  const dataArray = Object.values({ ...data });

  const formatedData = dataArray.map((item) => {
    const tempItem = { ...item };
    tempItem.Date = sanizeDate(tempItem.Date);
    return tempItem;
  });

  return (
    <div className={classes.countriesRoot}>
      <ActionBar>
        <div className={classes.countriesActions}>
          <Button variant="link" link="/">
            View Global Summary
          </Button>
        </div>

        <div className={classes.countriesActions}>
          <Button variant="outlined" handleOnClick={toogleView}>
            {showMap ? 'View Table' : 'View Maps'}
          </Button>
        </div>
      </ActionBar>

      <div className={classes.countriesSelect}>
        <CountrySelect onChangeCountry={onChangeCountry} />
      </div>

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

export default Countries;
