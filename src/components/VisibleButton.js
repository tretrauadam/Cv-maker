
import React from 'react';

class VisibleButton extends React.Component {
    

    render() {
        if(this.props.render === "1") {
            return <input type="button" value={this.props.value} className={this.props.className} onClick={this.props.onClick} />
        } else {
            return <div></div>
        }
    }
}

export default VisibleButton; 