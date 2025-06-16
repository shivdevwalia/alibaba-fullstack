import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
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
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
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
} from "./actionTypes";

const token = localStorage.getItem("token") || "";
const username = localStorage.getItem("username") || "";
const initialState = {
  loadingSignin: false,
  loadingSignup: false,
  loadingChangePassword: false,
  successChangePassword: false,
  isAuth: !!token,
  token: token,
  username: username,
  errorSignin: null,
  errorSignup: null,
  errorChangePassword: null,
  role: localStorage.getItem("role") || null,
  products: [],
  loadingProducts: false,
  errorProducts: null,
  loadingAddProduct: false,
  errorAddProduct: null,
  loadingUpdateProduct: false,
  errorUpdateProduct: null,
  loadingDeleteProduct: false,
  errorDeleteProduct: null,

  loadingCart: false,
  cartItems: [],
  errorCart: null,
  loadingAddCartItem: false,
  errorAddCartItem: null,
  loadingUpdateCartItem: false,
  errorUpdateCartItem: null,
  loadingDeleteCartItem: false,
  errorDeleteCartItem: null,
  placingOrder: false,
  errorPlaceOrder: null,
  successPlaceOrder: false,
  loadingOrders: false,
  errorOrders: null,
  orders: [],

  aboutUs: null,
  loadingAboutUs: false,
  errorAboutUs: null,

  updatingAboutUs: false,
  errorUpdateAboutUs: null,
};
export const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, loadingSignup: true, errorSignup: null };

    case SIGNUP_SUCCESS:
      return { ...state, loadingSignup: false, errorSignup: null };

    case SIGNUP_FAILURE:
      return { ...state, loadingSignup: false, errorSignup: payload };

    case SIGNIN_REQUEST:
      return { ...state, loadingSignin: true, errorSignin: null };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        loadingSignin: false,
        errorSignin: null,
        token: payload.token,
        username: payload.user,
        role: payload.role,
        isAuth: true,
      };

    case SIGNIN_FAILURE:
      return { ...state, loadingSignin: false, errorSignin: payload };

    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loadingChangePassword: true,
        errorChangePassword: false,
        successChangePassword: false,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loadingChangePassword: false,
        errorChangePassword: false,
        successChangePassword: true,
      };

    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loadingChangePassword: false,
        errorChangePassword: payload,
        successChangePassword: false,
      };

    case SIGNOUT:
      return {
        ...state,
        loadingSignin: false,
        errorSignin: null,
        token: "",
        username: "",
        role: "",
        isAuth: false,
      };

    case GET_PRODUCTS_REQUEST:
      return { ...state, loadingProducts: true, errorProducts: null };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, loadingProducts: false, products: payload };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProducts: false,
        errorProducts: payload,
      };

    case ADD_PRODUCT_REQUEST:
      return { ...state, loadingAddProduct: true, errorAddProduct: null };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingAddProduct: false,
        products: [...state.products, payload],
      };

    case ADD_PRODUCT_FAILURE:
      return { ...state, loadingAddProduct: false, errorAddProduct: payload };

    case UPDATE_PRODUCT_REQUEST:
      return { ...state, loadingUpdateProduct: true, errorUpdateProduct: null };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingUpdateProduct: false,
        products: state.products.map((prod) =>
          prod._id === payload._id ? payload : prod
        ),
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loadingUpdateProduct: false,
        errorUpdateProduct: payload,
      };

    case DELETE_PRODUCT_REQUEST:
      return { ...state, loadingDeleteProduct: true, errorDeleteProduct: null };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingDeleteProduct: false,
        products: state.products.filter((prod) => prod._id !== payload),
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loadingDeleteProduct: false,
        errorDeleteProduct: payload,
      };

    case GET_CART_REQUEST:
      return { ...state, loadingCart: true, errorCart: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        loadingCart: false,
        cartItems: payload,
        errorCart: null,
      };
    case GET_CART_FAILURE:
      return { ...state, loadingCart: false, errorCart: payload };

    case ADD_CART_ITEM_REQUEST:
      return { ...state, loadingAddCartItem: true, errorAddCartItem: null };
    case ADD_CART_ITEM_SUCCESS:
      return { ...state, loadingAddCartItem: false, errorAddCartItem: null };
    case ADD_CART_ITEM_FAILURE:
      return { ...state, loadingAddCartItem: false, errorAddCartItem: payload };

    case UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        loadingUpdateCartItem: true,
        errorUpdateCartItem: null,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loadingUpdateCartItem: false,
        errorUpdateCartItem: null,
      };
    case UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        loadingUpdateCartItem: false,
        errorUpdateCartItem: payload,
      };

    case DELETE_CART_ITEM_REQUEST:
      return {
        ...state,
        loadingDeleteCartItem: true,
        errorDeleteCartItem: null,
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loadingDeleteCartItem: false,
        errorDeleteCartItem: null,
      };
    case DELETE_CART_ITEM_FAILURE:
      return {
        ...state,
        loadingDeleteCartItem: false,
        errorDeleteCartItem: payload,
      };

    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        placingOrder: true,
        errorPlaceOrder: null,
        successPlaceOrder: false,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        placingOrder: false,
        successPlaceOrder: true,
        errorPlaceOrder: null,
        cartItems: [],
      };

    case PLACE_ORDER_FAILURE:
      return {
        ...state,
        placingOrder: false,
        successPlaceOrder: false,
        errorPlaceOrder: payload,
      };

    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loadingOrders: true,
        errorOrders: null,
        orders: [],
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loadingOrders: false,
        orders: payload,
        errorOrders: null,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loadingOrders: false,
        errorOrders: payload,
      };

    case GET_ABOUTUS_REQUEST:
      return {
        ...state,
        loadingAboutUs: true,
        errorAboutUs: null,
      };

    case GET_ABOUTUS_SUCCESS:
      return {
        ...state,
        loadingAboutUs: false,
        aboutUs: payload,
        errorAboutUs: null,
      };

    case GET_ABOUTUS_FAILURE:
      return {
        ...state,
        loadingAboutUs: false,
        errorAboutUs: payload,
      };

    case UPDATE_ABOUTUS_REQUEST:
      return {
        ...state,
        updatingAboutUs: true,
        errorUpdateAboutUs: null,
      };

    case UPDATE_ABOUTUS_SUCCESS:
      return {
        ...state,
        updatingAboutUs: false,
        aboutUs: payload,
        errorUpdateAboutUs: null,
      };

    case UPDATE_ABOUTUS_FAILURE:
      return {
        ...state,
        updatingAboutUs: false,
        errorUpdateAboutUs: payload,
      };

    default:
      return state;
  }
};
