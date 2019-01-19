import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 49px;
`
const StyledLink = styled.a`
	color: ${props => props.active ? 'pink' : 'white'};
	font-size: 14px;
	font-weight: 300;
	line-height: 24px;
	padding-right: 33px;
	border-right: 1px solid #fff;

	&:hover {
		color: #8d8d8d;
		text-decoration: none;
	}

	&:last-child {
		border-right: none;
	}
`

class Link extends React.Component {
	render() {
		return (
				<StyledLink href={this.props.link}> {this.props.text}</StyledLink>
			)
	}
}


class Header extends React.Component {
	render(){
		return(
				<Row>
					<Col lg={12}>
						<nav>
							<List>
								<Link link="#" text="Вызов мастера"/>
								<Link link="#" text="Прайс на ремонт"/>
								<Link link="#" text="Наши преимущества"/>
								<Link link="#" text="Схема работы"/>
								<Link link="#" text="Отзывы клиентов"/>
								<Link link="#" text="Примеры работ"/>
								<Link link="#" text="Контакты"/>
							</List>
						</nav>
					</Col> 
				</Row>
			)
	}
}

export default Header