export type Thread = {
  contactName: string
  contactTitle: string,
  recentMessagesCount: number,
  threadId: string
}

export type MessageObj = {
  id: string,
  messageText: string,
  sender: {
    name: string,
    id: string
  },
  date: string
}