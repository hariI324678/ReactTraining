import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import ContactsScreen from '../screens/ContactsScreen'
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsScreen);