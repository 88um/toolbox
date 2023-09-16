export interface Customer{
    id : String
    name : String
    username : String
    pfp? : string
}

export interface Account{
    id : string
    username : string
    name : string
    pfp : string
    inbox_message : string
    reply_message : string
    follower_message : string
    inbox_status : string
    reply_status : string
    follower_status : string
}