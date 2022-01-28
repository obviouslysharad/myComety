const initialState = [];

const addUser = (users = initialState, action) => {
  switch (action.type) {
    case "ADDUSER": {
      const randomId = Math.random().toString(36).substring(2, 10);
      const user = {};
      user.name = user.target[0].value;
      user.amount = user.target[1].value;
      users = [...users, { [randomId]: user }];
      return users;
    }
    default:
      return users;
  }
};
