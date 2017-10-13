import {
    Component,
} from 'react';
import React from 'react';

import * as NavigationActions from '../actions/NavigationActions'

const initialState = { }
export default class ChatScreen extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = { ...initialState }
    }

    componentWillMount() {

        //this.props.loadCountries();
    }



    render() {
        return (

            <div>
                In Chat
                <button onClick={() => {
                    NavigationActions.push('/contacts')
                }}>go to chat </button>
                <button onClick={() => {
                    NavigationActions.pop()
                }}>Back to Contacts </button>

            </div>)

    }
}
