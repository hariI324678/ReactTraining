import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootContainer from '../components/RootContainer';
import { loadLocales, loadMessages } from '../actions/LocaleActions';

const mapStateToProps = state =>
    ({
        localeStateHolder: state.localeStateHolder,
        
    })

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loadLocales,
        loadMessages,
    }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);