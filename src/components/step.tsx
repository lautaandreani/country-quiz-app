import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, HTMLAttributes, memo } from 'react'

interface StepsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean
  wasAnswered: boolean
  questionIndex: number
}

const Step = ({ isSelected, wasAnswered, questionIndex, ...props }: StepsProps) => {
  return (
    <button
      {...props}
      className={cn('font-medium text-light-blue rounded-full bg-dark-blue flex items-center justify-center size-12', {
        'bg-gradient-radial': isSelected,
        'bg-transparent': wasAnswered,
      })}
    >
      {questionIndex}
    </button>
  )
}

export default memo(Step)
