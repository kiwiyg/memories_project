import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 50px',
  },
  heading: {
    color: 'rgba(85, 4, 122, 0.991)',
    fontFamily: 'w3-cursive',
    textDecoration: 'underline 5px',
    size: 'sm',
  },
  image: {
    marginLeft: '15px',
  },
  // image1: {
  //   marginRight: 'auto',
  // },
  [theme.breakpoints.down('xs')]:{
    mainContainer:{
      flexDirection:"column-reverse"
    }
  }
  
}));