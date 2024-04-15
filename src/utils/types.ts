export interface Post {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  thumbnail: string;
  categoryTitle: string;
  tags: string[];
}

export interface DeletePost {
  id: number;
  title: string;
  deletedDate: string;
}

export interface PostPageResponse {
  content: Post[];
  numberOfElements: number;
  size: number;
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
