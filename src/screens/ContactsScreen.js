import {
    Component,
} from 'react';
import React from 'react';
import * as NavigationActions from '../actions/NavigationActions'

const initialState = { }
export default class ContactsScreen extends Component {

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
                In Contacts
                <button onClick={() => {
                    NavigationActions.push('/chat')
                }}>go to chat </button>
                <button onClick={() => {
                    NavigationActions.pop()
                }}>Back to login </button>
            </div>
        )

    }
}
