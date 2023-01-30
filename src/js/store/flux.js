import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

const getState = ({ getStore, getActions, setStore }) => {
	return {
	// almacén
		store: {
		// almacenamos datos/variables ~ con un useState (pq hay que inicializarlad)
		jedi: [],
		planets: [],
		starships: [],
		favorites: []
		},
	// proveedores - los llamas con fetch
		actions: {
			// function: () => {function}, otra function...
			fetchJedi: () => {
				fetch('https://swapi.dev/api/people/', {
						method: "GET",
						headers: {"Content-Type": "application/json"}
						})
					.then((response) => response.json())
					.then((response) => setStore({jedi: response.results})
					)
					.catch((error) => console.log("error fatal" + error))
					console.log(getStore().jedi);
			},

			fetchPlanets: () => {				
				fetch('https://swapi.dev/api/planets/', {
						method: "GET",
						headers: {"Content-Type": "application/json"}
						})
					.then((response) => response.json())
					.then((response) => setStore({planets: response.results})
					)
					.catch((error) => console.log("error fatal" + error))
					console.log(getStore().planets);
			},

			fetchStarships: () => {				
				fetch('https://swapi.dev/api/starships/', {
						method: "GET",
						headers: {"Content-Type": "application/json"}
						})
					.then((response) => response.json())
					.then((response) => setStore({starships: response.results})
					)
					.catch((error) => console.log("error fatal" + error))
					console.log(getStore().starships);
			},
		}
	};
};

// con tech:

// {
// 				fetch('https://www.swapi.tech/api/people', {
// 						method: "GET",
// 						headers: {"Content-Type": "application/json"}
// 						})
// 					.then((response) => response.json())
// 					.then((response) => {setStore({jedi: response.results})
// 						for (let i = 1; i < response.results.length; i++) {
// 								fetch('https://www.swapi.tech/api/people/' + i)
// 								.then((response) => response.json())
// 								.then((response) => setStore({jediDetail: [...getStore().jediDetail, response.result.properties]}))
// 								.catch((error) => console.log("error fatal" + error))
// 						}}
// 					)
// 					.catch((error) => console.log("error fatal" + error))
// 					console.log(getStore().jediDetail);
// 			},

// fetchJedi: () => {
// 				fetch('https://www.swapi.dev/api/people', {
// 						method: "GET",
// 						headers: {"Content-Type": "application/json"}
// 						})
// 					.then((response) => response.json())
// 					.then((response) => setStore({jedi: response.results})
// 					)
// 					.catch((error) => console.log("error fatal" + error))
// 					console.log(getStore().jedi);
// 			}

export default getState;
