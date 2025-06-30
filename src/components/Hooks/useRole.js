// src/components/Hooks/useRole.js
import { useQuery } from "@tanstack/react-query";

const useRole = (email) => {
  const { data: roleData = {}, isLoading } = useQuery({
    queryKey: ["role", email],
    queryFn: async () => {
      const res = await fetch(`https://onlineeulogy.onrender.com/users/role/${email}`);
      return res.json();
    },
    enabled: !!email,
  });

  return [roleData.role, isLoading];
};

export default useRole;
