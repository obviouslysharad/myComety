const initialState = [];

export const performMember = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMEMBER": {
      action.payload.preventDefault();
      console.log("adduser", action.payload.target);
      state = [
        ...state,
        {
          name: action.payload.target.name.value,
          contact: action.payload.target.contact.value,
        },
      ];
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};
