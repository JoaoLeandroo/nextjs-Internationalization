import 'server-only'
 
const dictionaries = {
  en: () => import('../../../public/dictionaries/en.json').then((module) => module.default),
  pt: () => import('../../../public/dictionaries/pt.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()