export interface Image {
  id : number
  albumId : number
  thumbnailUrl : string
  url : string
  title : string
}

export interface IAlbum {
  id : number
  userId : number
  title : string
}