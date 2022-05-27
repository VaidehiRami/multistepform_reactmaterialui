import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from '@mui/material/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
    
  render() {
    const { values, handleChange } = this.props;
    console.log(handleChange);
    return (
      
      <MuiThemeProvider>
        <>
          <AppBar title="Enter Personal Details" />
          <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          margin="normal"       
        /><br/>
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
          margin="normal"       
        /><br/>
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio "
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          margin="normal"       
        /><br/>
        <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            ></RaisedButton>
        <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            ></RaisedButton>
        </>
      </MuiThemeProvider>
    )
  }
}
const styles={
  button:{
    margin:15
  }
}

export default FormPersonalDetails;