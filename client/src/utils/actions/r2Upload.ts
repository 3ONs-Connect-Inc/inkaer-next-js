import { toast } from "sonner";

export const uploadFileToR2 = async (file: File, setIsLoading: (loading: boolean) => void): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  let toastId: any; 

  try {
    setIsLoading(true);
    toastId = toast.loading("Uploading file please wait..."); 

    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_URL}/upload`, { 
      method: 'POST',
      body: formData,
    });  
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`File upload failed: ${errorText}`);
      throw new Error("File upload to R2 failed");
    }  

    const data = await response.json();

    toast.dismiss(toastId);  
    toast.success("File uploaded successfully!");
    return data.url; 
  } catch (error) {
    console.error("File upload failed:", error);
    if (toastId) toast.dismiss(toastId);  
    toast.error("Failed to upload to Cloudflare R2");
    throw error;
  } finally {
    setIsLoading(false);  
  }
};