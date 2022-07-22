export type ReviewObj = {
  id: string,
  text: string,
  sender: {
    name: string,
    id: string
  },
  date: string
  rating: number
  likes: number,
  comments: number
}

export type ReplyObj = {
  id: string,
  text: string,
  sender: {
    name: string,
    id: string
  },
  date: string
}