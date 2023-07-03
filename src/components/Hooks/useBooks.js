import { useQuery } from "@tanstack/react-query";

const useBooks = () => {
  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      return data;
    },
  });

  return [books];
};

export default useBooks;
