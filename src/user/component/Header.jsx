import React, { useState } from 'react';
import { Text, View, StyleSheet, Linking, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import Styling from '../Style';
import { withRouter } from 'react-router-dom';
import { store } from '../redux/Store';
import { logout } from '../redux/Action';
import MediaQuery from "react-responsive";
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ddlSelectedValue: 'choose'
		}
	}

	onLogout = () => {
		store.dispatch(logout());
		this.props.history.push('/');
	};

	Greeting = (isLoggedIn) =>{
		if (isLoggedIn != null) {
			return (
				<View style={Styling.flexOne}>
					<Button
						title="Logout"
						type="outline"
						buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBorderColor]}
						titleStyle={[Styling.phoneTextSize, Styling.purpleTextColor]}
						onPress={() => this.onLogout()}
					/>
				</View>
			);
		} else {
			return (
				<View style={[Styling.rowContainer, Styling.flexTwo]}>
					<Button
						title="Masuk"
						type="outline"
						buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBorderColor]}
						titleStyle={[Styling.phoneTextSize, Styling.purpleTextColor]}
						onPress={() => this.props.history.push('/login')}
					/>
					<Button
						title="Daftar"
						buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBackgroundColor]}
						titleStyle={Styling.phoneTextSize}
						onPress={() => this.props.history.push('/register')}
					/>
				</View>
			);
		}
	}
	greetingMobile = (isLoggedIn) => {
		if (isLoggedIn != null) {
			return (
				<Picker
					selectedValue={this.state.ddlSelectedValue}
					style={[Styling.headerPickerStyle, Styling.pickerContent]}
					onValueChange={(itemValue, itemIndex) =>
						this.setSelectedStateValue(itemValue, 'ddlSelectedValue'
						)}

				>
					<Picker.Item label='Logout' value='logout'/>
				</Picker>
			);
		} else {
			return (
				<Picker
					selectedValue={this.state.ddlSelectedValue}
					style={[Styling.headerPickerStyle, Styling.pickerContent]}
					onValueChange={(itemValue, itemIndex) =>
						this.setSelectedStateValue(itemValue, 'ddlSelectedValue'
						)}

				>
					<Picker.Item label='Login' value='login'/>
					<Picker.Item label='Register' value='register'/>
				</Picker>
		);
		}
	};


	componentDidMount() {}

	setSelectedStateValue = (ddlValue) =>{
		this.setState({ddlSelectedValue:ddlValue});

		if(ddlValue === 'login'){
			this.props.history.push('/login')
		}else if(ddlValue === 'register'){
			this.props.history.push('/register')
		}
	}


	render() {
		var loggedIn = store.getState().userData;
		var greeting = this.Greeting(loggedIn);
		var greetingMobile = this.greetingMobile(loggedIn);

		return (
			<View>
				<MediaQuery minDeviceWidth={0} maxDeviceWidth={999}>
					<View style={[Styling.headerPicker, Styling.purpleBackgroundColor, Styling.rowContainer]}>

						<View style={[Styling.pickerWrapper, Styling.flexOne]}>

							{greetingMobile}

							<Icon
								name="plus-circle"
								size={30}
								style={[Styling.pickerIcon]}
							/>

						</View>

						<Text style={[
							Styling.whiteTitleStyle, Styling.flexEight
						]}>Littlecloudeo</Text>
						<Icon
							name="question-circle" size={30} color="white"
							style={[ Styling.flexOne]}
						/>
					</View>
				</MediaQuery>

				<MediaQuery minDeviceWidth={1000}>
					<View style={[Styling.rowContainer, Styling.upHeaderPadding]}>
						<View style={Styling.flexFive}>
							<Text
								onPress={() => this.props.history.push('/')}
								style={[Styling.bigTextSize, Styling.purpleTextColor, Styling.boldText]}
							>
								LITTLECLOUDEO
							</Text>
						</View>
					</View>

					<View style={[Styling.slightGreyBackground, Styling.bottomHeaderPadding, Styling.rowContainer]}>
						<View style={[Styling.rowContainer, Styling.flexEight]}>
							<Text
								style={[Styling.smallPaddingLeftRight, Styling.lightBoldText]}
								onPress={() => this.props.history.push('/cari-venue')}
							>
								Cari tempat acara
							</Text>
							<Text
								style={[Styling.smallPaddingLeftRight, Styling.lightBoldText]}
								onPress={() => this.props.history.push('/cari-event_organizer')}
							>
								Jasa event organizer
							</Text>
							<Text
								style={[Styling.smallPaddingLeftRight, Styling.lightBoldText]}
								onPress={() => this.props.history.push('/cari-vendor')}
							>
								Jasa vendor
							</Text>
						</View>
						{greeting}
					</View>
				</MediaQuery>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerAdmin: {
		backgroundColor: '#29438c',
		padding: 20,
		borderBottomColor: '#161057',
		borderBottomWidth: 2,
		top: 0,
		zIndex: 100,
	},
});

export default withRouter(Header);