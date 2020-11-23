import { useState, useEffect } from 'react';

function useDB() {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		async function fetchData() {
			try	{
				const request = await fetch('./docs/db.json');
				const response = await request.json();
				await new Promise(res => setTimeout(res, 1000));
				setResponse(response);
			} catch(error) {
				setError(error);
			}
		}
		fetchData();
	}, []);

	return { response, error };
}

export default useDB;
