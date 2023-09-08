import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
	const {
		data: catFact,
		isLoading,
		refetch,
	} = useQuery(["cat"], async () => {
		try {
			const response = await axios.get("https://catfact.ninja/fact");
			return response.data;
		} catch (err) {
			console.log(err);
			return null;
		}
	});

	// const { data, isLoading, refetch } = useQuery(["cat"], () => {
	// 	return axios.get("https://catfact.ninja/fact/").then((response) => response.data);
	// });

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<h1>
			THIS IS THE HOME PAGE
			<p>{catFact?.fact}</p>
			<button onClick={refetch}> Refetch </button>
		</h1>
	);
};
