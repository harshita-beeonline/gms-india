const getInitialState = () => {
  if (typeof window !== "undefined") {
    return {
      email: localStorage.getItem("email") || "",
      name: localStorage.getItem("name") || "",
      errors: {
        email: null,
        name: null,
      },
    };
  }

  return {
    email: "",
    name: "",
    errors: {
      email: null,
      name: null,
    },
  };
};

export default getInitialState;
