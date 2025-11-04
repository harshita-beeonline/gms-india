import React from 'react'
import AboutUsBanner from '../../components/AboutUs/AboutUsBanner';
import AboutusYoutube from '../../components/AboutUs/AboutusYoutube';
import DonutChart from '../../components/AboutUs/DonutChart';
import AboutusWorldClass from '../../components/AboutUs/AboutusWorldCalss';
import OurMissionVision from '../../components/AboutUs/OurMissionVision';
import WhyChooseUs from '../../components/AboutUs/WhyChooseUs';
import TimeLine from '../../components/AboutUs/TimeLine';
const page = () => {
  return (
    <>
    <AboutUsBanner />
    <AboutusYoutube/>
    <AboutusWorldClass />
    <DonutChart />
    <OurMissionVision />
    <WhyChooseUs />
    <TimeLine />
    </>
  )
}

export default page
