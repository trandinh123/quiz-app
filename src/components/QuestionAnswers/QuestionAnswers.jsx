import React, {useState} from 'react'
import { Button, Grid } from '@mui/material'
import Answers from '../../components/Answers/Answers'
import Layout from '../../components/Layout'
import Question from '../../components/Question/Question'
import PaginationRounded from '../../components/Pagination/PaginationRounded'
import { useNavigate } from 'react-router-dom'

export default function QuestionAnswers({questions, curQuest, setCurQuest}) {
	let navigate = useNavigate();
	let [userAnswer, setUserAnswer] = useState(Array(questions.length).fill(''));

	function handleFinish() {
		let numCorrect = questions.filter((q, idx) => q.correctAnswer === userAnswer[idx]).length;
		console.log(numCorrect)
		navigate(`/result?correct=${numCorrect}&total=${questions.length}`)
	}
	
	return (
		<Layout>
			<Grid 
				container
				width='100%'
				marginTop='1.75rem'
				rowGap='1.75rem'
				direction='column'
			>
				<Question question={questions[curQuest]} curQuest={curQuest}/>
				<Answers 
					answers={
					[questions[curQuest].correctAnswer,
					...questions[curQuest].incorrectAnswers]
						.sort()
					}
					curQuest={curQuest}
					userAnswer={userAnswer}
					setUserAnswer={setUserAnswer}
				/>
				<Grid
					item
				>
					<PaginationRounded 
						numberQuest={questions.length}
						setCurQuest={setCurQuest}
					/>
				</Grid>
				{
					curQuest + 1 === questions.length &&
					<Button 
						variant="contained" 
						color="success"
						onClick={handleFinish}
					>
						Finish
					</Button>
				}
			</Grid>
		</Layout>
  	)
}
