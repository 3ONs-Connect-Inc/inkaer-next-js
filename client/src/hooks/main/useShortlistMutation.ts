
import { ShortlistFormData, submitShortlist } from "@/utils/actions/shortlist";
import { useMutation } from "@tanstack/react-query";


export const useShortlistMutation = () => {
  return useMutation({
    mutationFn: (data: ShortlistFormData) => submitShortlist(data),
  });
};
    