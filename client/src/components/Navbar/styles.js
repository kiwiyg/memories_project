import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0px 40px',
    alignItems: 'center',
  },

  
//   heading: {
//     color: 'rgba(124, 104, 133, 0.651)',
//     fontSize: '25px',
//   //  fontFamily: 'w3-cursive',
//   //  textDecoration: 'underline 5px',
// //  padding: '0px 130px 0px 15px',
//   },
  image: {
//    marginRight: '0px',
//    padding: '0em 0em 0em 0em',
//    margin: 'auto',
    height: '120px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '250px',
    padding: '10px 10px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    padding: '30px 30px',
  },
  userName: {
    display: 'flex',
    fontFamily: 'w3-cursive',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[300]),
    backgroundColor: deepPurple[300],
    margin: '3px',
  },

  [theme.breakpoints.down('sm')]: {
    appBar: {
      borderRadius: 15,
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '5px 5px',
      alignItems: 'center',
    },
    // heading: {
    //   color: 'rgba(124, 104, 133, 0.651)',
    //   fontSize: '25px',
    // //  fontFamily: 'w3-cursive',
    // //  textDecoration: 'underline 5px',
    //   padding: '0em 0em 0em 0em',
    // },
    image: {
  //    marginRight: '0px',
  //    padding: '0em 0em 0em 2em',
  //    margin: 'auto',
      alignItems: 'center',
      height: '90px',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '250px',
      padding: '10px 10px',
    },
},

  [theme.breakpoints.down('xs')]: {
        appBar: {
          borderRadius: 15,
          margin: '20px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5px 5px',
          alignItems: 'center',
        },
        // heading: {
        //   color: 'rgba(124, 104, 133, 0.651)',
        //   fontSize: '15px',
        // //  fontFamily: 'w3-cursive',
        // //  textDecoration: 'underline 5px',
        //   padding: '0em 0em 0em 0em',
        // },
        image: {
      //    marginRight: '0px',
      //    padding: '0em 0.5em 0em 1em',
      //    margin: 'auto',
          alignItems: 'center',
          height: '70px',
        },
        toolbar: {
          display: 'flex',
          justifyContent: 'flex-end',
          width: '250px',
          padding: '10px 10px',
        },
  }


}));