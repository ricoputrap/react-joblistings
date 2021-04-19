import { useEffect, useReducer } from "react"

const usePopulatedJobs = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'populateJobs',
        value: res
      })
    })
  }, []);

  return [state, dispatch];
}

export default usePopulatedJobs;