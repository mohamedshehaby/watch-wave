interface QueryParams {
  key: string;
  value: string;
}
const fetcher = async (url: string, queryParams: QueryParams[]) => {
  const query = queryParams.reduce((acc, param) => {
    return `${acc}&${param.key}=${param.value}`;
  }, "");

  const response = await fetch(url + "?" + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 24 * 60 * 60,
    },
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  return await response.json();
};

export default fetcher;
