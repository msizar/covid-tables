import React from 'react';
import MaterialTable from 'material-table';

import styles, { tableStyles } from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const Table = ({ columns, data, title, isLoading }) => {
  const classes = styles();

  const theme = createMuiTheme({
    overrides: {
      MuiTypography: {
        h6: { ...tableStyles.title },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title={title}
        className={classes.root}
        style={tableStyles.root}
        isLoading={isLoading}
        columns={columns}
        data={data ? data : []}
        options={{
          headerStyle: tableStyles.header,
          rowStyle: tableStyles.row,
          filterCellStyle: tableStyles.filterCell,
          cellStyle: tableStyles.cell,
          searchFieldStyle: tableStyles.search,
        }}
      />
    </ThemeProvider>
  );
};

export default Table;
