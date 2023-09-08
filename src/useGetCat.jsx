import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
	const { data, refetch, isLoading, error } = useQuery(["cat"], async () => {
		try {
			const response = await axios.get("https://catfact.ninja/fact");
			return response.data;
		} catch (err) {
			console.log(err);
			return null;
		}
	});

	const refetchData = () => {
		alert("Data Refetching");
		refetch();
	};

	if (error) {
		console.log(error);
	}

	return { data, refetchData, isLoading };
};
