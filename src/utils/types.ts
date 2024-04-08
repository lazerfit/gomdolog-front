export interface PostResopnse {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  modifiedDate: string;
  thumbnail: string;
  views: number;
}

export interface PostSave {
  title: string;
  content: string;
}
