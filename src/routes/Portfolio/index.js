import React, { Component} from 'react';
import Project from '../../Components/PortfolioItem'

class Portfolio extends Component{
	render(){
		return(
			<div className="project-list row">
			<Project url="https://github.com/Vvitali/TheCryptoShop" title="TheCryptoShop" imgSrc="https://github.com/Vvitali/TheCryptoShop/raw/master/media/main.gif" descr="Online shop where you can buy eBay goods using Bitcoin!"></Project>
			<Project url="https://github.com/Vvitali/Secret-Santa" title="Secret-Santa" imgSrc="https://raw.githubusercontent.com/dfarrenk/ProjectOne/master/screenshot/index.png" descr="Application for exchanging Christmas presents anonymously"></Project>
			<Project url="https://github.com/Vvitali/mealCrave" title="mealCrave" imgSrc="https://raw.githubusercontent.com/schapm16/mealCrave/development/media/main.jpg" descr="Find dishes from local restaurants that have been curated and posted by users"></Project>
			<Project title="Future project 1" descr="Great future app #1"></Project>
			<Project title="Future project 2" descr="Great future app #2"></Project>
			</div>		
			);
	};
}

export default Portfolio;