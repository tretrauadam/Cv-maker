import GeneralInfo from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import ShowPracticalExperience from './components/ShowPracticalExperience'
import React from "react";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      EducationExperience:{
        school: "",
        from: 0,
        to: 0, 
        Qualifications: "", 
        edit: 0,
        data: []

      },
      ShowPracticalExperience:{
        company:"",
        title: "",
        tasks: "",
        exp: "",
        edit: 0,
        data: []
      },
      buttons: "1",
      btnVal: "Preview"
      }
      this.getEdu = this.getEduc.bind(this);
      this.getPra = this.getPra.bind(this);
    
    }

    getEdu = (e) => {
      this.setState({EducationExperience: e}); 
    } 
    getPra = (e) => {
      this.setState({ShowPracticalExperience: e});
    }

    viewBut = () => {
      if(this.state.buttons ==="0") {
        this.setState({
          button: "1",
          btnVal: "Preview"
        });
      } else {
        this.setState({
          button: "0",
          btnVal:"Update CV"
        });
      }
    }

    render(){
      return(
        <div className="App">
          <h1> Cv maker</h1>
          <input className="button" type="button" value={this.state.btnVal} onClick={this.viewBut}></input>
          <GeneralInfo button={this.state.button}/> 
          <div className="line"></div>
          <EducationExperience getEdu={this.getEdu} EducationExperience={this.state.EducationExperience} button={this.state.buttons} />
          <div className="line"></div>
          <ShowPracticalExperience getPra={this.getPra} PracticalExperience={this.state.PracticalExperience} button={this.state.buttons} /> 
        </div>
      )
    }
  }

  export default App; 
