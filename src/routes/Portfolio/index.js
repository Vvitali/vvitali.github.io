import React, { Component} from 'react';
import Project from '../../Components/PortfolioItem'

class Portfolio extends Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div className="project-list row">
			<Project title="TheCryptoShop" imgSrc="https://github.com/Vvitali/TheCryptoShop/raw/master/media/main.gif" descr="Online shop where you can buy eBay goods using Bitcoin!"></Project>
			<Project title="Secret-Santa" imgSrc="https://raw.githubusercontent.com/dfarrenk/ProjectOne/master/screenshot/index.png" descr="Application for exchanging Christmas presents anonymously"></Project>
			<Project title="mealCrave" imgSrc="https://raw.githubusercontent.com/schapm16/mealCrave/development/media/main.jpg" descr="Find dishes from local restaurants that have been curated and posted by users"></Project>
			<Project></Project>
			<Project></Project>
			</div>		
			);
	};
}

export default Portfolio;