import axios from 'axios';
import type { PostSave, CategorySave, CategoryUpdate, PostUpdate, SigninForm } from '@/utils/types';

const JWT = sessionStorage.getItem('_token');

const config = {
  baseUrl: 'https://gomdolog.store/api/'
};

const client = axios.create({
  baseURL: config.baseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const clientWithJWT = axios.create({
  baseURL: config.baseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JWT}`
  }
});

function savePost(postData: PostSave) {
  return clientWithJWT.post(`post/new`, postData);
}

function fetchPost(postId: string | string[]) {
  return client.get(`post/${postId}`);
}

function deletePost(id: string[] | string) {
  return clientWithJWT.post(`post/delete/${id}`);
}

function deletePostPermanent(id: number) {
  return clientWithJWT.post(`post/deletePermanent/${id}`);
}

function revertPostDelete(id: number) {
  return clientWithJWT.post(`post/revertDelete/${id}`);
}

function updatePost(data: PostUpdate) {
  return clientWithJWT.post(`post/update`, data);
}

function fetchPostAll(pageSize: number) {
  return axios.get(`${config.baseUrl}post/all?size=` + pageSize);
}

function addViews(id: string) {
  return axios.post(`${config.baseUrl}post/${id}/views`);
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
  return clientWithJWT.get(`post/recycling`);
}

function saveCategory(data: CategorySave) {
  return clientWithJWT.post(`category/new`, data);
}

function fetchCategoryAll() {
  return axios.get(`${config.baseUrl}category/all`);
}

function deleteCategory(id: number) {
  return clientWithJWT.post(`category/delete/${id}`);
}

function updateCategory(data: CategoryUpdate) {
  return clientWithJWT.post(`category/update`, data);
}

function submitSigninForm(form: SigninForm) {
  return client.post(`auth/signin`, form);
}

function getRole(token: string) {
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.get(`${config.baseUrl}auth/getRole`, header);
}

function signup(email: string, password: string) {
  return client.post(`auth/signup`, {
    email: email,
    password: password
  });
}

function fetchTop5Post() {
  return clientWithJWT.get(`post/popular/top5`);
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
  revertPostDelete,
  addViews,
  submitSigninForm,
  getRole,
  fetchTop5Post,
  signup
};
