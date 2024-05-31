import Joi from "joi";

export const addCommentSchema = Joi.object({
  postId: Joi.string().required(),
  userId: Joi.string().required(),
  content: Joi.string().min(1).required(),
});

export const commentIdSchema = Joi.object({
  commentId: Joi.string().required(),
});

export const modifyCommentSchema = Joi.object({
  commentId: Joi.string().required(),
  content: Joi.string().min(1).required(),
});
