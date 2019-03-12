const data = [
  {
    country: "Group",
    status: true
  },
  {
    country: "Sweden",
    status: true
  },
  {
    country: "Finland",
    status: false
  },
  {
    country: "Denmark",
    status: true
  }
];
export const startPage = (state = { data: data }, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return { ...state };
    case "CHECKBOX_CHANGE":
      return {
        data: [
          ...state.data.map((item, j) => {
            if (j === action.key) {
              return { country: item.country, status: !item.status };
            } else {
              return { country: item.country, status: item.status };
            }
          })
        ]
      };

    default:
      return state;
  }
};
