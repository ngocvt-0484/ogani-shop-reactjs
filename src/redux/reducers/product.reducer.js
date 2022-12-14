import {GET_HOME_PRODUCT, GET_HOME_PRODUCT_SUCCESS, GET_HOME_PRODUCT_FAIL, GET_TOP_PRODUCT_SUCCESS, GET_TOP_PRODUCT, GET_TOP_PRODUCT_FAIL, GET_DETAIL_PRODUCT, GET_DETAIL_PRODUCT_SUCCESS, GET_DETAIL_PRODUCT_FAIL, CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAIL} from "../constants"

const initialState = {
  featureProduct: [],
  lastestProduct: [],
  topRatedPRoduct: [],
  reviewProduct: [],
  product: {},
  isLoading: false,
  isError: false,
  error: [],
  totalProduct: 0
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_PRODUCT:
      return {
        ...state,
        isLoading: true
      }

    case GET_HOME_PRODUCT_SUCCESS:
      return {
        ...state,
        featureProduct: action.payload.featured,
        totalProduct: action.payload.totalProduct,
        isLoading: false
      };

    case GET_HOME_PRODUCT_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    }

    case GET_TOP_PRODUCT:
      return {
        ...state,
        isLoading: true
      }

    case GET_TOP_PRODUCT_SUCCESS:
      return {
        ...state,
        lastestProduct: action.payload.new,
        topRatedPRoduct: action.payload.top_rated,
        reviewProduct: action.payload.review,
        isLoading: false
      };

    case GET_TOP_PRODUCT_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    }

    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false
      }

    case GET_DETAIL_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }

    case CREATE_PRODUCT:
      return {
        ...state,
        isLoading: true
      }

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false
      }

      case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }

    default:
      return state;
  }
}
