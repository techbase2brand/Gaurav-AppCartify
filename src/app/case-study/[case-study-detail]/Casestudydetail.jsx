"use client";
import React, { useContext, useEffect } from "react";
import { casestudyData } from "../../jsondata";
import { usePathname } from "next/navigation";
import { AppStateContext } from "@/app/Context/AppStateContext";
const HeroSection = ({ title }) => {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(150,191,72,0.1),transparent_70%)]" />
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {title}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#96BF48] to-[#7da83a] mx-auto mb-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const ClientOverview = ({ subtitle , clientWants,title}) => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#96BF48] to-[#7da83a] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="flex items-start mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#96BF48] to-[#7da83a] rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl  text-white mb-2">Client Overview</h2>
              <div className="w-20 h-1 bg-[#96BF48] rounded-full" />
            </div>
          </div>
          <p className=" text-slate-300 d text-lg font-light">
            {subtitle}
          </p>
          <ul className="mt-3 ms-2 md:ms-4">
              <p className="text-2xl text-red-300 mb-3">
                  {title}
              </p>
              {
               clientWants && clientWants.map((data,index)=>(
                <li className="mt-1" key={index}>
                  <p className="text-slate-300 d text-lg">{data}</p>
                </li>
                ))
              }
          </ul>
        </div>
      </div>
      
    </div>
  );
};

const ChallengesFaced = ({ challenges, title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="flex items-start mb-6 md:mb-12">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-white mb-2">
                {title}
              </h2>
              <div className="w-20 h-1 bg-red-500 rounded-full" />
            </div>
          </div>

          <div className="grid gap-12 items-center">
            <div className="space-y-6">
              {challenges &&
                challenges.map((challenge, index) =>
                  <div
                    key={index}
                    className="group/item relative cursor-pointer"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover/item:opacity-100 transition duration-500" />
                    <div className="relative bg-slate-800/50 rounded-2xl p-4 md:p-6 border border-slate-700/30 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                          <span className="text-red-400 font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <p className="text-2xl text-red-300 mb-3">
                            {challenge.title}
                          </p>
                          <p className="text-slate-300 d text-lg">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionImplemented = ({ solutions, title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#96BF48] to-[#7da83a] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-white mb-4 md:mb-6">
              {title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#96BF48] to-[#7da83a] mx-auto mb-6 rounded-full" />
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              To address the challenges, we implemented a focused, multi-channel
              approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions &&
              solutions.map((solution, index) =>
                <div key={index} className="group/card relative cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#96BF48]/20 to-[#7da83a]/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition duration-500" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700/30 hover:border-[#96BF48]/30 transition-all duration-500 hover:transform hover:scale-105 h-full">
                    <div className="text-center">
                      <div className="w-14 md:w-20 h-14 md:h-20 bg-gradient-to-br from-[#96BF48] to-[#7da83a] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover/card:shadow-[#96BF48]/25 group-hover/card:shadow-2xl transition-all duration-500">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-2xl  text-[#96BF48] mb-4">
                        {solution.title}
                      </p>
                      <p className="text-slate-300 d text-lg">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsAchieved = ({ results, title }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              {title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light">
              The multi-channel strategy delivered impressive results, leading
              to substantial growth in sales and brand awareness. Key outcomes
              include
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results &&
              results.map((result, index) =>
                <div key={index} className="group/card relative cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover/card:opacity-100 transition duration-500" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700/30 text-center hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 h-full">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover/card:shadow-purple-500/25 group-hover/card:shadow-2xl transition-all duration-500">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-purple-300 mb-3">
                      {result.percentage}
                    </h3>
                    <p className="text-2xl text-white mb-4">
                      {result.title}
                    </p>
                    <p className="text-slate-300 d text-lg">
                      {result.description}
                    </p>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
    const { setState } = useContext(AppStateContext);
    const handleClick = () => {
      setState(true);
    };
    useEffect(() => {}, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 mb-20">
      <div className="relative group">
        <div className="absolute -inset-1 bg-[linear-gradient(90deg,rgb(150_191_72_/_35%)_-44%,rgba(255,255,255,0)_100%)] rounded-3xl  transition duration-1000" />
        <div className="relative text-center">
          <div className=" rounded-3xl p-4 md:p-16 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                GET READY TO CREATE YOUR SUCCESS ROADMAP WITH US
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-3xl mx-auto">
                Our Team is Ready To Turn Your Goals Into Implementation.
                Ensuring Your Vision Turns Into Reality.
              </p>
                <div
                  className="flex justify-center items-center "
                  onClick={() => handleClick()}
                >
                  <button className="relative px-3 md:px-8 py-0 md:py-2 text-[#82bc29] border-2 border-[#82bc29] rounded-lg uppercase font-medium overflow-hidden transition-colors duration-300 group">
                    <span className="absolute inset-0 bg-[#82bc29] transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative text-white text-base md:text-lg">
                      Contact Us
                    </span>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Casestudydetail() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const caseStudy = casestudyData.find(item => item.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#96BF48] to-[#7da83a] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Case Study Not Found
          </h2>
          <p className="text-slate-400">
            The requested case study could not be located.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection title={caseStudy.title} />
      <ClientOverview 
        subtitle={caseStudy.subtitle} 
        clientWants={caseStudy.clientWants.items} 
        title={caseStudy.clientWants.sectionTitle} />
      <ChallengesFaced
        challenges={caseStudy.challengesFaced.items}
        title={caseStudy.challengesFaced.sectionTitle}
      />
      <SolutionImplemented
        solutions={caseStudy.solutionImplemented.items}
        title={caseStudy.solutionImplemented.sectionTitle}
      />
      <ResultsAchieved
        results={caseStudy.resultsAchieved.items}
        title={caseStudy.resultsAchieved.sectionTitle}
      />
      <CallToAction />
    </div>
  );
}
