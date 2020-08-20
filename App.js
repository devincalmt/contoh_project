import React, {Component} from 'react';
import {Router, Switch, Route} from './routing'
import LoginPage from './src/user/page/LoginPage'
import HomePage from "./src/user/page/HomePage";
import ErrorPage from "./src/user/page/ErrorPage";
import VendorPage from './src/user/page/vendor/VendorPage';
import AllVenuePage from './src/user/page/venue/AllVenuePage';
import { PersistGate } from 'redux-persist/es/integration/react'
import {store,persistor} from './src/user/redux/Store'
import {Provider} from 'react-redux'
import RegisterPage from './src/user/page/RegisterPage';
import EOPage from './src/user/page/event_organizer/EOPage';

const mapStateToProps = (state, ownProps)  => {

  return state;
}
  
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData (typeVar, snapshot)),  
    updateHandle: () => dispatch(updateHandle(handle)),
  }
}

class App extends React.Component {
  render(){
    return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/cari-event_organizer" component={EOPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
						<Route exact path="/cari-vendor" component={VendorPage} />
						<Route exact path="/cari-venue" component={AllVenuePage} />
						<Route path="/" component={ErrorPage} />
					</Switch>
				</Router>
			</PersistGate>
		</Provider>
	);
  }
}

export default App;