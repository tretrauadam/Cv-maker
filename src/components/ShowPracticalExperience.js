import React from 'react';
import VisibleButton from './VisibleButton';


class ShowData extends React.Component {
    render() {
        return <div className='schoolData'>
            
        <div>

            <div> 
                <label className='wide'>Company Name: </label><label> {this.props.school}</label> 
            </div>
            <div>
                <label className='wide'> Title: </label><label>{this.props.from} </label>
            </div>
            <div>
                <label className='wide'>Tasks:</label> <label>{this.props.to} </label>
            </div>
            <div>
                <label className='wide'>YearExp:</label><label> {this.props.qual}</label>
            </div>
        </div>
       <VisibleButton render={this.props.button}
        value="delete"
        className="button delBtn"
        onClick={() => {this.props.delData(this.props.index)}}
        />
     </div>


    }
}



export default ShowData; 
