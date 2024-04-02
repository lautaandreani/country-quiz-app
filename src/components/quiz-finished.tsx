import Image from 'next/image'

import { Question } from '@/models/question.model'
import { useProgressContext } from '@/context/quiz'

const QuizFinished = ({ questions }: { questions: Question[] }) => {
  const { currentProgress, setCurrentProgress } = useProgressContext()
  const correctedAnswersCount = currentProgress.answers.filter((answer) => {
    const question = questions.find((question) => question.correctOptionId === answer.questionId)
    return question && question.correctOptionId === answer.answerId
  }).length

  return (
    <div className='bg-navy-blue rounded-lg flex flex-col items-center min-h-[500px] max-w-[400px] p-8 shadow-lg gap-6 animate-fade-in-left'>
      <Image src='/congrats.svg' alt='congratulations image' height={1000} width={1000} className='w-full' />
      <h3 className='text-light-blue text-2xl text-center mt-4'>Congrats! You completed the quiz.</h3>
      <p className='text-light-blue'>
        You answer {correctedAnswersCount}/{questions.length} correctly
      </p>

      <button
        className='px-20 py-4 bg-dark-blue  font-semibold flex items-center justify-center rounded-xl text-light-blue bg-gradient-radial transition mt-8'
        onClick={() => setCurrentProgress({ index: 0, answers: [] })}
      >
        Play again
      </button>
    </div>
  )
}

export default QuizFinished
