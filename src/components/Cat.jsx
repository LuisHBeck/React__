import { useGetCat } from "../useGetCat";

export const Cat = () => {
	const {data, isLoading, refetchData} = useGetCat();

	if (isLoading) return <h1> loading... </h1>;


	return (
		<div>
			<button onClick={refetchData}> refetch </button>
			<h1>{data?.fact}</h1>
		</div>
	);
};
