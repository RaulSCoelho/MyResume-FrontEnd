import React, {
  useCallback,
  createContext,
  useEffect,
  useState,
  useContext,
} from 'react'

import usePersistedState from 'hooks/usePersistedState'
import { Contents } from 'interfaces/translation'
import { Translate } from 'utils/Translate'

import { UserContext } from './UserContext'

interface TranslationContextType {
  language: string
  onToggleLanguage: () => void
  content: Contents
}

export const TranslationContext = createContext<TranslationContextType>(null)

interface Props {
  children?: React.ReactNode
}

export const TranslationProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = usePersistedState('lang', 'en')

  const { user } = useContext(UserContext)
  const userInfo = user.user.find(u => u.Lang === 'en')
  const qualifications = user.qualifications.filter(q => q.Lang === 'en')
  const experiences = user.experience.filter(exp => exp.Lang === 'en')
  const educations = user.education.filter(edu => edu.Lang === 'en')

  const enContents: Contents = {
    sideBar: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
    },
    about: {
      me: {
        title: 'About',
        content: userInfo.About,
      },
      qualifications: {
        title: 'Qualifications',
        qualificationsList: qualifications,
      },
      contact: {
        title: 'Contact',
        socialMedias: user.socialMedias,
      },
    },
    skills: {
      title: 'Skills',
      skillsList: user.skills,
    },
    experience: {
      title: 'Experience',
      experiences,
    },
    education: {
      title: 'Education',
      educations,
    },
  }
  const [ptBrContents, setPtBrContents] = useState<Contents>(null)

  useEffect(() => {
    function translateContent() {
      const translatedContents: Contents = {
        sideBar: {},
        about: {
          me: {},
          qualifications: {
            qualificationsList: [],
          },
          contact: {
            socialMedias: [],
          },
        },
        skills: {
          skillsList: [],
        },
        experience: {
          experiences: [],
        },
        education: {
          educations: [],
        },
      }
      Object.keys(enContents).forEach(key1 => {
        const subContent1 = enContents[key1]
        Object.keys(subContent1).forEach(async key2 => {
          const subContent2 = subContent1[key2]
          if (typeof subContent2 === 'string') {
            await Translate(subContent2, 'en', 'pt-BR').then(res => {
              translatedContents[key1][key2] = res.message
            })
          } else {
            Object.keys(subContent2).forEach(async key3 => {
              const subContent3 = subContent2[key3]
              if (Array.isArray(subContent3)) {
                subContent3.forEach(subContent4 => {
                  const newObj = {}
                  Object.keys(subContent4).forEach(async key4 => {
                    const subContent5 = subContent4[key4]
                    if (key3 === 'socialMedias') {
                      newObj[key4] = subContent5
                    } else {
                      await Translate(subContent5, 'en', 'pt-BR').then(res => {
                        newObj[key4] = res.message
                      })
                    }
                  })
                  translatedContents[key1][key2][key3].push(newObj)
                })
              } else {
                if (key2 === 'skillsList') {
                  const newObj = {}
                  Object.keys(subContent3).forEach(key4 => {
                    newObj[key4] = subContent3[key4]
                  })
                  translatedContents[key1][key2].push(newObj)
                } else if (typeof subContent3 === 'string') {
                  await Translate(subContent3, 'en', 'pt-BR').then(res => {
                    translatedContents[key1][key2][key3] = res.message
                  })
                } else {
                  const newObj = {}
                  Object.keys(subContent3).forEach(async key4 => {
                    const subContent4 = subContent3[key4]
                    if (key4 === 'Company') {
                      newObj[key4] = subContent4
                    } else {
                      await Translate(subContent4, 'en', 'pt-BR').then(res => {
                        newObj[key4] = res.message
                      })
                    }
                  })
                  translatedContents[key1][key2].push(newObj)
                }
              }
            })
          }
        })
      })
      return translatedContents
    }
    const content = translateContent()
    setPtBrContents(content)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onToggleLanguage = useCallback(() => {
    setLanguage(state => (state === 'en' ? 'pt-BR' : 'en'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const content = language === 'en' ? enContents : ptBrContents

  const contextData: TranslationContextType = {
    language,
    onToggleLanguage,
    content,
  }

  return (
    <TranslationContext.Provider value={contextData}>
      {content ? children : null}
    </TranslationContext.Provider>
  )
}
