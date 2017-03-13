import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<FlatButton label="empty button"/>
					<p>ababa</p>
				</div>
			</MuiThemeProvider>
		);
	}
}
