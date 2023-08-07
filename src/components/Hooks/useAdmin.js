import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://e-learning-server-hazel.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
