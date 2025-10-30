import React from 'react'
import MicroelectronicBanner from '../../components/SolutionMicroelectronic/MicroelectronicBanner';
import CoreDomain from '../../components/SolutionSemiconductor/CoreDomain';
import ClientsPartners from '../../components/SolutionSemiconductor/ClientsPartners';
import GetInTouch from '../../components/SolutionSemiconductor/GetInTouch';

const page = () => {
  return (
    <>
    <MicroelectronicBanner />
    <CoreDomain />
    <ClientsPartners/>
    <GetInTouch />
    </>
  )
}

export default page
