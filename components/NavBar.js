import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const NavBar = (props) =>
{
	const dispatch = useDispatch();
	const [search, setsearch] = useState(null);
	const connexion = useSelector(state => state.movieReducer.connexion)



	const buttonStyle = {
		background: 'Linear-gradient(#ee121e,#f0334e)',
		width: '20vw',
		color: 'white',
		border: 'solid 0px',
		borderRadius: '5px',
		padding: '5px',
	}

	const inputStyle = {
		background: '#ABABAB',
		width: '50vw',
		color: 'black',
		border: 'solid 0px',
		borderRadius: '5px',
		padding: '5px',
	}
	const BarStyle = {
		position: "fixed",
		top: "0px",
		background: 'black',
		width: "100vw",
		height: "70px",
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-around',
		alignItems: 'center',
		alignContent: 'stretch',
		borderBottom: 'grey solid 2px',
		zIndex: 5,
	}

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div>
			<div style={BarStyle}>
				<input placeholder="Chercher" style={inputStyle} onChange={(e) => { setsearch(e.target.value) }} />
				<Link to="/">
					<button style={buttonStyle} onClick={() =>
					{
						dispatch({ type: 'SEARCH', search: search })
					}} >OK</button>
				</Link>

				<Dropdown isOpen={dropdownOpen} toggle={toggle} >
					<DropdownToggle style={buttonStyle} caret>
						Menu
       				</DropdownToggle>
					<DropdownMenu>
						{!connexion ? ' ' : (<DropdownItem>Mon Compte</DropdownItem>)}
						{!connexion ? ' ' : (<DropdownItem><Link to="/"><span onClick={() => { dispatch({ type: 'VU' }) }}>Vu</span></Link></DropdownItem>)}
						{!connexion ? ' ' : (<DropdownItem><Link to="/"><span onClick={() => { dispatch({ type: 'LISTE' }) }}> ma liste</span></Link></DropdownItem>)}
						<DropdownItem>Classement</DropdownItem>
						{connexion ? (<DropdownItem><Link to='/connexion'><span onClick={() => { dispatch({ type: 'DECO' }) }}>Déconnexion</span></Link></DropdownItem>) : (<DropdownItem><Link to='/connexion'>Connexion</Link></DropdownItem>)}
					</DropdownMenu>
				</Dropdown>
			</div>

		</div >
	);
}

export default NavBar;