import React from 'react'
import SemiconductorBanner from '../../components/SolutionSemiconductor/SemiconductorBanner';
import CoreDomain from '../../components/SolutionSemiconductor/CoreDomain';
import ClientsPartners from '../../components/SolutionSemiconductor/ClientsPartners';
import GetInTouch from '../../components/SolutionSemiconductor/GetInTouch';

const page = () => {
  return (
    <>
    <SemiconductorBanner />
    <CoreDomain />
    <ClientsPartners/>
    <GetInTouch />
    </>
  )
}

export default page
