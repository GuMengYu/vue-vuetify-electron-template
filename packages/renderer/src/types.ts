export interface Account {
  profile: {
    userName: string
    userId: number
    userType: number
    vipType: number
    nickname: string
    signature: string
    avatarUrl: string
  }
  account?: {
    vipType: string
    id: number
    userName: string
  }
  token?: string
}
