

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowLeft, TrendingUp, Clock, Users, CheckCircle, Quote } from 'lucide-react';
// import { Metadata } from 'next';
// import  Link  from 'next/link';


// export const metadata: Metadata = {
//   title: "Utter Vision Case Study – Inkaer",
//   description:
//     "Discover how Utter Vision scaled their team 3x faster using Inkaer’s verified engineering talent. Achieving 60% faster hiring, 95% success rate, and 12 new hires.",
//   openGraph: {
//     title: "Utter Vision Case Study – Inkaer",
//     description:
//       "How Utter Vision scaled their team 3x faster with Inkaer's verified engineering talent.",
//     type: "article",
//     url: "https://inkaer.com/case-studies/utter-vision",
//     images: [
//       {
//         url: "/images/case-studies/utter-vision-hero.jpg", // 🔹 Replace with real OG image
//         width: 1200,
//         height: 630,
//         alt: "Utter Vision Case Study",
//       },
//     ],
//   },
// };


// const CaseStudyUtterVision: React.FC = () => {
 
//   return (
//     <div className="min-h-screen bg-white">
     
      
//       <main className="py-16">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <Link href="/" className="inline-flex items-center text-small hover:text-gray-900 mb-8">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Home
//             </Link>
            
//             <div className="text-center">
//               <h1 className="text-bold-5xl  mb-6">
//                 Utter Vision Case Study
//               </h1>
//               <p className="desc mb-8">
//                 How Utter Vision scaled their team 3x faster with Inkaer's verified talent
//               </p>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//                 <div className="text-center">
//                   <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-4">
//                     <Clock className="sm:h-8 sm:w-8 sm:h-6 sm:w-6 h-4 w-4 text-blue-600" />
//                   </div>
//                   <div className="text-xl sm:text-3xl font-bold text-blue-600">60%</div>
//                   <div className="text-small">Faster Hiring Process</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mx-auto mb-4">
//                     <TrendingUp className="sm:h-8 sm:w-8 sm:h-6 sm:w-6 h-4 w-4 text-orange-500" />
//                   </div>
//                   <div className="text-xl sm:text-3xl font-bold text-orange-500">95%</div>
//                   <div className="text-small">Hire Success Rate</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="flex items-center justify-center sm:h-16 sm:w-16 h-12 w-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-4">
//                     <Users className="sm:h-8 sm:w-8 sm:h-6 sm:w-6 h-4 w-4 text-blue-400" />
//                   </div>
//                   <div className="text-xl sm:text-3xl font-bold text-blue-400">12</div>
//                   <div className="text-small">Team Members Hired</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Company Overview */}
//         <section className="py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <Card className="bg-white shadow-sm border border-gray-200">
//               <CardHeader>
//                 <CardTitle className="flex items-center text-xl font-semibold text-foreground  xs:text-2xl">
//                   <div className="sm:h-12 sm:w-12 h-10 w-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4">
//                     <TrendingUp className="sm:h-6 sm:w-6 h-4 w-4 text-blue-600" />
//                   </div>
//                   About Utter Vision
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <p className="text-small leading-relaxed">
//                   <strong className="text-gray-900">CEO:</strong> Sahand Vafaei
//                 </p>
//                 <p className="text-small leading-relaxed">
//                   <strong className="text-gray-900">Industry:</strong> Technology & Innovation
//                 </p>
//                 <p className="text-small leading-relaxed">
//                   <strong className="text-gray-900">Challenge:</strong> Utter Vision needed to rapidly scale their 
//                   non-engineering team with verified, high-quality talent while maintaining their high standards 
//                   for team culture and performance.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         {/* The Challenge */}
//         <section className="bg-gray-50 py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <h2 className="text-bold-3xl mb-8">The Challenge</h2>
//             <div className="prose prose-lg max-w-none">
//               <p className="desc leading-relaxed mb-6">
//                 As Utter Vision experienced rapid growth, CEO Sahand Vafaei faced a critical challenge: 
//                 scaling their team quickly without compromising on quality. Traditional hiring methods 
//                 were too slow and unreliable for their aggressive growth targets.
//               </p>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                   <span className="base-text ">Lengthy interview processes slowing down hiring</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                   <span className="base-text">Difficulty verifying candidate skills and experience</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                   <span className="base-text ">High risk of mis-hires in critical positions</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                   <span className="base-text">Need for specialized talent beyond engineering roles</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* The Solution */}
//         <section className="py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <h2 className="text-bold-3xl  mb-8">The Inkaer Solution</h2>
//             <div className="space-y-6">
//               <p className="base-text leading-relaxed">
//                 Inkaer provided Utter Vision with access to a curated pool of pre-verified candidates, 
//                 each with comprehensive skill assessments and portfolio verification. This allowed 
//                 Sahand's team to focus on cultural fit rather than spending weeks verifying technical capabilities.
//               </p>
              
