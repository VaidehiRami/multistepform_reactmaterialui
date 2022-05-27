import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from '@mui/material/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from "@mui/material";


export class Confirmdtl extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {values: { firstName, lastName, email, occupation, city, bio }} = this.props;
    console.log(firstName);

    return (
      <MuiThemeProvider>
        <>
        <AppBar title="Confirm User Data" />
        {/* <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h2>{email}</h2>
        <h2>{occupation}</h2>
        <h2>{city}</h2>
        <h2>{bio}</h2> */}
        <List >
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="First Name" secondary={firstName} />
              
            </ListItem>
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="Email" secondary={email} />
            </ListItem >
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem style={{textAlign:'center'}}>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
            <br />
            <RaisedButton
              label="Confirm & Continue"
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
export default Confirmdtl;