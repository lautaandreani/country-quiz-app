export interface Country {
  name: CountryName
  capital: string[]
  flags: CountryFlag
}

interface CountryFlag {
  png: string
  svg: string
  alt: string
}

interface CountryName {
  common: string
  official: string
  nativeName: CountryNativeName
}

interface CountryNativeName {
  ell: CountryEll
  tur: CountryTur
}

interface CountryEll {
  official: string
  common: string
}

interface CountryTur {
  official: string
  common: string
}
