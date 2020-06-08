import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  countriesRoot: {
    margin: '50px 10%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  countriesActions: {
    width: '250px',
    display: 'flex',
  },

  countriesSelect: {
    width: '600px',
    margin: '10px auto 40px auto',
  },

  countriesBtnGbl: {
    marginRight: '10px',
  },
}));

export default styles;
