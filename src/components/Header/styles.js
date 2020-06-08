import { makeStyles } from '@material-ui/core/styles';

import colors from '../../assets/colors';

const styles = makeStyles((theme) => ({
  headeRoot: {
    top: 0,
    width: '100%',
    zIndex: '10',
    backgroundColor: '#fff',
    overflow: 'hidden',
    fontSize: 15,
    fontFamily: 'inherit',
  },

  AppLink: {
    padding: '20px ',
    color: colors.backgroundColor,
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
      color: colors.backgroundColor,
    },

    [theme.breakpoints.down('sm')]: {
      padding: '10px ',
    },
  },

  activeAppLink: {
    textDecoration: 'underline',
  },

  headerLogoContainer: {
    fontWeight: '800',
    background: colors.linearBackground,
    textAlign: 'initial',
    padding: '20px 0px',

    [theme.breakpoints.down('sm')]: {
      width: '25%',
    },
  },

  headerLogo: {
    fontWeight: '800',
    fontSize: '1.7rem',
    color: colors.light,
    marginLeft: '20px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  },

  headerNavBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'normal',
    },
  },

  headerAppNav: {
    padding: '0',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 5,
    },
  },

  appLink: {
    '&:hover:not(.active)': {
      border: `solid 1px green`,
    },
  },
}));

export default styles;
