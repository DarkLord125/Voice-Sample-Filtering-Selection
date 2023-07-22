// One of the context providers
// every fetching action the user makes
export const actionType = {
    SET_GENDER_FILTER: "SET_GENDER_FILTER",
    SET_LANGUAGE_FILTER: "SET_LANGUAGE_FILTER",
    SET_ALL_VOICES: "SET_ALL_VOICES",
    SET_AGE_FILTER: "SET_AGE_FILTER",
};

const reducer = (state, action) => {
    // To know what kind of action is triggered
    console.log(action);

    // To know what type of action it is
    switch (action.type){

        case actionType.SET_ALL_VOICES:
            return{
                ...state,
                allVoices: action.allVoices,
            }

        case actionType.SET_GENDER_FILTER:
            return {
                ...state,
                genderFilter: action.genderFilter,
            };

        case actionType.SET_LANGUAGE_FILTER:
            return {
                ...state,
                languageFilter: action.languageFilter,
            };

        case actionType.SET_AGE_FILTER:
            return {
                ...state,
                ageFilter: action.ageFilter,
            };

        default:
            return state;
    }
};

export default reducer;