import React, { Component } from 'react';
import './Viewframe.css';
import { ClimbingBoxLoader } from 'react-spinners';

class Viewframe extends Component {
    constructor(props){
        super(props);
    }
    
    updateUrl(e) {
        //placeholder
    }

    render() {
        return (
            <div>
            <iframe 
            onLoad={this.updateUrl}
            title="viewframe"
            className="frame"
            src={this.props.src}
            />
            <div className="loading">
                <ClimbingBoxLoader color={'#AFAFAF'} />
            </div>
            <div className="loading-text">
                Loading {this.props.title}
            </div>
            </div>
        )
    }
}

export default Viewframe