import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  worldRoot: {
    margin: '50px 10%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  worldActions: {
    width: '250px',
    display: 'flex',
  },

  worldBtnGbl: {
    marginRight: '10px',
  },
}));

export default styles;
