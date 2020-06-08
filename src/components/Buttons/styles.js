import { makeStyles } from '@material-ui/core/styles';
import colors from '../../assets/colors';

const styles = makeStyles((theme) => ({
  button: {
    background: colors.light,
    color: colors.while,
    margin: '10px',
    padding: '15px',

    '&:hover': {
      background: colors.lightHover,
    },
  },

  secondaryButton: {
    background: colors.while,
    border: `solid 1.8px ${colors.light}`,
    color: colors.light,
    margin: '10px',
    padding: '12px',
    minWidth: '64px',

    '&:hover': {
      borderColor: colors.secondary,
    },
  },

  linkButton: {
    display: 'block',
    width: '100%',
    fontSize: '.9rem',
    background: colors.light,
    color: colors.while,
    textDecoration: 'none',
    border: `solid 1.8px ${colors.light}`,
    margin: '10px',
    boxShadow:
      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
    borderRadius: '5px',
    padding: '15px',
    minWidth: '64px',
    boxSizing: 'border-box',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    textTransform: 'uppercase',

    '&:hover': {
      background: colors.lightHover,
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  },

  textButton: {
    color: colors.white,
    margin: '10px',

    '&:hover': {
      color: colors.secondary,
      background: 'unset',
    },
  },
}));

export default styles;
