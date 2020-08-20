import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import { withRouter } from 'react-router-dom';

class AllVenuePage extends React.Component {
	constructor(props) {
		super(props);
    }
    
	render() {
		return (
			<View>
                <Header/>
                <View>
                    <Text>All Venue Page</Text>
                </View>
                <Footer/>
			</View>
		);
	}
}


export default withRouter(AllVenuePage);
