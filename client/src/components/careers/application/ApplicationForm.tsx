import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import type z from "zod";
import  Link  from "next/link";
import { ApplicationSchema, useSubmitApplication } from "@/hooks/main/useApplications";

interface Props {  
  jobId: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File | null;
  agreedToTerms: boolean;
}

const ApplicationForm: React.FC<Props> = ({ jobId }) => {
  const { mutate, isPending } = useSubmitApplication(jobId);

  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // validate a single field dynamically
const validateField = (field: keyof FormState, value: any) => {
  // get the schema for just one field
  const singleFieldSchema = ApplicationSchema.shape[field] as z.ZodTypeAny;
  const result = singleFieldSchema.safeParse(value);

setErrors((prev) => ({
  ...prev,
  [field]: result.success ? "" : result.error.issues[0].message,
}));

};



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof FormState, value);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
    validateField("resume", file);
  };

  const handleCheckbox = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: checked }));
    validateField("agreedToTerms", checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = ApplicationSchema.safeParse(formData);
if (!parsed.success) {
  const fieldErrors: Record<string, string> = {};
  parsed.error.issues.forEach((err) => {
    const path = err.path[0] as string;
    fieldErrors[path] = err.message;
  });
  setErrors(fieldErrors);
  return;
}


    mutate(parsed.data, {
      onSuccess: () => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null,
          agreedToTerms: false,
        });
        setErrors({});
        if (fileInputRef.current) fileInputRef.current.value = ""; // clear file input
      },
    });
  };
  
  return (
    <>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900">
          <User className="w-5 h-5 text-blue-600" />
          Application Form  
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Names */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>First Name *</Label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                     required
                      placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Label>Last Name *</Label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                 required
                      placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label>Email Address*</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
                required
                      className="pl-10"
                      placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label>Phone Number *</Label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
                  required
                      className="pl-10"
                      placeholder="(555) 123-4567"
            />
          </div>

          {/* Resume */}
          <div>
            <Label>Resume/CV *</Label>
            <Input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              required
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-muted file:text-muted-foreground hover:file:bg-muted/80"
            />
               <p className="text-sm text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 10MB)
                  </p>
            {errors.resume && (
              <p className="text-sm text-red-500">{errors.resume}</p>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <Label>Cover Letter</Label>
            <Textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
            rows={5}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
           />
          </div>

          {/* Terms */}
                 <div className="space-y-1 leading-none ">
                <div className=" flex items-center gap-2">
                     <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={handleCheckbox}
            />
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to Inkaer&apos;s{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms and Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        *
                      </Label>
                </div>
                      <p className="text-xs text-muted-foreground">
                        You must agree to our terms and privacy policy to submit your application.
                      </p>
                    </div>
       
          {errors.agreedToTerms && (
            <p className="text-sm text-red-500">{errors.agreedToTerms}</p>
          )}

            
                <div className="flex xxs:flex-row flex-col gap-4 pt-6">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="flex-1"
                  >
                       {isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => window.history.back()}
                  >
                    Cancel
                  </Button>
                </div>
         
        </form>
      </CardContent>
    </>
  );
};

export default ApplicationForm;
