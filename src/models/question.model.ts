export interface Question {
  id: string
  title: string
  correctOptionId: string
  options: QuestionOption[]
  flag: QuestionFlag
}

export interface QuestionFlag {
  imageUrl: string
  imageAlt: string
}

export interface QuestionOption {
  name: string
  id: string
}
