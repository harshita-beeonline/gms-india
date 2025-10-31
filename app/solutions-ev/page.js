import React from "react";
import EVBanner from "../../components/SolutionEV/EVBanner";
import EVCoreDomain from "../../components/SolutionEV/EVCoreDomain";
import EVClientPartner from "../../components/SolutionEV/EVClientPartner";
import EVStartup from '../../components/SolutionEV/EVStartup';
import EVGetInTouch from '../../components/SolutionEV/EVGetInTouch';

const page = () => {
  return (
    <>
      <EVBanner />
      <EVCoreDomain />
      <EVClientPartner />
      <EVStartup />
      <EVGetInTouch />
    </>
  );
};

export default page;
