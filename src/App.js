import { createContext, useEffect, useReducer } from 'react';
import './App.css';
import Card from './reusable-components/Card';
import initialState from './state/initialState';
import reducer from './state/reducer';

export const MainContext = createContext();

function App() {
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

  return (
    <div className="App">
      <MainContext.Provider value={{ state, dispatch }}>
        { state.jobs.map(job => (
          <Card key={ job.id } isFeatured={ job.isFeatured }>
            { job.position }
          </Card>
        )) }
        <Card>
          CARD
        </Card>
      </MainContext.Provider>
    </div>
  );
}

export default App;
