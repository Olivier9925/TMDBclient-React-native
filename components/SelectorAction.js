import React, { useState, useEffect } from 'react'
import { saveToList, saveToWatchedList, isAlreadyWatched } from '../actions'
import { useSelector, connect } from 'react-redux'
import { Row, Col, Container } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const SelectorAction = ({ dispatch }) =>
{
	const currentMovieId = useSelector(state => state.movieReducer.currentMovieId)
	const user = useSelector(state => state.movieReducer.user)

	useEffect(() =>
	{
		dispatch(isAlreadyWatched(currentMovieId, user));
	}, [dispatch, user])


	const connexion = useSelector(state => state.movieReducer.connexion)
	const [redirectList, setRedirectList] = useState(false)

	if (redirectList) return (<Redirect to='/' />)


	return (
		<>

			{connexion ? (
				<Container>
					<Row style={{ textAlign: 'center' }}>
						<Col onClick={() =>
						{
							dispatch(saveToList(currentMovieId));
							setRedirectList(true)
						}}> + </Col>
						<Col onClick={() =>
						{
							dispatch(saveToWatchedList(currentMovieId, user));
							setRedirectList(true)
						}}>Vu</Col>
						<Col>Note</Col>
					</Row>
				</Container>
			) : (' ')}

		</>
	)
}
export default connect()(SelectorAction);