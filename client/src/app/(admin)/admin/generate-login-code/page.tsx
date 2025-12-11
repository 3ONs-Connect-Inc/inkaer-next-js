import GenerateUrl from "@/components/admin/users/GenerateUrl";

const GenerateUrlPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Generate Unique Login Code</h1>
      <GenerateUrl />
    </div>
  );
};

export default GenerateUrlPage;
