import React from 'react';
import { Text, View, TextInput, Button, Linking, TouchableHighlight, TouchableOpacity, Picker } from 'react-native';
import Header from '../component/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../component/Footer';
import Styling from '../Style'
import MediaQuery from "react-responsive";
// import { MediaQuery} from "react-native-responsive";

export default class ErrorPage extends React.Component {
	constructor(props) {
		super(props);
	}

	find_dimesions = (layout) => {
		const { x, y, width, height } = layout;
		this.setState({ footerHeight: height });
	};

	render() {
		return (
			<View>
				<Header />
				<MediaQuery minDeviceWidth={0} maxDeviceWidth={999}>
					<View style={[Styling.flexCenter, Styling.upBottomPadding20, Styling.lightGhostBorder, Styling.boxStyleMobile]}>
						<Text style={[Styling.upBottomPadding20, Styling.lightBoldText, Styling.smallPaddingLeftRight]}>
							Sorry, but we could not find your page :(
						</Text>
						<Icon name="smile-o" size={50} color="#594279" />
					</View>
				</MediaQuery>
				<MediaQuery minDeviceWidth={1000}>
					<View style={[Styling.flexCenter, Styling.upBottomPadding20, Styling.lightGhostBorder, Styling.boxStyle]}>
						<Text style={[Styling.upBottomPadding20, Styling.lightBoldText]}>
							Sorry, but we could not find your page :(
						</Text>
						<Icon name="smile-o" size={100} color="#594279" />
					</View>
				</MediaQuery>

				<Footer find_dimesions={this.find_dimesions} />
			</View>
		);
	}
}
