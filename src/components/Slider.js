 import React, {Component} from 'react';

 import Slide1 from '../img/slide1.png';
 import Slide2 from '../img/slide2.png';
 import Slide3 from '../img/slide3.png';
 import Slide4 from '../img/slide4.png';

 class Slider extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {
 			slides: [
 				{
 					eachSlide: `url(${Slide1})`
 				},
 					{
 					eachSlide: `url(${Slide2})`
 				},
 					{
 					eachSlide: `url(${Slide3})`
 				},
 					{
 					eachSlide: `url(${Slide4})`
 				}
 			],
 			autoplay: false, 
 			active: 0,
 			max: 0
 		}

 		this.state.max = this.state.slides.length;
 		this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
 		this.toggleAutoplay = this.toggleAutoplay.bind(this);
 		this.nextOne = this.nextOne.bind(this);
 		this.prevOne = this.prevOne.bind(this);
 	}

 	componentDidMount () {
 		this.interval = setInterval(() => this.intervalBetweenSlides(), 3000);
 	}
 	componentWillUnmount() {
 		clearInterval(this.interval);
 	}
 	intervalBetweenSlides() {
 		if (this.state.autoplay === true) {
 			if(this.state.active === this.state.max - 1){
 				this.state.active = 0
 			}
 			else {
 				this.state.active++
 			}

 			this.setState({
 				active: this.state.active
 			})
 		}
 	}
 	toggleAutoplay() {
 		this.setState({
 			autoplay: !this.state.autoplay
 		})
 	}
 	nextOne () {
 		(this.state.active < this.state.max - 1) ? this.setState({
 			active: this.state.active + 1
 		}) : this.setState({
 			active: 0
 		}) 
 	}
 	prevOne() {
 		(this.state.active > 0) ? this.setState({
 			active: this.state.active - 1
 		}) : this.setState({
 			active: this.state.max - 1
 		}) 
 	}
 	dots(index, event) {
 		this.setState({
 			active: index
 		})
 	}
 	isActive (value) {
 		if(this.state.active === value) {
 			return 'active'
 		}
 	}
 	setSliderStyles () {
 		const transition = this.state.active * - 100/this.state.slides.length;

 		return {
 			width : (this.state.slides.length * 100) + '%',
 			transform: `translateX(${transition}%)`
 		}
 		
 	}
 	renderSlides () {
 		const transition = 100/this.state.slides.length + '%';

 		return this.state.slides.map((item, index) => (
 			<div 
 				className='each-slide'
 				key = {index}
 				style = {{backgroundImage: item.eachSlide, width: transition}}>
 			</div>
 			))
 	}
 	renderDots () {
 		return this.state.slides.map((item, index) => (
 				<li 
 					className={this.isActive(index) + ' dots'}
 					key = {index}
 					ref = 'dots'
 					onClick = {this.dots.bind(this, index)}>
 					<a>&#9679;</a>
 					</li>
 			))
 	}
 	renderArrows () {
 		return (
 				<div>
 					<button 
 						type = 'button'
 						className='arrows prev'
 						onClick = {this.prevOne}>
 						<svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
						    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
						    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>

					<button 
 						type = 'button'
 						className='arrows next'
 						onClick = {this.nextOne}>
 						<svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
						    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
						    <path d='M0 0h24v24H0z' fill='none'/>
						</svg>
					</button>

 				</div>
 			)
 	}
 	render () {
 		return (
 				<div className="slider">
 					<div 
 						className="wrapper"
 						style={this.setSliderStyles()}>
 						{this.renderSlides()}
 					</div>

 					{this.renderArrows()}

 					<ul className="dots-container">
 					{this.renderDots()}
 					</ul>


 				</div>
 			)
 	}

 }

export default Slider




