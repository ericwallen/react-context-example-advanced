
import React, {Component} from 'react';

import {connectStore} from '../App'

class Header extends Component {
	render(){
		return(
			<>
				<h1>I am Header {this.props.state.message}</h1>
				<input type="text" name="message" onChange={this.props.context.handleInputChange}/>
			</>
		)
	}
};

export default connectStore(Header);