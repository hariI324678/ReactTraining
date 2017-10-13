/* import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

class App extends React.Component {
    componentWillMount() {
        if(this.props.login.verifiedPin !== true) {
            this.props.logout();
            this.props.router.push("/login");
            return false;
        }
        return true;
    }

    render() {
        if(this.props.login.verifiedPin !== true) {return null;}

        return (
            <div className="fgAppContainer">
                {this.props.children}
                <div className="fgLoading" style={bgImg} id="fgLoading" />
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout: LoginActions2.logout
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
 */