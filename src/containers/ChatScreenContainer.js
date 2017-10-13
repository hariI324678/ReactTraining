import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatScreen from '../screens/ChatScreen'

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
)(ChatScreen);