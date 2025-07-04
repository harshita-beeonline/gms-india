import AreaOfExpertise from "@/components/Home/AreaOfExpertise";
import Blogs from "@/components/Home/Blogs";
import Brand from "@/components/Home/Brand";
import Experts from "@/components/Home/Experts";
import HomeBanner from "@/components/Home/HomeBanner";
import Partnerships from "@/components/Home/Partnerships";
import Testimonials from "@/components/Home/Testimonials";
import WorldClass from "@/components/Home/WorldClass";

export default function Page() {
  return (
    <>
    <HomeBanner />
    <AreaOfExpertise />
    <WorldClass />
    <Brand />
    <Experts />
    <Partnerships />
    <Testimonials />
    <Blogs />
    </>
  );
}