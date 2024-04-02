import Questions from '@/components/questions'
import { Question } from '@/models/question.model'
import { getCountries } from '@/services/countries.services'

export default async function Home() {
  const countries = await getCountries(['name', 'capital', 'flags'])
  const randomIndex = Math.floor(Math.random() * (countries.length - 10))
  const slicedCountries = countries.slice(randomIndex, randomIndex + 10)
  const mappedCountries = slicedCountries.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    id: crypto.randomUUID(),
    flag: {
      imageUrl: country.flags.svg,
      imageAlt: country.flags.alt,
    },
  }))

  const questions: Question[] = mappedCountries.reduce((acc, _, i, countriesArr) => {
    const nextIndex = (i + 1) % countriesArr.length
    const questionOptions = [
      {
        id: countriesArr[i].id,
        name: countriesArr[i].capital,
      },
      {
        id: countriesArr[nextIndex].id,
        name: countriesArr[nextIndex].capital,
      },
      {
        id: countriesArr[(nextIndex + 1) % countriesArr.length].id,
        name: countriesArr[(nextIndex + 1) % countriesArr.length].capital,
      },
      {
        id: countriesArr[(nextIndex + 2) % countriesArr.length].id,
        name: countriesArr[(nextIndex + 2) % countriesArr.length].capital,
      },
    ].sort(() => Math.random() - 0.5)

    acc.push({
      title: `Which country is ${countriesArr[i].name} the capital?`,
      flag: countriesArr[i].flag,
      id: mappedCountries[i].id,
      options: questionOptions,
      correctOptionId: countriesArr[i].id,
    })
    return acc
  }, [] as Question[])

  return (
    <main className='flex items-center justify-center h-screen'>
      <Questions questions={questions} />
    </main>
  )
}
