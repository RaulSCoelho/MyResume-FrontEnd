import {
  Education,
  Experience,
  Qualification,
  Skill,
  SocialMedia,
} from './user'

export interface Language {
  name: string
  code: string
  native_name: string
  en_name: string
}

export interface Contents {
  sideBar: {
    about?: string
    skills?: string
    experience?: string
  }
  about: {
    me: {
      title?: string
      content?: string
    }
    qualifications: {
      title?: string
      qualificationsList: Qualification[]
    }
    contact: {
      title?: string
      socialMedias: SocialMedia[]
    }
  }
  skills: {
    title?: string
    skillsList: Skill[]
  }
  experience: {
    title?: string
    experiences: Experience[]
  }
  education: {
    title?: string
    educations: Education[]
  }
}
