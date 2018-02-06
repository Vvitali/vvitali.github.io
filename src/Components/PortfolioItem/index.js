import React, {Component} from 'react';
import './style.css';

class Project extends Component{
render(){
return (
<div className="col s12 m4 ProjectItem">
	<div className="card">
		<div className="card-image">
			<img src={this.props.imgSrc? this.props.imgSrc : "http://via.placeholder.com/650x350"}/>
			<span className="card-title">{this.props.title? this.props.title : "Future project"}</span>
		</div>
		<div className="card-content">
			<p>{this.props.descr? this.props.descr :"Very cool future project! " + this.props.title}
			</p>
		</div>
	</div>
</div> 
);
};
};

export default Project;