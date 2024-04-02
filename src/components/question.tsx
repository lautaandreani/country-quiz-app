import { ButtonHTMLAttributes } from 'react'

import { Icons } from '@/lib/icons'
import { QuestionOption, QuestionFlag } from '@/models/question.model'
import Image from 'next/image'

const QuestionTitle = ({ title, flag }: { title: string; flag: QuestionFlag }) => {
  return (
    <div className='flex items-center justify-center min-h-20 gap-2'>
      <h3 className='text-light-blue text-3xl font-semibold text-balance my-4 text-center'>{title}</h3>
      <Image src={flag.imageUrl} alt={flag.imageAlt} width={30} height={30} />
    </div>
  )
}

interface QuestionOptionsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  option: QuestionOption
  currentQuestionAnswer: { questionId: string; answerId: string } | undefined
  correctOptionId: string
}

const QuestionOption = ({ option, correctOptionId, currentQuestionAnswer, ...props }: QuestionOptionsProps) => {
  const isSelected = currentQuestionAnswer?.answerId === option.id

  const AnswerStatusIcon = () => {
    if (currentQuestionAnswer?.answerId) {
      if (correctOptionId === option.id) {
        return <Icons.Correct />
      }
      return <Icons.Error />
    }

    return null
  }

  return (
    <button
      className={`px-28 py-5 bg-dark-blue text-xl font-medium flex items-center justify-center rounded-xl text-light-blue hover:bg-gradient-radial transition gap-2 disabled:opacity-70 disabled:pointer-events-none ${
        isSelected ? 'bg-gradient-radial' : ''
      }`}
      disabled={!!currentQuestionAnswer?.answerId}
      {...props}
    >
      {option.name}
      <AnswerStatusIcon />
    </button>
  )
}

export { QuestionTitle, QuestionOption }
