export const addUser = (user) => {
  return {
    type: "ADDUSER",
    payload: user,
  };
};
export const deleteUser = (id) => {
  return {
    type: "DELETEUSER",
    payload: id,
  };
};

export const addMember = (details) => {
  return {
    type: "ADDMEMBER",
    payload: details,
  };
};

export const paidOn = (paidOn) => {
  return {
    type: "PAID",
    payload: paidOn,
  };
};
