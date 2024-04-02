import { Country } from '@/models/countries.model'

const REST_COUNTRIES_URL = 'https://restcountries.com/v3.1'

export const getCountries = async (fields?: string[]): Promise<Country[]> => {
  const url = new URL(`${REST_COUNTRIES_URL}/all`)
  if (fields?.length) url.searchParams.append('fields', fields.join(','))

  try {
    const response = await fetch(url.toString())
    if (!response.ok) throw new Error('Error fetching countries')
    const countries = await response.json()
    return countries
  } catch (error) {
    console.error(error)
    return []
  }
}
