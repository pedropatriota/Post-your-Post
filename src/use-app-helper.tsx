import type { TBody } from "./contracts.ts";
import { queryHooks } from "./service";

const {
  usePosts,
  usePost,
  useCreatePost,
  useDeletePost,
  useUpdatePost,
  useUsers,
} = queryHooks;

const useAppHelper = (postId?: number) => {
  const { data: posts, isLoading: postsIsLoading } = usePosts();
  const { data: post, isLoading: postIsLoading } = usePost(postId);
  const { data: users, isLoading: usersIsLoading } = useUsers();

  const createPost = useCreatePost();

  const createNewPost = (data: TBody) => {
    return createPost(data);
  };

  const globalIsLoading = postIsLoading || postsIsLoading || usersIsLoading;

  return {
    posts,
    post,
    users,
    createNewPost,
    globalIsLoading,
    useDeletePost,
    useUpdatePost,
  };
};

export default useAppHelper;
