import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_CART_ITEM_FAILURE,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ABOUTUS_REQUEST,
  GET_ABOUTUS_SUCCESS,
  GET_ABOUTUS_FAILURE,
  UPDATE_ABOUTUS_REQUEST,
  UPDATE_ABOUTUS_SUCCESS,
  UPDATE_ABOUTUS_FAILURE,
  SUBMIT_CONTACT_REQUEST,
  SUBMIT_CONTACT_SUCCESS,
  SUBMIT_CONTACT_FAILURE,
} from "./actionTypes";

export const signup = (payload) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE, payload: err.message });
  }
};
export const signin = (payload) => async (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    // Check if login was successful
    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user);
      localStorage.setItem("role", data.role);
      dispatch({ type: SIGNIN_SUCCESS, payload: data });
    } else {
      // Handle failed login (e.g. wrong password)
      const message = data.message || "Invalid credentials";
      dispatch({ type: SIGNIN_FAILURE, payload: message });
      throw new Error(message); // makes .catch() in component work
    }
  } catch (err) {
    dispatch({ type: SIGNIN_FAILURE, payload: err.message });
    throw err;
  }
};

export const forgotPassword = (payload) => async (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      // If the backend returns 400/404, treat as failure
      throw new Error(data.message || "Failed to reset password");
    }

    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CHANGE_PASSWORD_FAILURE, payload: err.message });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  dispatch({ type: SIGNOUT });
};

const getToken = () => localStorage.getItem("token");
export const getProducts = (category) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const url = category
      ? `${import.meta.env.VITE_API_BASE_URL}/dashboard?category=${encodeURIComponent(
          category
        )}`
      : `${import.meta.env.VITE_API_BASE_URL}/dashboard`;

    const res = await fetch(url, {
      headers: {
        Authorization: getToken(),
      },
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message });
  }
};

// export const getProductsUser =
//   ({ category = "", q = "" }) =>
//   async (dispatch) => {
//     dispatch({ type: GET_PRODUCTS_REQUEST });
//     try {
//       const params = new URLSearchParams();
//       if (category) params.append("category", category);
//       if (q) params.append("q", q);

//       const url = 
//       const res = await fetch(url);
//       if (!res.ok) throw new Error("Failed to fetch products");
//       const data = await res.json();

//       dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
//     } catch (err) {
//       dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message });
//     }
//   };

export const getProductsUser =
  ({ category = "", q = "", sort = "" }) =>
  async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    try {
      const params = new URLSearchParams();
      if (category) params.append("category", category);
      if (q) params.append("q", q);
      if (sort) params.append("sort", sort); // ✅ add this

      const url = `${import.meta.env.VITE_API_BASE_URL}/products?${params.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message });
    }
  };

export const addProductAdmin = (product) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error("Failed to add product");
    const data = await res.json();
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_PRODUCT_FAILURE, payload: err.message });
  }
};

export const updateProductAdmin = (id, payload) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to update product");
    const data = await res.json();
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: err.message });
  }
};

export const deleteProductAdmin = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dashboard/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: getToken(),
      },
    });
    if (!res.ok) throw new Error("Failed to delete product");
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: err.message });
  }
};

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
      headers: {
        Authorization: getToken(),
      },
    });
    if (!res.ok) throw new Error("Failed to fetch cart");
    const data = await res.json();
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_FAILURE, payload: err.message });
  }
};

export const addCartItem =
  (productId, qty = 1) =>
  async (dispatch) => {
    dispatch({ type: ADD_CART_ITEM_REQUEST });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
        body: JSON.stringify({ productId, qty }),
      });
      if (!res.ok) throw new Error("Failed to add item to cart");
      await res.text();

      dispatch({ type: ADD_CART_ITEM_SUCCESS });
      dispatch(getCart()); // refresh cart after add/update
    } catch (err) {
      dispatch({ type: ADD_CART_ITEM_FAILURE, payload: err.message });
    }
  };

// Update Cart Item Quantity
export const updateCartItem = (productId, payload) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/update/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(payload),
    });
    console.log(res);
    if (!res.ok) throw new Error("Failed to update cart item");
    await res.text();

    dispatch({ type: UPDATE_CART_ITEM_SUCCESS });
    dispatch(getCart());
  } catch (err) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: err.message });
  }
};

export const deleteCartItem = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/delete/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: getToken(),
      },
    });
    if (!res.ok) throw new Error("Failed to delete cart item");
    await res.text();

    dispatch({ type: DELETE_CART_ITEM_SUCCESS });
    dispatch(getCart());
  } catch (err) {
    dispatch({ type: DELETE_CART_ITEM_FAILURE, payload: err.message });
  }
};

export const placeOrder = (orderItems, totalAmount) => async (dispatch) => {
  dispatch({ type: PLACE_ORDER_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/orders/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify({ orderItems, totalAmount }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to place order");
    }

    dispatch({ type: PLACE_ORDER_SUCCESS, payload: data.order });
  } catch (err) {
    dispatch({ type: PLACE_ORDER_FAILURE, payload: err.message });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/orders`, {
      headers: {
        Authorization: getToken(),
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch orders");
    }

    dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
  } catch (err) {
    dispatch({ type: GET_ORDERS_FAILURE, payload: err.message });
  }
};

export const getAboutUs = () => async (dispatch) => {
  dispatch({ type: GET_ABOUTUS_REQUEST });
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/aboutus`);
    if (!res.ok) throw new Error("Failed to fetch About Us");
    const data = await res.json();
    console.log("mydata", data);
    dispatch({ type: GET_ABOUTUS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ABOUTUS_FAILURE, payload: err.message });
  }
};

export const updateAboutUs = (id, payload) => async (dispatch) => {
  dispatch({ type: UPDATE_ABOUTUS_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/aboutus/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Failed to update About Us");
    }

    const data = await res.json();
    dispatch({ type: UPDATE_ABOUTUS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: UPDATE_ABOUTUS_FAILURE, payload: err.message });
  }
};

export const submitContact = (payload) => async (dispatch) => {
  dispatch({ type: SUBMIT_CONTACT_REQUEST });

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send contact message");
    }

    dispatch({ type: SUBMIT_CONTACT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SUBMIT_CONTACT_FAILURE, payload: err.message });
  }
};
