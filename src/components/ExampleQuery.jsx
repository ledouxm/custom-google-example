import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ExampleQuery = () => {
  const query = useQuery({
    queryKey: ["exampleQuery"],
    queryFn: () =>
      axios.get(
        "https://api.scaleserp.com/search?api_key=demo&search_type=news&q=pizza&location=United+States",
      ),
    select: (resp) => resp.data,
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError) return <div>Error</div>;
  if (!query.data) return <div>No data</div>;

  return (
    <div>
      <h1>Example Query</h1>
      <h2>New results</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {query.data.news_results.map((result, index) => (
          <div key={index}>
            {result.title} ({result.domain})
          </div>
        ))}
      </div>
      <h2>Full response</h2>
      <pre>{JSON.stringify(query.data, null, 2)}</pre>
    </div>
  );
};
