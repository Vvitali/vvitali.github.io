import React from "react";
const showText = ()=>{

}

class mObject extends React.Component{

constructor(props){
super(props);
console.log(this.props.text)
this.state = {displayed: false};
}
onMouseEnterHandler = ()=>{
this.setState({
displayed: true
});
}

onMouseLeaveHandler = ()=>{
this.setState({
displayed: false
});
}
render(){
return (
<div>
	<img onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} src="/images/map.png" alt="arrow" style={{position: 'relative', width: "20px", top: -20, left: -10}}/>
	<div className={this.state.displayed? "card" : "card hidden"} style={{width: "18rem", backgroundColor: "white", borderRadius: "5px"}}>
		<div className="card-body">
			<h5 className="card-title">{this.props.name}</h5>
			<p className="card-text">{this.props.text}</p>
		</div>
	</div>
</div>
);
}

};

export default mObject;