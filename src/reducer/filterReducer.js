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
        };
      } else {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item != payload.category
          ),
          [`show${payload.category}`]: false,
          featuredCatgories: [],
        };
      }
    case "PRICE_RANGE":
      return {
        ...state,
        maxPrice: Number(payload),
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        highToLow: true,
        lowToHigh: false,
      };
    case "LOW_TO_HIGH":
      return {
        ...state,
        lowToHigh: true,
        highToLow: false,
      };

    case "RATING":
      return {
        ...state,
        rating: payload,
      };

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