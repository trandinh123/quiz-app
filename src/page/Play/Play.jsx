import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import QuestionAnswers from '../../components/QuestionAnswers/QuestionAnswers';
import Loading from '../../components/Loading/Loading';

export default function Play() {

	let {search} = useLocation()
	let [loading, setLoading] = useState(true);

	let [questions, setQuestions] = useState([])
	let [curQuest, setCurQuest] = useState(0)
	useEffect(() => {
		fetch(`https://the-trivia-api.com/api/questions${search}`)
			.then(response => response.json())
			.then(data => setQuestions(data))
			.catch(err => console.log('Fetching Error:', err))
			.finally(() => {
				setLoading(false)
			})
	}, [search])

  	return (
		<>
		{
			!loading ? 
			<QuestionAnswers 
				questions={questions} 
				curQuest={curQuest}
				setCurQuest={setCurQuest}/
			>
			 : <Loading/>
		}
		</>
  	)	
}
