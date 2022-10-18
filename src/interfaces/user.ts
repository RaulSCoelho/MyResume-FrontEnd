export interface User {
  id: number
  User_id: number
  Lang: string
  FirstName: string
  LastName: string
  PhoneNumber: string
  Email: string
  CPF: string
  BirthDate: string
  Citizenship: string
  MaritalStatus: string
  About: string
}

export interface Address {
  id: number
  User_id: number
  City: string
  Complement: string
  Country: string
  neighborhood: string
  State: string
  Street: string
  StreetNumber: string
  ZipCode: string
}

export interface Education {
  id: number
  User_id: number
  College: string
  Course: string
  Description: string
  Lang: string
  Period: string
  Shift: string
}

export interface Experience {
  id: number
  User_id: number
  Company: string
  Description: string
  Lang: string
  Location: string
  Occupation: string
  Period: string
}

export interface Qualification {
  id: number
  User_id: number
  Lang: string
  Qualification: string
}

export interface Skill {
  id: number
  User_id: number
  Skill: string
}

export interface SocialMedia {
  id: number
  User_id: number
  Name: string
  Link: string
}

export interface UserResponse {
  user: User[]
  address: Address
  education: Education[]
  experience: Experience[]
  qualifications: Qualification[]
  skills: Skill[]
  socialMedias: SocialMedia[]
}
