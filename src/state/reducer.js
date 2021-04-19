const reducer = (state, action) => {
  switch (action.type) {
    case 'populateJobs':
      const allJobs = action.value;
      
      return {
        ...state,
        jobs: allJobs
      }

    default:
      return state;
  }
}

export default reducer;