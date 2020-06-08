import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/colors';

const styles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },

  selectRoot: {
    border: `solid 1px ${colors.light}`,
    color: 'red',
  },
}));

export const textFieldStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',

    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      border: '#fff',
    },
  },
  focused: {
    border: `solid 1px ${colors.light}`,
  },

  notchedOutline: {
    border: `solid 1px ${colors.light}`,
  },
}));

export default styles;
