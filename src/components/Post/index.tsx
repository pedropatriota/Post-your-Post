import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

import { TPostData } from "@/contracts.ts";
import useAppHelper from "@/use-app-helper";

import Button from "../Button";
import Modal from "../Modal";
import * as Style from "./styles";

const Post = ({ id, title, user, body }: TPostData) => {
  const [postId, setPostId] = React.useState<number>();
  const { useDeletePost } = useAppHelper(postId);

  const menuRef = React.useRef<{
    openModal: () => void;
    closeModal: () => void;
  }>(null);

  const deleteById = useDeletePost(id);

  const deletePost = () => {
    return deleteById();
  };

  const getId = (id?: number) => {
    setPostId(id);
    menuRef?.current?.openModal();
  };

  return (
    <>
      <Style.PostContainer>
        <div>
          <span>Author:</span>
          {user.name}
        </div>
        <div>
          <span>Title:</span>
          {title}
        </div>
        <div>
          <span>Post:</span>
          {body}
        </div>
        <div>
          <Button
            hasBg={false}
            text={<BsFillPencilFill />}
            onClick={() => getId(id)}
          />
          <Button
            hasBg={false}
            text={<BsFillTrashFill />}
            onClick={deletePost}
          />
        </div>
      </Style.PostContainer>
      <Modal ref={menuRef} postId={postId} userId={user.id} />
    </>
  );
};

export default Post;
