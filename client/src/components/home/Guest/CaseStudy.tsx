import React from 'react';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl padding">
        <div className="text-center mb-12">
          <h2 className="text-bold-3xl font-bold tracking-tight  ">
            Success Stories
          </h2>
          <p className="mt-4 desc ">
            See how companies transform their hiring with Inkaer
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-bold-2xl   mb-2">Utter Vision</h3>
                  <p className="text-small ">
                    CEO: Sahand Vafaei
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm xs:text-lg font-semibold text-foreground mb-4">
                    How Utter Vision scaled their non-engineering team with verified talent
                  </h4>
                  <p className="text-small leading-relaxed">
                    Discover how this innovative company leveraged Inkaer's comprehensive verification 
                    process to build a world-class team beyond engineering roles, achieving remarkable 
                    growth and operational efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-base sm:text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-small ">Faster Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-base sm:text-2xl font-bold text-orange-500">95%</div>
                    <div className="text-small">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-2">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-base sm:text-2xl font-bold text-blue-400">12</div>
                    <div className="text-small">Team Members</div>
                  </div>
                </div>

                <Link href="/case-study/utter-vision" className="bg-blue-600 btn-responsive text-white rounded-lg  hover:bg-blue-700  inline-flex items-center gap-2  group ">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-12 w-12 text-blue-600" />
                  </div>
                  <blockquote className="text-base sm:text-lg font-medium text-foreground mb-4">
                    "Inkaer didn't just help us hire faster - they helped us hire smarter. 
                    The verification process gave us confidence in every candidate."
                  </blockquote>
                  <cite className="text-small">
                    Sahand Vafaei, CEO of Utter Vision
                  </cite>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudy;