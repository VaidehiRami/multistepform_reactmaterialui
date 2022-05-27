import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from '@mui/material/AppBar';

export class Successdtl extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <>
        <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
        </>
      </MuiThemeProvider>
    )
  }
}

export default Successdtl;