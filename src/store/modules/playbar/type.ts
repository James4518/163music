export interface ICurrentSong {
  name: string;
  id: number;
  dt: number;
  ar: {
    name: string;
  }[];
  al: {
    name: string;
    picUrl: string;
  };
}
