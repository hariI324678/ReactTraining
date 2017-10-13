import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser, logout } from '../actions/LoginActions';
import { loadLocales, loadMessages } from '../actions/LocaleActions';


import LoginScreen from '../screens/LoginScreen'
const mapStateToProps = (state) => {
    return {
        localeStateHolder: state.localeStateHolder,
        loginHolder:state.loginHolder
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerUser,
        //loadLocales,
        loadMessages,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);