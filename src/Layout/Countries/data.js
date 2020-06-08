import colors from '../../assets/colors';
import sortDate from '../../helpers/sortDate';

export const mapData = [
  ['Provinces', 'Population'],
  ['Gauteng', 477],
  ['Western Cape', 1324110],
  ['North West', 132234110],
  ['KwaZulu-Natal', 273116477],
  ['Eastern Cape', 2736477],
  ['Free State', 134110],
  ['Northern Cape', 2277],
  ['Limpopo', 21423],
  ['Mpumalanga', 1224110],
];

export const mapOptions = {
  region: 'ZA',
  defaultColor: 'grey',
  backgroundColor: '#FFF',
  datalessRegionColor: '#fff',
  resolution: 'provinces',
  colorAxis: { minValue: 0, colors: [colors.light, '#00FF00'] },
  tooltip: { textStyle: { color: '#FF0000' }, showColorCode: true },
  enableRegionInteractivity: true,
};

export const columns = [
  {
    title: 'Active',
    field: 'Active',
    cellStyle: {
      backgroundColor: colors.background,
      color: colors.text,
      fontSize: '1rem',
    },
    headerStyle: {
      backgroundColor: colors.background,
    },
  },
  { title: 'Confirmed', field: 'Confirmed' },
  {
    title: 'Recovered',
    field: 'Recovered',
  },
  {
    title: 'Deaths',
    field: 'Deaths',
  },
  {
    title: 'Date',
    field: 'Date',
    defaultSort: 'asc',
    customSort: sortDate,
  },
];
