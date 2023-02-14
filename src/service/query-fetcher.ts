import type { TBody, TFetcher } from "../contracts.ts";

const baseURL = "https://jsonplaceholder.typicode.com";

const fetcher: TFetcher = async (url, method = "GET", body) => {
  const payload = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    method,
    body: body && JSON.stringify(body),
  };

  const response = await fetch(url, { ...payload });
  const data = await response.json();

  return data;
};

export function getPosts() {
  return fetcher(`${baseURL}/posts`);
}

export function getPostById(id?: number) {
  return fetcher(`${baseURL}/posts/${id}`);
}

export function getUsers() {
  return fetcher(`${baseURL}/users`);
}

export function deletePost(id?: number) {
  return fetcher(`${baseURL}/posts/${id}`, "DELETE");
}

export function updatePost(data: TBody, id?: number) {
  return fetcher(`${baseURL}/posts/${id}`, "PUT", data);
}

export function createPost(data: TBody) {
  return fetcher(`${baseURL}/posts/`, "POST", data);
}
