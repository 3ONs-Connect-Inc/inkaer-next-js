
import HeroSection from "./Hero";
import ProjectOverview from "./ProjectOverview";
import ModelViewerSection from "./ModelViewerSection";
import PdfViewerSection from "./PdfViewerSection";
import RequestInterviewSection from "./RequestInterviewSection";



export default function ViewPortfolio({ data }: { data: any }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <HeroSection candidate={data} data={data} />
   
      <main className="max-w-7xl mx-auto  padding py-12">
     
        <ProjectOverview overview={data.overview} />
        <ModelViewerSection stepUrl={data.stepUrl}/>
        <PdfViewerSection pdfUrl={data.pdfUrl} />
        <RequestInterviewSection videoUrl={data.videoUrl}/>
      </main>
    </div>
  );
}
