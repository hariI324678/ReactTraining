import {
    Component,
} from 'react';
import React from 'react';
import '../css/RootContainer.css'
import settings from '../Settings'
import * as  Utils from '../utils/Utils'
import * as  NavActions from '../actions/NavigationActions'
import { Nav, Pager, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class RootContainer extends Component {

    constructor(props, context) {
        super(props, context)
    }

    componentWillMount() {
        Utils.showLog("In Root container will mount")
        if (this.props.localeStateHolder.loaded === false) {
            Utils.showLog('re fetching Locales')
            var localeState = this.props.localeStateHolder;
            this.props.loadLocales();
            this.loadMessages(localeState);
        }

    }
    loadMessages(localeState) {
        if (Utils.isUsable(localeState)) {
            this.props.loadMessages({
                locale: localeState.locale,
                localeValue: localeState.localeValue
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        Utils.showLog("In Root container will recieve props")
        /*  if (nextProps.locale.loaded === false) {
             Utils.showLog('re fetching Locales')
             var localeState = nextProps.localeStateHolder;
             nextProps.loadLocales();
             if (Utils.isUsable(localeState)) {
                 nextProps.loadMessages({
                     locale: localeState.locale,
                     localeValue: localeState.localeValue
                 });
             }
         } */
    }

    getHeader() {
        let currentLocation = this.props.location.pathname;
        let route = NavActions.getRouteInfo(currentLocation);
        let localeState = this.props.localeStateHolder;
        let messageFor = localeState.messageFor;
        if (route.showHeader === true) {
            return (
                <Navbar>
                    {/*   <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/contacts">Home</a>
                        </Navbar.Brand>
                       
                    </Navbar.Header> */}
                    <Nav>
                        {/* <Pager>
                            <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>

                        </Pager> */}
                        <Navbar.Text  style={{textAlign:'center'}}>
                            {messageFor(route.name)}
                        </Navbar.Text>
                    </Nav>
                </Navbar>
            )
        }

    }
    render() {


        return (
            <div style={{}} id='appContainer'>
                {this.getHeader()}
                <div style={{ flex: 1 }} id='contentDiv' >
                    {this.props.children}
                </div>

            </div>

        )

    }
}
