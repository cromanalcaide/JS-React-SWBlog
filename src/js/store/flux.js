const getState = ({ getStore, getActions, setStore }) => {
	return {
	// almacén
		store: {
		// almacenamos datos/variables ~ con un useState (pq hay que inicializarlad)
		jedi: [],
		jediDetail: [],
		planets: [],
		vehicles: [],
		favorites: []
		},
	// proveedores - los llamas con fetch
		actions: {
			// function: () => {function}, otra function...
			fetchJedi: () => {
				fetch('https://www.swapi.tech/api/people', {
						method: "GET",
						headers: {"Content-Type": "application/json"}
						})
					.then((response) => response.json())
					.then((response) => {setStore({jedi: response.results})
						for (let i = 1; i < response.results.length; i++) {
								fetch('https://www.swapi.tech/api/people/' + i)
								.then((response) => response.json())
								.then((response) => setStore({jediDetail: [...getStore().jediDetail, response.result.properties]}))
								.catch((error) => console.log("error fatal" + error))
						}}
					)
					.catch((error) => console.log("error fatal" + error))
					console.log(getStore().jediDetail);
			},
		


			// fetchJediDetail: async() => {
			// 	console.log("Hola mundo")
			// 	// getActions().fetchJedi() // te permite acceder a otras funciones dentro de flux.js
			// 	const store = await getStore().jedi // embellecer el código
			// 	console.log(store.jedi)
			// 	for (let i = 1; i < store.length; i++) {
			// 		// console.log(i)
			// 		await fetch('https://www.swapi.tech/api/people/' + i)
			// 		const response = await response.json()
			// 		const data = await setStore({jediDetail: response.result})
			// 		// .then((response) => response.json())
			// 		// .then((response) => setStore({jediDetail: response.result}))
			// 		// .catch((error) => console.log("error fatal" + error))
			// 	}
			// }

		}
	};
};

export default getState;
