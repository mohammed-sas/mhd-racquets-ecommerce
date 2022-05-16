const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };

    case "FETCHED":
      return {
        ...state,
        loading: false,
        items: payload,
        data: payload,
      };
    case "CATEGORIES":
      if (payload.isSelected) {
        return {
          ...state,
          categories: [
            ...state.categories,
            ...state.featuredCatgories,
            payload.category,
          ],
          [`show${payload.category}`]: true,
          featuredCatgories: [],
          currentPageNumber:0,
        };
      } else {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item != payload.category
          ),
          [`show${payload.category}`]: false,
          featuredCatgories: [],
          currentPageNumber:0,
        };
      }
    case "PRICE_RANGE":
      return {
        ...state,
        maxPrice: Number(payload),
        currentPageNumber:0,
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        highToLow: true,
        lowToHigh: false,
        currentPageNumber:0,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        lowToHigh: true,
        highToLow: false,
        currentPageNumber:0,
      };

    case "RATING":
      return {
        ...state,
        rating: payload,
        currentPageNumber:0,

      };
    case "UPDATE_PAGE":
      return{
        ...state,
        currentPageNumber:payload
      }

    case "CLEAR_FILTER":
      return {
        ...state,
        items: [...state.data],
        lowToHigh: false,
        highToLow: false,
        categories: [],
        showRacquet: false,
        showShuttleCock: false,
        showString: false,
        showShoe: false,
        maxPrice: 14000,
        rating: 0,
        featuredCatgories: [],
      };

    default:
      return state;
  }
};

export {filterReducer};