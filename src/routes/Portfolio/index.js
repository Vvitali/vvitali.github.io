import React, { Component} from 'react';
import Project from '../../Components/PortfolioItem'

class Portfolio extends Component{
	render(){
		return(
			<div className="project-list row">
			<Project url="https://thecryptoshop.herokuapp.com" title="TheCryptoShop" imgSrc="https://github.com/Vvitali/TheCryptoShop/raw/master/media/main.gif" descr="Online shop where you can buy eBay goods using Bitcoin! Back-end\Full-stack (Currently: Beta)"></Project>
			<Project url="https://vvitali.github.io/Secret-Santa/" title="Secret-Santa" imgSrc="/images/schreenshots/thesecret-santa.jpg" descr="Application for exchanging Christmas presents anonymously. Back-end\Full-stack "></Project>
			<Project url="https://meal-crave.herokuapp.com" title="mealCrave" imgSrc="/images/schreenshots/themealCrave.jpg" descr="Find dishes from local restaurants that have been curated and posted by users. Back-end"></Project>
			<Project title="The Matrix Hangman" descr="Matrix style!" imgSrc="/images/schreenshots/thematrix-hangman.jpg" url="https://vvitali.github.io/Hangman/"></Project>
			<Project title="Future project 2" descr="Great future app #1"></Project>
			</div>		
			);
	};
}

export default Portfolio;