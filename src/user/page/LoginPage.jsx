import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Button, Input } from 'react-native-elements';
import axios from 'axios';
import { link } from '../sources/variables';
import { withRouter } from 'react-router-dom';
import { store } from '../redux/Store';
import { login } from '../redux/Action';
import Styling from '../Style';
// import { MediaQuery} from "react-native-responsive";
import MediaQuery from "react-responsive";
import AuthService from '../services/AuthService';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error_label: '',
		};
	}

	find_dimesions = (layout) => {
		const { x, y, width, height } = layout;
		this.setState({ footerHeight: height });
	};

	changeText = (e, type) => {
		this.setState({ [type]: e });
	};

	onSubmitForm = () => {
		var url = link + '/api/login';
		var th = this;

		var bodyFormData = new FormData();
		bodyFormData.append('email', this.state.email);
		bodyFormData.append('password', this.state.password);

		axios({
			method: 'post',
			url: url,
			data: bodyFormData,
			headers: { 'content-type': 'multipart/form-data' },
		})
			.then(function(response) {
				store.dispatch(login(response.data.user));
				th.props.history.push('/');
			})
			.catch(function(error) {
				th.setState({ error_label: error.response.data.error });
			});
	};

	render() {
		var loggedIn = store.getState().userData;
		return (
			<View>
				<Header />

				<MediaQuery minDeviceWidth={0} maxDeviceWidth={999}>

					<View style={[Styling.boxStyleMobile, Styling.boxShadowBorder, Styling.paddingAll10]}>
						<View>
							<Text style={[ Styling.alignTextMiddle, Styling.bigTextSize, Styling.boldText, Styling.purpleTextColor]}>Login</Text>
						</View>
						<View>
							<Input
								onChangeText={(e) => this.changeText(e, 'email')}
								placeholder="Email"
								inputStyle={[Styling.flexTen, Styling.phoneTextSize]}
								rightIcon={<Icon name="envelope" size={24} color="#594279" />}
							/>
						</View>

						<View style={Styling.marginBottom20}>
							<Input
								onChangeText={(e) => this.changeText(e, 'password')}
								secureTextEntry={true}
								placeholder="Password"
								inputStyle={[Styling.phoneTextSize, Styling.flexTen]}
								rightIcon={<Icon name="lock" size={24} color="#594279" />}
							/>
						</View>

						<Button
							style={[Styling.flexRight]}
							title="sign in"
							titleStyle={[Styling.phoneTextSize]}
							buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBackgroundColor]}
							onPress={() => this.onSubmitForm()}
						/>
						<Text>{this.state.error_label}</Text>
					</View>
				</MediaQuery>

				<MediaQuery minDeviceWidth={1000} >
					<View style={[Styling.boxStyle, Styling.boxShadowBorder, Styling.paddingAll10]}>
						<View>
							<Text style={[ Styling.alignTextMiddle, Styling.bigTextSize, Styling.boldText, Styling.purpleTextColor]}>Login</Text>
						</View>
						<View >
							<Input
								onChangeText={(e) => this.changeText(e, 'email')}
								placeholder="Email"
								rightIcon={<Icon name="envelope" size={24} color="#594279" />}
							/>
						</View>

						<View style={[Styling.marginBottom20]}>
							<Input
								onChangeText={(e) => this.changeText(e, 'password')}
								secureTextEntry={true}
								placeholder="Password"
								rightIcon={<Icon name="lock" size={24} color="#594279" />}
							/>
						</View>

						<Button
							style={[Styling.flexCenter]}
							title="sign in"
							buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBackgroundColor, Styling.flexThree]}
							onPress={() => this.onSubmitForm()}
						/>
						<Text>{this.state.error_label}</Text>
					</View>
				</MediaQuery>

				<Footer find_dimesions={this.find_dimesions} />
			</View>
		);
	}
}

export default withRouter(LoginPage);
