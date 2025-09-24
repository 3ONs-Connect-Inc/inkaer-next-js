
import { useMutation } from "@tanstack/react-query";
import {
  submitApplication,
  type ApplicationData,
} from "@/firebase/main/applicationService";
import { toast } from "sonner";
import { ApplicationSchema } from "@/schemas/ApplicationSchema";


export function useSubmitApplication(jobId: string) {
  return useMutation({
    mutationFn: (data: ApplicationData) => submitApplication(jobId, data),
    onSuccess: () => {
      toast.success("Application submitted! We’ll review it soon.");
    },
    onError: (err: any) => {
      toast.error(err.message || "Something went wrong.");
    },
  });
}

export { ApplicationSchema };
