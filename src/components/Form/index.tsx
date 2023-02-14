import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import useAppHelper from "@/use-app-helper";

import type { TBody, TCreatePostType, TUser } from "../../contracts.ts";
import Button from "../Button";
import * as Style from "./styles";

export type TForm = {
  defaultValues: TCreatePostType;
  isEdit?: boolean;
  postId?: number;
  closeModal?: () => void;
};

const Form = ({ defaultValues, isEdit, postId, closeModal }: TForm) => {
  const { createNewPost, users, useUpdatePost, posts } = useAppHelper(postId);

  const updatePostById = useUpdatePost(posts, postId);
  const updatePost = (data: TBody) => {
    return updatePostById(data);
  };

  const selectOptions = users?.map((user: TUser) => {
    return {
      value: user.id,
      label: user.name,
    };
  });

  const { handleSubmit, register, control, reset, setValue } = useForm({
    defaultValues: { ...defaultValues },
  });

  React.useEffect(() => {
    if (defaultValues?.user?.value) {
      const { body, title, user } = defaultValues;
      setValue("body", body);
      setValue("title", title);
      setValue("user", user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  const submit = (data: TCreatePostType) => {
    const { title, body, user } = data;
    const newData = { title, body, userId: user?.value };
    const newDataEdited = { id: postId, title, body, userId: user?.value };

    if (isEdit) {
      updatePost(newDataEdited);
      closeModal?.();
    } else {
      createNewPost(newData);
    }
    reset();
  };

  return (
    <Style.Form onSubmit={handleSubmit(data => submit(data))}>
      <Style.ContainerUserField>
        <Controller
          control={control}
          name="user"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <Select
              ref={ref}
              isClearable
              options={selectOptions}
              value={value}
              name={name}
              styles={{
                control: baseStyles => ({
                  ...baseStyles,
                  backgroundColor: "#262626",
                  outline: "none",
                  color: "#fff",
                  border: " none",
                }),
                singleValue: provided => ({
                  ...provided,
                  color: "#ccc",
                }),
              }}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      </Style.ContainerUserField>

      <Style.Input
        {...register("title", { required: "This field is required" })}
        placeholder="Type your post title"
      />
      <Style.Textarea
        {...register("body", { required: "This field is required" })}
        placeholder="type your post"
      />
      <Button
        type="submit"
        text={isEdit ? "Edit your Post" : "Create a post"}
        gridArea="3/1/4/7"
      />
    </Style.Form>
  );
};

export default Form;
