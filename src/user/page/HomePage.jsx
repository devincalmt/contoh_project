import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<Header />
				<View>
					<Text>HomePage</Text>
				</View>
				<Footer find_dimesions={this.find_dimesions} />
			</ScrollView>
		);
	}
}

export default withRouter(HomePage);
