'use client'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface QuizState {
  index: number
  answers: { questionId: string; answerId: string }[]
}

interface QuizProps {
  currentProgress: QuizState
  setCurrentProgress: React.Dispatch<React.SetStateAction<QuizState>>
}

const GlobalContext = createContext<QuizProps>({
  currentProgress: { index: 0, answers: [] },
  setCurrentProgress: () => {},
})

export const ProgressContextProvider = ({ children }: PropsWithChildren) => {
  const [currentProgress, setCurrentProgress] = useState<QuizState>({ index: 0, answers: [] })

  return <GlobalContext.Provider value={{ setCurrentProgress, currentProgress }}>{children}</GlobalContext.Provider>
}

export const useProgressContext = () => useContext(GlobalContext)
