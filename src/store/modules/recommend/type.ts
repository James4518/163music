export interface IBanner {
  imageUrl: string;
  titleColor: string;
  typeTitle: string;
  url: string;
}
export interface IHotRecommends {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
}
export interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  img1v1Id_str: string;
}
export interface IAlbum {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  picUrl: string;
  publishTime: number;
  artist: Artist;
  artists: Artist[];
}
export interface IPlayList {
  id: number;
  name: string;
  coverImgUrl: string;
  playCount: number;
  trackCount: number;
  subscribedCount: number;
  description: string;
  tracks: [{ id: number; name: string }];
}
