"use client";

import React from 'react';
import Image from 'next/image';

const Endorsements: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-8">Our talent has worked with</p>
          <div className="flex items-center justify-center gap-8 opacity-60 flex-wrap">
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={50}
              height={32}
              className="h-8  w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/microsoft.png"
              alt="Microsoft"
              width={50}
              height={32}
              className="h-8  w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/pwc.svg"
              alt="PwC"
              width={50}
              height={32}
              className="h-8  w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/bombardier.png"
              alt="Bombardier"
              width={50}
              height={32}
              className="h-8  w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Endorsements;
