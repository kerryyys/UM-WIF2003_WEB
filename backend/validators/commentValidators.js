import Joi from "joi";

const postIdSchema = Joi.object({
  postId: Joi.string().required(),
});

const userIdSchema = Joi.object({
  userId: Joi.string().required(),
});

const commentIdSchema = Joi.object({
  commentId: Joi.string().required(),
});

const contentSchema = Joi.object({
  content: Joi.string().min(1).required(),
});

export const addCommentSchema = postIdSchema
  .concat(userIdSchema)
  .concat(contentSchema);

export const modifyCommentSchema = commentIdSchema.concat(contentSchema);

export const deleteCommentSchema = commentIdSchema;

export const likeCommentSchema = commentIdSchema.concat(userIdSchema);
