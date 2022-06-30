
import React from 'react';
import EditText from './EditAnswer';


class GeneralInfo extends React.Component {

    render() {
        return(
            <div className='GeneralInfo'>
                <EditText value="First Name" button={this.props.buttons} required/> 
                <EditText value="Last Name" button={this.props.buttons} required /> 
                <EditText value="Email" button={this.props.buttons} required/> 
                <EditText value="Phone number" button={this.props.buttons} required/> 
            
            </div>

        )
    }

}

export default GeneralInfo;