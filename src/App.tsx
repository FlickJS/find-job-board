import { useState } from 'react'
import NewForm from './components/forms/NewForm'
import ShowJobs from './components/panel/ShowJobs'

function App() {
  const [jobs, setJobs] = useState<object[]>([]);


  const addNewJob = (job: object) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };

  return (
    <>
      <div>
        <h1>Find Job Board</h1>
        <NewForm addNew={addNewJob}/>
        <ShowJobs elements={jobs}/>
      </div>
    </>
  )
}

export default App
