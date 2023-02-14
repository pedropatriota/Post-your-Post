import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { TBody, TUser } from "../../contracts.ts";
import useApiHelper from "../../use-app-helper";
import Form from "../Form";
import * as Style from "./styles";

export type TModal = {
  postId?: number;
  userId?: number;
};

// eslint-disable-next-line react/display-name
const Modal = React.forwardRef(({ postId, userId }: TModal, ref) => {
  const { users, posts } = useApiHelper(postId);

  const getPostData = posts?.find((post: TBody) => post.id === postId);

  const [openModal, setOpenModal] = React.useState(false);

  const menuRef = React.useRef(null);

  const userData = users?.find((user: TUser) => user?.id === userId);

  const defaultValues = {
    body: getPostData?.body,
    user: { value: userData?.id, label: userData?.name },
    title: getPostData?.title,
  };

  React.useImperativeHandle(ref, () => ({
    openModal() {
      setOpenModal(true);
    },
    closeModal() {
      setOpenModal(false);
    },
  }));

  return (
    <Style.Container ref={menuRef} isOpen={openModal}>
      <Style.ModalContent>
        <Style.ModalHeader>
          <p>Update your post</p>
          <Style.CloseIcon
            aria-hidden="true"
            onClick={() => setOpenModal(false)}
          >
            <AiOutlineClose />
          </Style.CloseIcon>
        </Style.ModalHeader>
        <Form
          isEdit
          defaultValues={defaultValues}
          postId={postId}
          closeModal={() => setOpenModal(prev => !prev)}
        />
      </Style.ModalContent>
    </Style.Container>
  );
});

export default Modal;
