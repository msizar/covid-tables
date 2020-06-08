import colors from '../../assets/colors';
import sortDate from '../../helpers/sortDate';

export const mapData = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];

export const mapOptions = {
  region: 'world',
  defaultColor: 'grey',
  backgroundColor: '#FFF',
  datalessRegionColor: '#fff',
  colorAxis: { minValue: 0, colors: [colors.light, '#00FF00'] },
  tooltip: {
    textStyle: { color: colors.light },
    showColorCode: true,
  },
  enableRegionInteractivity: true,
};

export const columns = [
  {
    title: 'Country',
    field: 'Country',
    cellStyle: {
      backgroundColor: colors.background,
      color: colors.text,
      fontSize: '1rem',
    },
    headerStyle: {
      backgroundColor: colors.background,
    },
  },
  { title: 'New Confirmed', field: 'NewConfirmed' },
  { title: 'Total Confirmed', field: 'TotalConfirmed' },
  {
    title: 'New Recovered',
    field: 'NewRecovered',
  },
  {
    title: 'Total Recovered',
    field: 'TotalRecovered',
  },
  {
    title: 'New Deaths',
    field: 'NewDeaths',
  },
  {
    title: 'Total Deaths',
    field: 'TotalDeaths',
  },
  {
    title: 'Date',
    field: 'Date',
    defaultSort: 'asc',
    customSort: sortDate,
  },
];
