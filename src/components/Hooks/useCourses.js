import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
  const { data: { courses } = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        "https://onlineeulogy.onrender.com/courses"
      );
      const data = await res.json();
      return data;
    },
  });

  return [{ courses }];
};

export default useCourses;
