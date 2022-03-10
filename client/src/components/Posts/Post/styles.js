import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'rgba(86, 49, 105, 0.651)',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'rgba(86, 49, 105, 0.651)',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 9px',
    fontFamily: 'w3-cursive',
  },
  title: {
    padding: '0px 9px',
    fontFamily: 'w3-cursive',
    textDecoration: 'underline 1px',
  },
  body2: {
    padding: '0px',
    fontFamily: 'w3-cursive',
    color: 'rgba(86, 49, 105, 0.651)',
  },
  tags: {
    padding: '0px',
    fontFamily: 'w3-cursive',
  },
  username: {
    padding: '0px 12px',
    fontFamily: 'w3-cursive',
    backgroundColor: '#350135',
    color: 'rgba(255, 255, 255, 1)',
  },
  createdat: {
    padding: '0px 0px 0px 10px',
    fontFamily: 'w3-cursive',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});