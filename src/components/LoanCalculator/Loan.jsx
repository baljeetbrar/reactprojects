import React, { useEffect, useState } from "react";
import {Container, Row, Col,Form,  ListGroup} from 'react-bootstrap';

const LoanCalculator =() => {
	const [loanAmount, setLoanAmount]= useState("");
	const [monthlyPayment, setMonthlyPayment] = useState("");
	const [biWeeklyPayment, setbiWeeklyPayment] = useState("");
	const [weeklyPayment, setweeklyPayment] = useState("");
	const [interestRange, setInterestRange] = useState(5);
	const [timeRange, setTimeRange] = useState(2);
	const [finalAmount, setFinalAmount] = useState("");

	useEffect(()=>{
		if(finalAmount && timeRange){
			const monthly = finalAmount / (timeRange * 12);
			const biWeekly = finalAmount / (timeRange * 26);
			const weekly = finalAmount / (timeRange * 52);
			
			setMonthlyPayment(monthly.toFixed(4));
			setbiWeeklyPayment(biWeekly.toFixed(4));
			setweeklyPayment(weekly.toFixed(4));
		}
	},[finalAmount, timeRange, interestRange]);
	
	const paymentCalculator=()=>{
		
		if(loanAmount && timeRange){
			const loanAmountValue = parseFloat(loanAmount);
			const paymentInterest = parseFloat(interestRange);
			
			const finalFullPayment = loanAmountValue * Math.pow(1 + paymentInterest / 100, timeRange);
			setFinalAmount(finalFullPayment.toFixed(2));
		}
	}
const handleInterestRange=(e)=>{
	const newInterest = parseFloat(e.target.value);
	setInterestRange(newInterest);
}

const handleTimeRange=(e)=>{
	const newTimeRange = parseFloat(e.target.value);
	setTimeRange(newTimeRange);
}

const handleSubmit =(e)=>{
	e.preventDefault();
	paymentCalculator();
}


	return (
		<Container>
			<Row className="d-flex flex-row">
				<Col>
					<div className="form-container">
						<div className="info-head container-header text-center bg-blue">
							<h2 className="text-bold">Loan Calculator</h2>
						</div>
						<Form action="" onSubmit={handleSubmit} className="loan-form-wrapper ">
							<Form.Group className="input-field" controlId="payment">
							<Form.Label htmlFor="payment">Loan Amount :</Form.Label>
								<Form.Control 
									type="text" 
									id="payment" 
									name="payment"
									placeholder="$ Amount" 
									value={loanAmount} 
									onChange = {(e)=>setLoanAmount(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className="input-field interestslider" controlId="interest">
								<Form.Label htmlFor="interest">Interest Rate(%):</Form.Label>
									<Form.Range 
										type="range" 
										id="interest"
										name="interest"
										min="0" 
										max="10"  
										step="0.25" 
										list="volsettings" 
										value={interestRange}  
										onChange={handleInterestRange}
									/>
								<datalist id="volsettings">
									<option value="0">0</option>
									<option value="2.5">2.5</option>
									<option value="5">5</option>
									<option value="7.5">7.5</option>
									<option value="10">10</option>
								</datalist>
								<span>{interestRange}%</span>
							</Form.Group>
							<Form.Group className="input-field" controlId="duration">
								<Form.Label htmlFor="duration">Number of Years:</Form.Label>
								<Form.Control as="select" id="duration" name="duration" value={timeRange} onChange={handleTimeRange}>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
								</Form.Control>
							</Form.Group>
							<Form.Group className="input-field">
								<button>Submit</button>
							</Form.Group>
						</Form>
					</div>
				</Col>
				<Col>
					<div className="payment-information">
						<div className="info-head container-header text-center bg-blue">
						<h2 className="text-bold">Payment Information</h2>
						</div>
						<ListGroup className="payCal container-innerBox d-flex">
						<ListGroup.Item className="list-items">
							<strong className="item-label">Final Full Payment :</strong>
							<Form.Control id="finalPayment" name="finalPayment" type="text" value={finalAmount} readOnly />
						</ListGroup.Item>
						<ListGroup.Item className="list-items">
							<strong className="item-label">Monthly Payment :</strong>
							<Form.Control id="monthlyPayment" name="monthlyPayment" type="text" value={monthlyPayment} readOnly />
						</ListGroup.Item>
						<ListGroup.Item className="list-items"> 
							<strong className="item-label">Bi-Weekly Payment :</strong>
							<Form.Control id="biWeeklyPayment" name="biWeeklyPayment" type="text" value={biWeeklyPayment} readOnly />
						</ListGroup.Item>
						<ListGroup.Item className="list-items">
							<strong className="item-label">Weekly Payment :</strong>
							<Form.Control id="weeklyPayment" name="weeklyPayment" type="text" value={weeklyPayment} readOnly />
						</ListGroup.Item>
						</ListGroup>
					</div>
       			</Col>
			</Row>
		</Container>
	);
}

export default LoanCalculator;
