import React from 'react';
import VisibleButton from './VisibleButton';


class EditText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            edit: 0, 
        }

    this.setEdit = this.setEdit.bind(this);
    }

    comp = () => {
        if(this.state.edit === 1) {
            return <div className='Text'>
                <input type='text' value={this.state.value} onChange={this.updateValue}/>
                <input type='button' value="Save"  onClick={this.setEdit} className="button"/>
            </div>
        }

        return <div className='Text'> 
          <div> 
            <label>{this.state.value}</label>
          </div>
          <VisibleButton value="Edit" render={this.props.button} className="button" onClick={this.setEdit} /> 
        </div>
    }
    updateValue = (e) => {
        this.setState({value: e.target.value})
    }

    setEdit = () => {
        console.log("setEdit"); 
        this.setState(() => {
            if(this.state.edit === 0 ) {
                return {edit: 1 }
            } else 
            return {edit: 0}
        });
    }
    render() {
        return this.comp()

    }

 }

 export default EditText; 