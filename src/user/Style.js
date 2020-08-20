'use strict';

var React = require('react-native');
var Responsive = require('react-native-responsive-screen');

var { StyleSheet, Dimensions } = React;
var { widthPercentageToDP , heightPercentageToDP} = Responsive

const win = Dimensions.get('window');
const ratio = win.width / widthPercentageToDP('30%');
const ratioMobile = win.width / widthPercentageToDP('15%');

const base = StyleSheet.create({
	//header
	upHeaderPadding: {
		paddingTop: heightPercentageToDP('5%'),
		paddingBottom: heightPercentageToDP('5%'),
		paddingLeft: widthPercentageToDP('5%'),
		paddingRight: widthPercentageToDP('5%'),
	},
	bottomHeaderPadding: {
		paddingTop: heightPercentageToDP('3%'),
		paddingLeft: widthPercentageToDP('3%'),
		paddingRight: widthPercentageToDP('3%'),
		paddingBottom: heightPercentageToDP('3%'),
	},

	boxStyle: {
		width: widthPercentageToDP('40%'),
		margin: 'auto',
		marginBottom: 50,
		marginTop: 50,
		paddingBottom: 20,
	},
	boxStyleMobile:{
		width: widthPercentageToDP('80%'),
		margin: 'auto',
		marginBottom: 50,
		marginTop: 50,
		paddingBottom: 20,
	},
	slightGreyBackground: {
		backgroundColor: '#f5f5f5',
	},
	whiteBackground:{
		backgroundColor: '#ffffff',
	},
	bigTextSize: {
		fontSize: 20,
	},
	superBigTextSize: {
		fontSize: 50,
	},
	smallPaddingLeftRight: {
		paddingLeft: 15,
		paddingRight: 15,
	},
	bigPaddingLeftRight: {
		paddingLeft: 30,
		paddingRight: 30,
	},
	superBigPaddingLeftRight:{
		paddingLeft: widthPercentageToDP('15%'),
		paddingRight: widthPercentageToDP('15%'),
	},
	footerPadding: {
		paddingTop: 40,
		paddingBottom: 40,
		paddingLeft: 90,
		paddingRight: 90,
	},
	alignTextMiddle: {
		textAlign: 'center',
	},
	roundedPurpleButton: {
		borderRadius: 50,
		paddingLeft: 20,
		paddingRight: 20,
		marginLeft: 10,
		marginRight: 10,
		paddingTop: 2,
		paddingBottom: 2,
	},
	superRoundedBorder:{
		borderRadius: 50,
	},
	smallTextSize: {
		fontSize: 13,
	},
	reallySmallTextSize:{
		fontSize: 11,
	},
	ulStyling:{flex: 1, paddingLeft: 5},
	phoneTextSize:{
		fontSize: 13,
	},
	bigTextSizePhone:{
		fontSize: 15,
	},
	superBigTextSizePhone:{
		fontSize: 30,
	},
	smallTextSizePhone:{
		fontSize: 11,
	},
	reallySmallTextSizePhone:{
		fontSize: 8,
	},
	purpleTextColor: {
		color: '#594279',
	},
	purpleBorderColor: {
		borderColor: '#594279',
	},
	transparentBorderColor:{
		borderColor: '#ffffff00',
	},
	purpleBackgroundColor: {
		backgroundColor: '#594279',
	},
	lightBoldText: {
		fontWeight: '500',
	},
	boldText: {
		fontWeight: 'bold',
	},
	lightText:{
		fontWeight: '200',
	},
	greyText:{
		color: '#4e4e4f'
	},
	whiteText: {
		color: 'white',
	},
	marginBottom20: {
		marginBottom: 20,
	},
	marginBottom5: {
		marginBottom: 5,
	},
	alignCenterImage: {
		alignSelf: 'center',
	},
	alignCenterView: {
		justifyContent: 'center',
	},
	marginBottom30: {
		marginBottom: 30,
	},
	marginBottom50: {
		marginBottom: 50,
	},
	stickyFooter: {
		zIndex: 99999999,
		position: 'fixed',
		left: 0,
		right: 0,
		bottom: 0,
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	colContainer: {
		flex: 1,
		flexWrap: 'wrap',
	},
	flexSpaceAround: {
		justifyContent: 'space-around',
	},
	flexSpaceBetween:{
		justifyContent: 'space-between'
	},
	flexOne: {
		flexBasis: '10%',
		maxWidth: '10%',
	},
	flexFifteen:{
		flexBasis: '15%',
		maxWidth: '15%',
	},
	flexTwo: {
		flexBasis: '20%',
		maxWidth: '20%',
	},
	flexThree: {
		flexBasis: '30%',
		maxWidth: '30%',
	},
	flexFour: {
		flexBasis: '40%',
		maxWidth: '40%',
	},
	flexFourtyFive:{
		flexBasis: '45%',
		maxWidth: '45%',
	},
	flexFive: {
		flexBasis: '50%',
		maxWidth: '50%',
	},
	flexSix: {
		flexBasis: '60%',
		maxWidth: '60%',
	},
	flexSeven: {
		flexBasis: '70%',
		maxWidth: '70%',
	},
	flexEight: {
		flexBasis: '80%',
		maxWidth: '80%',
	},
	flexNine: {
		flexBasis: '90%',
		maxWidth: '90%',
	},
	flexTen: {
		flexBasis: '100%',
		maxWidth: '100%',
	},
	flexPerFour: {
		flexBasis: '25%',
	},
	flexPerThree: {
		flexBasis: '33.3%',
	},
	flexCenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	alignCenter:{
		alignItems: 'center',
	},
	flexRight:{
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	container: {
		width: '80%',
		margin: 'auto',
		paddingTop: 30,
		paddingBottom: 30,
	},
	containerMobile:{
		width: widthPercentageToDP('90%'),
		margin: 'auto',
		paddingTop: 10,
		paddingBottom: 10,
	},
	ghostBorder: {
		borderColor: 'grey',
		borderWidth: 2,
		borderRadius: 5,
	},
	lightGhostBorder:{
		borderColor: '#c4c4c4',
		borderWidth: 1,
		borderRadius: 5,
	},
	upBottomPadding20: {
		paddingTop: 20,
		paddingBottom: 20,
	},
	upBottomMargin50:{
		marginTop: 50,
		marginBottom: 50
	},
	upBottomMargin20:{
		marginTop: 20,
		marginBottom: 20
	},
	purplePrimaryButton: {
		backgroundColor: '#594279',
		color: 'white',
		paddingLeft: 20,
		paddingRight: 20,
	},
	lightPurplePrimaryButton:{
		backgroundColor: '#deabf5',
	},
	greenPrimaryButton: {
		backgroundColor: '#2bbd3c',
		color: 'white',
		paddingLeft: 20,
		paddingRight: 20,
	},
	greenText:{
		color: '#2bbd3c',
	},
	whitePrimaryButton: {
		backgroundColor: 'white',
		paddingLeft: 20,
		paddingRight: 20,
	},
	image200x100: {
		width: 200,
		height: 100,
	},
	imageComponent:{
		width: '85%',
		height: heightPercentageToDP('50%'),
		overflow: 'hidden',
		borderRadius: 10
	},
	imageComponentMobile:{
		width: '100%',
		height: heightPercentageToDP('50%'),
		overflow: 'hidden',
		// borderRadius: 10
	},
	landscapeImageComponentMobile:{
		width: '100%',
		height: heightPercentageToDP('25%'),
		overflow: 'hidden',
		// borderRadius: 10
	},
	smallImageComponent:{
		width: 100,
		height: 100,
		overflow: 'hidden',
		borderRadius: 10,
	},
	smallImageComponentMobile:
		{ width: 80, height: 80, overflow: 'hidden', borderRadius: 10 }
		,
	singleVenueSmallImage:{
		width: 65, height: 65, overflow: 'hidden', borderRadius: 10
	},
	roundedBorder: {
		borderRadius: 10,
	},
	boxShadowBorder:{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	marginLeftRight20:{
		marginLeft: 20,
		marginRight: 20
	},
	marginLeftRight50:{
		marginLeft: 50,
		marginRight: 50
	},
	hideOverflow: {
		overflow: 'hidden',
	},
	stylingImage: {
		width: win.width,
		height: 150 * ratio,
	},
	stylingImageMobile:{
		width: win.width,
		height: 30 * ratioMobile,
	},
	marginAll20:{
		margin: 20,
	},
	marginAll5:{
		margin: 5,
	},
	paddingAll10:{
		padding: 10,
	},
	paddingAll30:{
		padding: 30,
	},
	blackBackground:{
		backgroundColor: 'black',
	},
	lightOpacity:{
		opacity: 0.2,
	},
	blackText:{
		color: 'black'
	},
	searchBarStyle:{
		borderWidth: 1,
		borderColor: 'grey'
	},
	marginAuto:{
		margin: 'auto',
	},
	borderBottomNone:{
		borderBottomWidth: 0,
	},
	paddingNone:{
		padding: 0,
	},
	marginNone:{
		margin: 0,
	},
	lightBorderBottom:{
		borderBottomWidth: 1,
		borderColor: '#f5f5f5',
	},
	darkBorderBottom:{
		borderBottomWidth: 1,
		borderColor: '#acaeb0',
	},
	whiteBorderBottom:{
		borderBottomWidth: 2,
		borderColor: '#ffffff',
	},
	italicText:{
		fontStyle: 'italic',
	},
	marginLeft10:{
		marginLeft: 10,
	},
	marginLeft30:{
		marginLeft: 30,
	},
	pickerStyle:{
		height: 30,
		width: 150,
	},
	vendorImage: {
		width: widthPercentageToDP('24.7%'),
		height: heightPercentageToDP('30%')
	},
	vendorImageMobile: {
		width: widthPercentageToDP('38%'),
		height: heightPercentageToDP('20%')
	},
    headerPicker:{
		paddingTop: heightPercentageToDP('2%'),
	    width: widthPercentageToDP('100%'),
		paddingBottom: heightPercentageToDP('2%'),
		paddingRight: widthPercentageToDP('2%'),
		paddingLeft: widthPercentageToDP('2%'),
    },
	headerPickerStyle:{
		width: widthPercentageToDP('3%'),
	},
    whiteTitleStyle:{
	    color: 'white',
        textAlign: 'center',
        fontSize: 20,
		fontWeight: 'bold',
    },
//	picker style
	pickerWrapper: {
		borderColor: 'white',
	},
	pickerIcon: {
		color: 'white',
		position: "absolute",
		zIndex: 1,
	},
	pickerContent: {
		borderWidth: 0,
		color: 'black',
		backgroundColor: "transparent",
		zIndex: 999,
	},
	modalStyling:{
		flex: 1,
		// position: 'absolute',
		borderWidth: 0,
		borderColor: 'white',
		backgroundColor: 'white',
		zIndex: 9999,
	},
	marginRight5:{
		marginRight: 5,
	},
	marginRight20:{
		marginRight: 20,
	},
	upMargin80:{
		marginTop: 80
	},
	valueImageStyle:{
		width: widthPercentageToDP('48%'),
		height: heightPercentageToDP('20%'),
	},
	borderLeft:{
		borderLeftWidth: 1,
		borderColor: '#bdbcbb',
	},
	borderRight:{
		borderRightWidth: 1,
		borderColor: '#bdbcbb',
	},
	circlePaddingMobile:{
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10
	},
	allBorder:{
		borderRightWidth: 4,
		borderLeftWidth: 4,
		borderBottomWidth: 4,
		borderTopWidth: 4,
		borderRadius: 5,
	},
	upBottomMargin10:{
		marginTop: 10,
		marginBottom: 10
	},
	superRoundedBorderBottom:{
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
	backdrop:{
		width: widthPercentageToDP('100%'),
		height: heightPercentageToDP('100%'),
		position: 'fixed',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	modalContent:{
		width: widthPercentageToDP('100%'),
		zIndex: 9999,
		position: 'fixed',	 top: 0, left: 0,
		right: 0, bottom: 0, justifyContent: 'center',
		alignItems: 'center',

	},
	rightItem:{
		position: 'absolute',
		right: 10
	},
	modalContainer:{
		width: widthPercentageToDP('80%'),
		backgroundColor: 'white',
	},
	bottomItem:{
		position: 'absolute',
		width: widthPercentageToDP('100%'),
		bottom: 10
	},
	bottom0Item:{
		position: 'absolute',
		width: widthPercentageToDP('100%'),
		bottom: 0
	},
	redBackgroundColor:{
		backgroundColor: 'red'
	},
	notImportant:{
		zIndex: -1,
	},
	circle:{
		borderRadius: 100
	},
	lineStyle:{
		borderWidth: 1,
		borderColor:'grey',
		width: widthPercentageToDP('20%'),
	},
	smallLineStyle:{
		borderWidth: 1,
		borderColor:'grey',
		width: widthPercentageToDP('10%'),
	},
	fullLineStyle:{
		borderWidth: 1,
		borderColor:'grey',
		width: widthPercentageToDP('70%'),
	}
});


module.exports = base
