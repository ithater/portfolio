import React from 'react';

import Header from '../Header/Header';
import Projects from '../Projects/Projects';


function Portfolio(props) {
	
	const {
		Spiner,
		projectsDB
	} = props;

	

	return (
		<> 	
			{
				projectsDB ? (
					<>
						<Header />
						<Projects projectsDB={projectsDB} />
					</>
				) : (
					<Spiner />
				)
			}
		</>
  );
}

export default Portfolio;
