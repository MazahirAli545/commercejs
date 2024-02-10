import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings updated successfully");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Setting could not be updated");
    },
  });

  return { updateSetting, isUpdating };
}
