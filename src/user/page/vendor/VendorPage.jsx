import React from 'react'
import {Text, View, Linking, TouchableOpacity, ActivityIndicator} from 'react-native'
import Header from "../../component/Header";
import {Image, Input, Button} from "react-native-elements";
import Footer from "../../component/Footer";
import axios from "axios";
import {link} from '../../sources/variables';
import { SliderBox } from "react-native-image-slider-box";
import ImageSlider from 'react-native-image-slider';
import { withRouter} from 'react-router-dom'
import Styling from '../../Style'
import Icon from 'react-native-vector-icons/FontAwesome';
import Uranium from 'uranium'
import MediaQuery from "react-responsive";

class VendorPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View>
                <Header/>
                <View>
                   <Text>Vendor Page</Text>
                </View>

                <Footer/>
            </View>
        )
    }
}

export default withRouter(VendorPage);