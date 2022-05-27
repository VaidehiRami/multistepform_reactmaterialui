import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@mui/material/Button';

// import Dialog from 'material-ui/Dialog/Dialog';



export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <MuiThemeProvider>
        
        <AppBar title="Enter User Details" />
        <TextField
          
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal"     
          label="Enter First Name"
           variant="standard"  
        /><br/>
        <TextField
         
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          margin="normal" 
          label="Enter Last Name"
           variant="standard"       
        />
        <br/>
        <TextField
           label="Enter Your Email"
           variant="standard"
        
          onChange={handleChange('email')}
          defaultValue={values.email}
          margin="normal"       
        /> 
        <br />
        <Button variant="contained" onClick={this.continue}>Contained</Button>
 
            {/* <Button
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            ></Button> */}
           
        </MuiThemeProvider>
      </>
    )
  }
}

  const styles={
    button:{
      margin:15
    }
  }
export default FormUserDetails