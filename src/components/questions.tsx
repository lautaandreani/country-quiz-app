'use client'
import { QuestionOption, QuestionTitle } from '@/components/question'
import { Question as IQuestion } from '@/models/question.model'
import QuizFinished from './quiz-finished'
import Step from './step'
import { useProgressContext } from '@/context/quiz'

const Questions = ({ questions }: { questions: IQuestion[] }) => {
  const { currentProgress, setCurrentProgress } = useProgressContext()

  const onClickAnswer = (answerId: string, questionId: string) => {
    const existsPreviousAnswer = currentProgress.answers.find((answer) => answer.questionId === questionId)

    if (existsPreviousAnswer) return

    setCurrentProgress((prev) => ({
      ...prev,
      answers: [...prev.answers, { answerId, questionId }],
    }))
  }

  const isFinishedGame = currentProgress.answers.length === questions.length
  if (isFinishedGame) return <QuizFinished questions={questions} />

  return (
    <div className='max-w-md bg-navy-blue rounded-lg flex flex-col items-center min-h-[500px] min-w-[1100px] p-8 shadow-lg'>
      <h1 className='font-semibold text-gray'>Country Quiz</h1>

      <div className='flex items-center gap-4 my-4'>
        {questions.map((question, i) => (
          <Step
            key={question.id}
            onClick={() => setCurrentProgress((prev) => ({ ...prev, index: i }))}
            isSelected={currentProgress.index === i}
            wasAnswered={currentProgress.answers.some(({ questionId }) => questionId === question.id)}
            questionIndex={i + 1}
          />
        ))}
      </div>

      {questions.map((question, i) => {
        return (
          <div key={question.id}>
            {i === currentProgress.index ? (
              <div className='animate-fade-in-left'>
                <QuestionTitle title={question.title} flag={question.flag} />
                <section className='mt-8 grid grid-rows-2 grid-cols-2 gap-6 max-w-full px-4'>
                  {question.options.map((option) => (
                    <QuestionOption
                      key={option.id}
                      option={option}
                      onClick={() => onClickAnswer(option.id, question.id)}
                      currentQuestionAnswer={currentProgress.answers.find(
                        (answer) => answer.questionId === question.id
                      )}
                      correctOptionId={question.correctOptionId}
                    />
                  ))}
                </section>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Questions
