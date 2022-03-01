const initialState = [];

export const performUser = (users = initialState, action) => {
  switch (action.type) {
    case "ADDUSER": {
      action.payload.payload.preventDefault();
      const randomId = Math.random().toString(36).substring(2, 10);
      const name = action.payload.payload.target[0].value;
      const amount = action.payload.payload.target[1].value;
      const paidOn = action.payload.payload.target[1].value;
      users = [...users, { randomId, name, amount, paidOn }];
      action.payload.cometyModel(false);
      return users;
    }
    case "DELETEUSER": {
      users = users.filter((user) => user.id !== action.payload);
      return users;
    }
    case "PAID":{
      users = [...users, ]
    }
    default:
      return users;
  }
};
