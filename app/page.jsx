import { backendClient } from "../lib/graphql-clients";
import { gql } from "graphql-request";
import AreaOfExpertise from "../components/Home/AreaOfExpertise";
import Blogs from "../components/Home/Blogs";
import Brand from "../components/Home/Brand";
import Experts from "../components/Home/Experts";
import HomeBanner from "../components/Home/HomeBanner";
import Partnerships from "../components/Home/Partnerships";
import Testimonials from "../components/Home/Testimonials";
import WorldClass from "../components/Home/WorldClass";

const homepageGQL = gql`
  query HomePageGQL {
    Frontend_Testimonials {
      By
      text
    }
    Page_Heros(
      filter: { page: { _eq: "home" }, active: { _eq: true } }
      sort: ["-date_created"]
    ) {
      id
      image {
        id
      }
      video {
        id
      }
    }
  }
`;

export const revalidate = 3600;

const Home = async () => {
  const response = await backendClient.request(homepageGQL);
  const hero = response?.Page_Heros?.[0] || null;
  const testimonials = response?.Frontend_Testimonials || [];

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
};

export default Home;
