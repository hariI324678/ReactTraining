import {
    Component,
} from 'react';
import React from 'react';
import { ControlLabel, FormControl, FormGroup, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import * as NavigationActions from '../actions/NavigationActions'
import '../css/LoginScreen.css'
import CountryPinInfo from '../apis/mock/CountryPinInfo'
import * as  Utils from '../utils/Utils'

const initialState = { userName: '', password: '', mobileNumber: '', countryCode: '+91', country: 'India', alphaCode: 'Ind', }

export default class LoginScreen extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = { ...initialState }
    }

    componentWillMount() {


    }

    loadMessages(localeState) {
        if (Utils.isUsable(localeState)) {
            this.props.loadMessages({
                locale: localeState.locale,
                localeValue: localeState.localeValue
            });
        }
    }
    registerUser() {
        this.props.registerUser(this.state)
    }
    setContryInfo(e) {
        let countryInfo = JSON.parse(e.target.value);
        this.setState({
            countryCode: countryInfo.countryCode,
            country: countryInfo.countryName,
            alphaCode: countryInfo.alphaCode
        })
    }
    getCountryInfo(e) {

        return JSON.stringify({
            "countryName": this.state.country,
            "countryCode": this.state.countryCode,
            "alphaCode": this.state.alphaCode
        })
    }
    getLocalePicker = (localeState) => {
        if (localeState.loaded === true) {
            const messageFor = localeState.messageFor;
            return (
                <div>
                    <div className="input-group input-group-lg fgFullWidth">
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>{messageFor('label.selectLocale')}</ControlLabel>
                            <FormControl onChange={(e) => this.loadMessages({ locale: e.target.value })} value={this.props.localeStateHolder.locale} componentClass="select" placeholder="SelectCountry">
                                {localeState.locales.map((locale, index) =>
                                    <option key={index} value={locale.value}>{locale.label}</option>
                                )};
                </FormControl>
                        </FormGroup>
                    </div>
                </div>
            )
        } else {
            return (null)
        }
    }

    render() {
        const localeState = this.props.localeStateHolder;
        
        if (localeState.loaded === true) {
            const messageFor = localeState.messageFor;
            return (

                <div id='loginScreenContainer'>
                    <div className='localeContainer' >
                        {this.getLocalePicker(localeState)}
                        <br />

                    </div>
                    <div className='logoContainer' >
                    </div>
                    <div className='formContainer'>
                        <div className="input-group input-group-lg fgFullWidth">
                            <input type="text" name="userName" value={this.state.userName}
                                onChange={(e) => this.setState({ userName: e.target.value })}
                                className="fgLargeInput form-control"
                                placeholder={messageFor('label.userName')} />
                        </div>
                        <br />
                        <div>
                            <div className="input-group input-group-lg fgFullWidth">
                                <input type="password" name="password" value={this.state.password}
                                    className="fgLargeInput form-control" placeholder={messageFor('label.password')}
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                            </div>
                        </div>
                        <br />
                        <div>
                            <div className="input-group input-group-lg fgFullWidth">
                                <input type="number" name="mobileNumber" value={this.state.mobileNumber}
                                    className="fgLargeInput form-control" placeholder={messageFor('label.mobileNumber')}
                                    onChange={(e) => this.setState({ mobileNumber: e.target.value })}
                                />
                            </div>
                        </div>
                        <br />

                        <div>
                            <div className="input-group input-group-lg fgFullWidth">
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>{messageFor('label.selectCountry')}</ControlLabel>
                                    <FormControl value={this.getCountryInfo()} onChange={(e) => this.setContryInfo(e)} componentClass="select" placeholder="SelectCountry">
                                        {CountryPinInfo.slice(0, 50).map((countryInfo, index) =>
                                            <option key={index} value={JSON.stringify(countryInfo)}>{countryInfo.countryName}</option>
                                        )};
                        </FormControl>
                                </FormGroup>
                            </div>
                        </div>
                        <br />

                        <div>
                            <div className="btn-group fgFullWidth text-center">
                                <button onClick={() => this.registerUser()} className="btn btn-primary btn-lg fgNoFloat fgFullWidth fgLargeButton">Sign In</button>
                            </div>
                        </div>
                    </div>

                </div>


            )

        } else {

            return null
        }
    }
}
