import React from 'react';

import useDB from './components/Hooks/useDB'

import Portfolio from './components/Portfolio/Portfolio';
import Spiner from './components/Spiner/Spiner';



function App() {
	const {
		response: projectsDB,
		error
	} = useDB();

  return (
		<>
			{
				error ? (
					<h1>error</h1>
				) : (
					<Portfolio projectsDB={projectsDB} Spiner={Spiner} />
				)
			}
		</>
  );
}

export default App;
