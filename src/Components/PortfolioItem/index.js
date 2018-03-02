import React, {Component} from 'react';
import './style.css';

class Project extends Component{
	render(){
		return (
			<div className="col-sm-6 col-md-4 pItem animated">
			<hr/>
			<div className="row">
			<img src={this.props.imgSrc? this.props.imgSrc : "http://via.placeholder.com/650x350"} alt="Project"/>
			<h3>{this.props.title? this.props.title : "Future project"}</h3>
			<p>{this.props.descr? this.props.descr :"Very cool future project! " + this.props.title}</p>
			<p><a href={this.props.url} target="_blank" className="btn btn-primary" role="button">Go!</a></p>
			</div>
			</div> 
			);
	};
};

export default Project;