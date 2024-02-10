import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isDeleting } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("User could not be deleted");
    },
  });

  return { deleteUser, isDeleting };
}
