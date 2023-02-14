import useAppHelper from "@/use-app-helper";

import { Post } from "../../components";
import { TBody, TPostData, TUser } from "../../contracts.ts";

const List = () => {
  const { posts, users } = useAppHelper();

  const createDataForPosts: TPostData[] = posts?.map(
    ({ id, title, body, userId }: TBody) => {
      return {
        id,
        title,
        body,
        user: users.find((user: TUser) => user.id === userId),
      };
    }
  );

  return (
    <ul
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      {(createDataForPosts?.reverse() || [])?.map(
        ({ body, id, title, user }) => (
          <Post
            key={id || posts.length}
            id={id}
            title={title}
            body={body}
            user={user}
          />
        )
      )}
    </ul>
  );
};

export default List;
