const initialState = [];

export const performMember = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMEMBER": {
      console.log(action.payload.target);
      state = [
        ...state,
        {
          name: action.payload.target.name.value,
          amount: action.payload.target.amount.value,
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
