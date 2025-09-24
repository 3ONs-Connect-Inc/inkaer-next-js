
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import DOMPurify from "dompurify";
import { z } from "zod";
import { ApplicationSchema } from "@/schemas/ApplicationSchema";
import { uploadFileToR2 } from "@/utils/actions/r2Upload";


export type ApplicationData = z.infer<typeof ApplicationSchema>;

export async function submitApplication(jobId: string, data: ApplicationData) {
  // Upload resume to Cloudflare R2
  let resumeUrl: string;
  try {
    resumeUrl = await uploadFileToR2(data.resume, () => {});
  } catch (err: any) {
    throw new Error("Resume upload failed", err);
  }

  // Sanitize text fields
  const sanitizedCoverLetter = DOMPurify.sanitize(data.coverLetter || "");

  // Save metadata to Firestore
  const docRef = await addDoc(collection(db, "applications"), {
    jobId,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || null,
    coverLetter: sanitizedCoverLetter,
    resumeUrl,
    createdAt: serverTimestamp(),
  });

  return { id: docRef.id, resumeUrl };
}
