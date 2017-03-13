import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<FlatButton label="empty button"/>
				</div>
			</MuiThemeProvider>
		);
	}
}
