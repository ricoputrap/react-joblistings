import { createContext } from 'react';
import './App.css';
import usePopulatedJobs from './custom-hooks/usePopulatedJobs';
import Card from './reusable-components/Card';
import initialState from './state/initialState';
import reducer from './state/reducer';

export const MainContext = createContext();

function App() {
  const [state, dispatch] = usePopulatedJobs(reducer, initialState);

  return (
    <div className="App">
      <MainContext.Provider value={{ state, dispatch }}>
        { state.jobs.map(job => (
          <Card key={ job.id } isFeatured={ job.isFeatured }>
            { job.position }
          </Card>
        )) }
      </MainContext.Provider>
    </div>
  );
}

export default App;
