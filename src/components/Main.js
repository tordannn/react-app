import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
	color: #ffffff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;

	span {
		display: block;
		line-height: 30px;
		font-size: 24px;
	}
`

const GiftText = styled.div`
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;
	text-aling: left;
`

const SendReq = styled.button`
	width: 245px;
	height: 64px;
	background-color: #ffa14b;
	border: none;
	border-radius: 30px;
	margin-top: 34px;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
`

class Main extends React.Component {
	render(){
		return(
				 <Row>
				 	<Col lg={5} >
				 		<Repair> Качественный ремонт
							<span> iphone за 35 минут и гарантия 1 год </span>
						</Repair>
						<GiftText>Оставьте заявку на бесплатную диагностику без очереди,
								и получите защитное стекло, стоимостью 1000 рублей,
								с установкой в подарок!
						</GiftText>
						<SendReq> Отправить заявку! </SendReq>
				 	</Col>
				  	<Col lg={6} lgOffset={1}>
						<Slider />
				 	</Col>
				 </Row>
			)
	}
}
 
export default Main