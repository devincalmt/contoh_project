import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import axios from 'axios';
import { link } from '../sources/variables';
import { withRouter } from 'react-router-dom';
import { store } from '../redux/Store';
import { login } from '../redux/Action';
import Styling from '../Style';
import MediaQuery from "react-responsive";
// import { MediaQuery} from "react-native-responsive";

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			phone: '',
			error_label: [],
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
		var url = link + '/api/register';
		var th = this;

		var bodyFormData = new FormData();
		bodyFormData.append('email', this.state.email);
		bodyFormData.append('password', this.state.password);
		bodyFormData.append('name', this.state.name);
		bodyFormData.append('phone', this.state.phone);
		bodyFormData.append('role_status', 'member');

		axios({
			method: 'post',
			url: url,
			data: bodyFormData,
			headers: { 'content-type': 'multipart/form-data' },
		})
			.then(function(response) {
				store.dispatch(login(response.data));
				th.props.history.push('/');
			})
			.catch(function(error) {
				th.setState({ error_label: error.response.data.errors });
			});
	};

	render() {
		return (
			<View>
				<Header />
				<MediaQuery minDeviceWidth={0} maxDeviceWidth={999}>
					<View style={[Styling.boxStyleMobile, Styling.boxShadowBorder, Styling.paddingAll10]}>
						<View>
							<Text style={[ Styling.alignTextMiddle, Styling.bigTextSize, Styling.boldText, Styling.purpleTextColor]}>Register</Text>
						</View>
						<View>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'name')}
										inputStyle={[Styling.flexTen, Styling.phoneTextSize]}
										rightIcon={<Icon name="user" size={24} color="#594279" />}
										placeholder="Name"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.name}</Text>
								</View>
							</View>
						</View>
						<View>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'email')}
										keyboardType={'email-address'}
										inputStyle={[Styling.flexTen, Styling.phoneTextSize]}
										rightIcon={<Icon name="envelope" size={24} color="#594279" />}
										placeholder="Email"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.email}</Text>
								</View>
							</View>
						</View>
						<View>
							<View>
								<View>
									<Input
										secureTextEntry={true}
										inputStyle={[Styling.flexTen, Styling.phoneTextSize]}
										onChangeText={(e) => this.changeText(e, 'password')}
										rightIcon={<Icon name="lock" size={24} color="#594279" />}
										placeholder="Password"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.password}</Text>
								</View>
							</View>
						</View>
						<View style={Styling.marginBottom30}>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'phone')}
										keyboardType={'numeric'}
										inputStyle={[Styling.flexTen, Styling.phoneTextSize]}
										rightIcon={<Icon name="mobile-phone" size={24} color="#594279" />}
										placeholder="Phone number"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.phone}</Text>
								</View>
							</View>
						</View>
						<View>
							<Button
								style={Styling.flexRight}
								title="Register"
								onPress={() => this.onSubmitForm()}
								titleStyle={[Styling.phoneTextSize]}
								buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBackgroundColor]}
							/>
						</View>
					</View>
				</MediaQuery>
				<MediaQuery minDeviceWidth={1000} >
					<View style={[Styling.boxStyle, Styling.boxShadowBorder, Styling.paddingAll10]}>
						<View>
							<Text style={[ Styling.alignTextMiddle, Styling.bigTextSize, Styling.boldText, Styling.purpleTextColor]}>Register</Text>
						</View>
						<View>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'name')}
										rightIcon={<Icon name="user" size={24} color="#594279" />}
										placeholder="Name"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.name}</Text>
								</View>
							</View>
						</View>
						<View>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'email')}
										keyboardType={'email-address'}
										rightIcon={<Icon name="envelope" size={24} color="#594279" />}
										placeholder="Email"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.email}</Text>
								</View>
							</View>
						</View>
						<View>
							<View>
								<View>
									<Input
										secureTextEntry={true}
										onChangeText={(e) => this.changeText(e, 'password')}
										rightIcon={<Icon name="lock" size={24} color="#594279" />}
										placeholder="Password"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.password}</Text>
								</View>
							</View>
						</View>
						<View style={Styling.marginBottom30}>
							<View>
								<View>
									<Input
										onChangeText={(e) => this.changeText(e, 'phone')}
										keyboardType={'numeric'}
										rightIcon={<Icon name="mobile-phone" size={24} color="#594279" />}
										placeholder="Phone number"
									/>
								</View>
								<View>
									<Text>{this.state.error_label.phone}</Text>
								</View>
							</View>
						</View>
						<View>
							<Button
								style={Styling.flexRight}
								title="Register"
								onPress={() => this.onSubmitForm()}
								buttonStyle={[Styling.roundedPurpleButton, Styling.purpleBackgroundColor, Styling.flexThree]}
							/>
						</View>
					</View>
				</MediaQuery>

				<Footer find_dimesions={this.find_dimesions} />
			</View>
		);
	}
}

export default withRouter(RegisterPage);
