
export type introduceBoxProps = {
  title: string
  content: string
  nextLineContent?: string
  children: React.ReactNode
}

export type countUpCardProps = {
  boxTitle: string
  numOfPeople: number
  lastUnit: string
}

export type partIntroData = {
  tech: string
  text: string
}

export type newsData = {
  id: number
  title: string
  description: string
  image: string
}
export type project = {
  id: number
  name: string
  description: string
  theme: string[]
  github: string | null
  year: number
  member: string[]
  stack: string[]
  img: string
  release: string | null
}

export type scroll = {
  x: number
  y: number

}
