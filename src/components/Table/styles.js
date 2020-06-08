import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/colors';

const styles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
}));

export const tableStyles = {
  root: {
    padding: '50px',
    marginBottom: '50px',
    border: 'solid 1px #c3c9d4',
    width: '90%',
  },

  title: {
    fontWeight: 'bolder',
    fontSize: '1.4rem',
    marginBottom: '50px',
    color: colors.light,
  },

  search: {
    color: colors.light,
    marginBottom: '55px',
    padding: '5px',

    '&:before': {
      content: 'none',
    },
  },

  header: {
    fontWeight: '900',
    fontSize: '1rem',
    marginTop: '20px',
    color: colors.light,
  },

  row: {
    borderRadius: '5px',
  },

  cell: {
    fontSize: '1rem',
    color: colors.light,
  },

  filterCell: {
    color: 'red',
  },
};

export default styles;
