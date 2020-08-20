import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { withRouter } from 'react-router-dom';
import { View, Text } from 'react-native';

class EOPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Header />
				<View>
					<Text>EO Page</Text>
				</View>
				<Footer />
			</View>
		);
	}
}

export default withRouter(EOPage);
