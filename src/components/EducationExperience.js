import React from 'react';
import ShowData from './ShowDataSchool'

import VisibleButton from './VisibleButton';

class EducationExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.EducationExperience;
        this.deleteEducation = this.deleteEducation.bind(this);
        this.editEduction = this.editEduction.bind(this);
    }

    deleteEducation = (index) => {
        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.splice(index, 1);
            return {
                data: prevData
            }

        })

        this.props.getEdu(this.state); 
    }

    updateSchool = (e) => {
        this.setState({school: e.target.value})
    }
    updateFrom = (e) => {
        this.setState({from: e.target.value})
    }

    updateTo = (e) => {
        this.setState({to: e.target.value})
    }
    
    updateQual = (e) => {
        this.setState({Qualification: e.target.value})
    }
    
    addQuali = () => {
        return <div className='addQuali'>
            <div>
                <label>School:</label><input type="text" onChange={this.updateSchool} value={this.state.school} /> 
            </div>
            <div>   
                <label>From:</label><input type="date" onChange={this.updateFrom} value={this.state.from} />
            </div>
            <div>
                <label>To:</label><input type="date" onChange={this.updateTo} value={this.state.to} />
            </div>
            <div>
                <label>Qualification:</label><input type="text" onChange={this.updateQual} value={this.state.Qualification} /> 
            </div>
            <input type="button" value="submit" onClick={this.submitQuali} className="button"/> 
        </div>
    }

    submitQuali = () => {
        let data = {
            school: this.state.school, 
            from: this.state.from,
            to: this.state.to, 
            Qualification: this.state.Qualification
        };

        this.setState((prevState) => {
            let prevData = prevState.data.map(e => e);
            prevData.push(data);
            return {
                data: prevData, 
                edit: 0
            };
        })

        this.props.getEdu(this.state);
    }

    showEdu = () => {
        let subButton = <VisibleButton render={this.props.button} value="Add" onClick={this.setEdit} className="button" /> 
        if (this.state.data.length === 0) {
            return subButton;
        } else {
            console.log(this.state.data);
            let data = [];
            let ts = this.state; 
            for(let i = 0; i < this.state.data.length; i++) {
                data.push(<ShowData 
               key={i} index={i} 
               button={this.props.button} 
               school={ts.data[i].school} 
               from={ts.data[i].from}
               to={ts.data[i].to}
               qual={ts.data[i].Qualification}
               del={this.deleteEducation}
                />)
            }
            return <div className='showEdu'>
                {data}
                {subButton}
            </div>
        }
    }

    setEdit = () => {
        this.setState({ edit: 1})
    }

    handleRender = () => {
        if(this.state.edit === 0) {
            return this.showEdu()
        } else 
        if (this.state.edit === 1) {
            return this.addQuali();
        }
    }

    render(){
        return (
            <div className='EduExperience'> 
            <h3 className='Heading'>Eduction Experience</h3>
            {this.handleRender()}
            </div>
        )
    }


}
export default EducationExperience;