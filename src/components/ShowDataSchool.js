import React from 'react';

import VisibleButton from './VisibleButton';

class ShowData extends React.Component {
    render() {
        console.log(this.props.button);
        return <div className='schoolData'>
            <div>
            <div>
                <label className='wide'>Institution: </label><label> {this.props.school}</label>
            </div>
            <div>
                <label className='wide'>From: </label><label> {this.props.from}</label>
            </div>
            <div>
               <label className='wide'>To: </label><label> {this.props.to}</label>
            </div>
            <div>
               <label className='wide'>Qualification: </label><label> {this.props.qual}</label>
            </div>
       </div>
     <VisibleButton 
     render={this.props.button}
     value="delete"
     className="button delBtn"
     onclick={() => {this.props.delData(this.props.index)}}
     
     /> 
     </div>
        
    }
}

export default ShowData; 
