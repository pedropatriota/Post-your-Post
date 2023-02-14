import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import type { TBody } from "../contracts.ts";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  getUsers,
  updatePost,
} from "./query-fetcher";
import { queryKeys } from "./query-keys";

export const usePosts = () => {
  const fallback = "loading...";
  const { data = fallback, ...postsParams } = useQuery(
    [queryKeys.posts],
    () => getPosts(),
    {
      initialData: () => JSON.parse(localStorage.getItem("postData") || "{}"),
      refetchOnReconnect: !localStorage.getItem("postData"),
      refetchOnMount: !localStorage.getItem("postData"),
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      enabled: !localStorage.getItem("postData"),
    }
  );

  return { data, ...postsParams };
};

export const usePost = (id?: number) => {
  const fallback = "loading...";
  const { data = fallback, ...postParams } = useQuery(
    [queryKeys.post, id],
    () => getPostById(id),
    {
      enabled: Boolean(id),
    }
  );

  return { data, ...postParams };
};

export const useUsers = () => {
  const fallback = "loading...";
  const { data = fallback, ...usersParams } = useQuery(
    queryKeys.users,
    () => getUsers(),

    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  return { data, ...usersParams };
};

export const useUpdatePost = (
  posts: TBody[],
  postId?: number
): UseMutateFunction<unknown, unknown, TBody, unknown> => {
  const queryClientParams = useQueryClient();

  const postsClone = posts;
  const postIndex = (postsClone || [])?.findIndex(post => post?.id === postId);

  const updatePostCache = (newData: TBody): void => {
    postsClone.splice(postIndex, 1, newData);

    queryClientParams.setQueryData([queryKeys.posts], [...postsClone]);
  };

  const { mutate } = useMutation((body: TBody) => updatePost(body, postId), {
    onMutate: async (newData: TBody) => {
      queryClientParams.cancelQueries([queryKeys.posts]);
      const previousPostData: TBody | undefined =
        queryClientParams.getQueryData([queryKeys.posts]);

      updatePostCache(newData);

      return { previousPostData };
    },

    onError: (error, newData, context) => {
      if (context?.previousPostData) {
        updatePostCache(context.previousPostData);
      }
    },

    onSettled: () => {
      const postData = queryClientParams.getQueryData([queryKeys.posts]);
      localStorage.setItem("postData", JSON.stringify(postData));
    },
  });

  return mutate;
};

export const useCreatePost = (): UseMutateFunction<
  unknown,
  unknown,
  TBody,
  unknown
> => {
  const queryClientParams = useQueryClient();

  const { data: posts }: { data: TBody[] } = usePosts();

  const createPostCache = (newData: TBody): void => {
    queryClientParams.setQueryData([queryKeys.posts], [...posts, newData]);
  };

  const { mutate } = useMutation((body: TBody) => createPost(body), {
    onMutate: async (newData: TBody) => {
      queryClientParams.cancelQueries([queryKeys.posts]);
      const previousPostsData: TBody | undefined =
        queryClientParams.getQueryData([queryKeys.posts]);

      createPostCache(newData);

      return { previousPostsData };
    },

    onError: (error, newData, context) => {
      if (context?.previousPostsData) {
        createPostCache(context.previousPostsData);
      }
    },

    onSettled: () => {
      const postData = queryClientParams.getQueryData([queryKeys.posts]);
      localStorage.setItem("postData", JSON.stringify(postData));
    },
  });

  return mutate;
};

export const useDeletePost = (
  postId?: number
): UseMutateFunction<unknown, unknown, void> => {
  const queryClientParams = useQueryClient();

  const { data: posts }: { data: TBody[] } = usePosts();

  const newPostsData = posts?.filter(post => post.id !== postId);

  const createPostCache = (): void => {
    queryClientParams.setQueryData([queryKeys.posts], newPostsData);
  };

  const { mutate } = useMutation(() => deletePost(postId), {
    onMutate: async () => {
      queryClientParams.cancelQueries([queryKeys.posts]);
      const previousPostsData = queryClientParams.getQueryData([
        queryKeys.posts,
      ]);

      createPostCache();

      return { previousPostsData };
    },

    onError: (error, newData, context) => {
      if (context?.previousPostsData) {
        createPostCache();
      }
    },

    onSettled: () => {
      const postData = queryClientParams.getQueryData([queryKeys.posts]);
      localStorage.setItem("postData", JSON.stringify(postData));
    },
  });

  return mutate;
};
