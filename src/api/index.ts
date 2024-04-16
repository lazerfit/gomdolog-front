import axios from 'axios';
import type { PostSave, CategorySave, CategoryUpdate, PostUpdate } from '@/utils/types';

const config = {
  baseUrl: 'http://localhost:8080/api/'
};

function savePost(postData: PostSave) {
  return axios.post(`${config.baseUrl}post/new`, postData);
}

function fetchPost(postId: string | string[]) {
  return axios.get(`${config.baseUrl}post/${postId}`);
}

function deletePost(id: string[] | string) {
  return axios.post(`${config.baseUrl}post/delete/${id}`);
}

function deletePostPermanent(id: number) {
  return axios.post(`${config.baseUrl}post/deletePermanent/${id}`);
}

function revertPostDelete(id: number) {
  return axios.post(`${config.baseUrl}post/revertDelete/${id}`);
}

function updatePost(data: PostUpdate) {
  return axios.post(`${config.baseUrl}post/update`, data);
}

function fetchPostAll(pageSize: number) {
  return axios.get(`${config.baseUrl}post/all?size=` + pageSize);
}

function searchPostByTitle(q: string[] | string) {
  return axios.get(`${config.baseUrl}post/search`, {
    params: {
      q: q
    }
  });
}

function searchPostByCategory(q: string[] | string) {
  return axios.get(`${config.baseUrl}post/category`, {
    params: {
      title: q
    }
  });
}

function fetchPopularPost() {
  return axios.get(`${config.baseUrl}post/popular`);
}

function fetchDeletedPosts() {
  return axios.get(`${config.baseUrl}post/recycling`);
}

function saveCategory(data: CategorySave) {
  return axios.post(`${config.baseUrl}category/new`, data);
}

function fetchCategoryAll() {
  return axios.get(`${config.baseUrl}category/all`);
}

function deleteCategory(id: number) {
  return axios.post(`${config.baseUrl}category/delete/${id}`);
}

function updateCategory(data: CategoryUpdate) {
  return axios.post(`${config.baseUrl}category/update`, data);
}

export {
  savePost,
  fetchPost,
  saveCategory,
  deletePost,
  updatePost,
  fetchCategoryAll,
  fetchDeletedPosts,
  deleteCategory,
  updateCategory,
  fetchPostAll,
  fetchPopularPost,
  searchPostByTitle,
  searchPostByCategory,
  deletePostPermanent,
  revertPostDelete
};
