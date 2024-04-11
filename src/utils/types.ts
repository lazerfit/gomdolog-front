export interface PostResopnse {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  thumbnail: string;
  categoryTitle: string;
  tags: string[];
}

export interface PostResopnseWithoutTags {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  thumbnail: string;
  categoryTitle: string;
}

export interface PostSave {
  title: string;
  content: string;
  categoryTitle: string;
  tags: string[];
}

export interface PostUpdate {
  title: string;
  content: string;
  categoryTitle: string;
  tags: string[];
  id: string | string[];
}

export interface CategorySave {
  title: string;
}

export interface CategoryResponse {
  id: number;
  title: string;
  isEditable: boolean;
}

export interface CategoryUpdate {
  id: number;
  title: string;
}
