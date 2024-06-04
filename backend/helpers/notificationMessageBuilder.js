// Sender and receiver uses userModel.js
export const buildApplyingMessage = (sender, receiver, project) => {
  console.log(receiver);
  const message = `${sender.username} has applied for your ${project.projectTitle}.`;
  return {
    userId: receiver,
    senderId: sender._id,
    message: message,
  };
};