//               <Card className="bg-white shadow-sm border border-gray-200">
//                 <CardContent className="p-6">
//                   <h3 className="desc-bold mb-4">Key Implementation Steps:</h3>
//                   <ol className="space-y-3">
//                     <li className="flex items-start">
//                       <span className="flex items-center justify-center sm:h-6 sm:w-6 h-4 w-4 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
//                       <span className="base-text">Defined specific role requirements and cultural values</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="flex items-center justify-center sm:h-6 sm:w-6 h-4 w-4 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
//                       <span className="base-text">Accessed Inkaer's verified candidate database</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="flex items-center justify-center sm:h-6 sm:w-6 h-4 w-4 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
//                       <span className="base-text">Streamlined interview process focusing on team fit</span>
//                     </li>
//                     <li className="flex items-start">
//                       <span className="flex items-center justify-center sm:h-6 sm:w-6 h-4 w-4 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
//                       <span className="base-text">Scaled team with confidence and speed</span>
//                     </li>
//                   </ol>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* Results */}
//         <section className="bg-gray-50 py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <h2 className="text-bold-3xl  mb-8">The Results</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card className="bg-white shadow-sm border border-gray-200">
//                 <CardContent className="p-6">
//                   <h3 className="desc-bold mb-4">Quantitative Impact</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-center">
//                       <TrendingUp className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3" />
//                       <span className="text-small">60% reduction in time-to-hire</span>
//                     </li>
//                     <li className="flex items-center">
//                       <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-blue-600 mr-3" />
//                       <span className="text-small">95% successful placement rate</span>
//                     </li>
//                     <li className="flex items-center">
//                       <Users className="sm:h-5 sm:w-5 h-4 w-4 text-blue-400 mr-3" />
//                       <span className="text-small">12 high-quality hires in 6 months</span>
//                     </li>
//                     <li className="flex items-center">
//                       <Clock className="sm:h-5 sm:w-5 h-4 w-4 text-blue-600 mr-3" />
//                       <span className="text-small">80% less time spent on screening</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
              
//               <Card className="bg-white shadow-sm border border-gray-200">
//                 <CardContent className="p-6">
//                   <h3 className="desc-bold mb-4">Qualitative Benefits</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-start">
//                       <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-small">Higher confidence in hiring decisions</span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-small">Improved team culture and collaboration</span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-small">Reduced risk of costly mis-hires</span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckCircle className="sm:h-5 sm:w-5 h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-small">Enhanced company reputation as an employer</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* Testimonial */}
//         <section className="py-16">
//           <div className="mx-auto max-w-4xl padding">
//             <Card className="bg-gradient-to-br from-blue-50 to-orange-50 border-blue-200">
//               <CardContent className="p-8">
//                 <Quote className="sm:h-12 sm:w-12 h-10 w-10 text-blue-600 mb-6" />
//                 <blockquote className="desc-bold mb-6 leading-relaxed">
//                   "Inkaer transformed our hiring process completely. Instead of spending weeks trying to 
//                   verify if candidates could do the job, we could focus on whether they were the right 
//                   fit for our culture. The verification reports gave us confidence that every candidate 
//                   we interviewed was already proven. It's not just about hiring faster - it's about 
//                   hiring smarter."
//                 </blockquote>
//                 <cite className="text-small">
//                   <strong className="text-gray-900">Sahand Vafaei</strong><br />
//                   CEO, Utter Vision
//                 </cite>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//       </main>
      
//       {/* CTA */}
//       <section className="py-16 bg-blue-600 text-white">
//           <div className="mx-auto max-w-4xl padding text-center">
//             <h2 className="text-xl sm:text-3xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
//             <p className="desc-white mb-8 text-blue-100">
//               Join companies like Utter Vision and discover the power of verified talent.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/contact" 
//               className="btn-responsive bg-white  text-blue-600 rounded-lg  hover:bg-gray-100   inline-flex  justify-center">
//                   Get Started Today
//               </Link>
//               <Link href="/" className="btn-responsive bg-white/10  text-white border-2 border-white/20 rounded-lg  hover:bg-white/20   inline-flex justify-center">
//                   Learn More
//               </Link>
//             </div>
//           </div>
//         </section>
      

//     </div>
//   );
// };

// export default CaseStudyUtterVision;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page