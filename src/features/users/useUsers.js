import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiAuth";

export default function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { users, isLoading };
}
