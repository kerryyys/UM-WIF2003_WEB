import Joi from "joi";

const titleSchema = Joi.string().required();
const contentSchema = Joi.string().required();
const postIdSchema = Joi.string().required();
const userIdSchema = Joi.string().required();

export const addPostSchema = Joi.object({
  title: titleSchema,
  content: contentSchema,
});

export const modifyPostSchema = Joi.object({
  postId: postIdSchema,
  title: titleSchema,
  content: contentSchema,
});

export const deletePostSchema = Joi.object({
  postId: postIdSchema,
});

export const likePostSchema = Joi.object({
  postId: postIdSchema,
  userId: userIdSchema,
});
