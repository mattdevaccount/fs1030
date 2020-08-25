import React from 'react';
import '../styles/dataStyle.css';

export class Data extends React.Component {

    constructor (props) {
        super(props);
        this.state = { contactData: [] }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.jwt}`
                }
        })
        const data = await response.json()
        this.setState({contactData: data})
    }

    render() {
        return (
            <div>
                <h1>Received Comments</h1>
                { this.state.contactData.length > 0 && 
                <ul className = 'mainList'>
                    {this.state.contactData.map(contactPerson => {
                        return (
                            <li key = {contactPerson.id}>
                                <ul className='contactDude'>
                                    <li>{`Name: ${contactPerson.name}`}</li>
                                    <li>{`Email: ${contactPerson.email}`}</li>
                                    <li>{`Phone Number: ${contactPerson.phoneNumber}`}</li>
                                    <li>{`Comment: ${contactPerson.content}`}</li>
                                </ul>
                            </li>
                        );
                        
                    })}
                </ul>
                }
            </div>
        )
    }
}

export default Data
