import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Footer = () =>
{

	const buttonStyle = {
		background: 'Linear-gradient(#ee121e,#f0334e)',
		width: '45vw',
		color: 'white',
		border: 'solid 0px',
		borderRadius: '5px',
		padding: '5px',
	}
	const buttonBarStyle = {
		borderTop: 'solid 2px grey',
		position: "fixed",
		bottom: "0px",
		background: 'black',
		width: "100vw",
		height: "70px",
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignContent: 'stretch',
		zIndex: 5,
	}

	const dispatch = useDispatch();
	return (
		<div style={buttonBarStyle}>
			<Link to="/">
				<button style={buttonStyle} onClick={() => 
				{
					dispatch({ type: 'DISCOVER' });
				}}> Discover</button>
			</Link>
			<Link to="/">
				<button style={buttonStyle} onClick={() =>
				{
					dispatch({ type: 'TOP' })
				}}> TOP</button>
			</Link>
		</div>
	)
}
export default Footer