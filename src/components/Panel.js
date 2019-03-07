import React, { Component } from 'react';
import './Panel.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class Panel extends Component {
    constructor(props){
        super(props);
        if(this.props.disabled) {

        } else {
            library.add(this.props.icon);
        }
        this.state = {
            hover: false
        }
    }

    hoverAction() {
        
    }

    hoverOver() {

    }

    render() {
        const disabled = this.props.disabled;
        return (
            <a href={this.props.link}>
            {!disabled ? (
                <div className="panel" style={this.props.style} onMouseEnter={this.hoverAction()} onMouseLeave={this.hoverOver()}>
                    <div className="title">{this.props.title}</div>
                    <div className="desc">{this.props.desc}</div>
                    <div className="icon"><FontAwesomeIcon icon={this.props.icon} /></div>
                    <div className="goButton"><FontAwesomeIcon icon={faPlay} /></div>
                </div>
            ) : (
                <div style={{boxShadow: "none"}} className="panel disabled">
                    <div className="title">{this.props.title}</div>
                </div>
            )}
            </a>
            
        )
    }
}

export default Panel;