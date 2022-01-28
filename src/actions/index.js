export const addUser = (user) => {
  return {
    type: "ADDUSER",
    payload: user,
  };
};
