import React, { Component } from 'react';
import './Viewframe.css';
import { ClimbingBoxLoader } from 'react-spinners';

class Viewframe extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
            <iframe title="viewframe"
            className="frame"
            src={this.props.src}
            />
            <div class="loading">
                <ClimbingBoxLoader color={'#AFAFAF'} />
            </div>
            <div class="loading-text">
                Loading {this.props.title}
            </div>
            </div>
        )
    }
}

export default Viewframe