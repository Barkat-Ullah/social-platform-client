import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Announcement from "../Announcement/Announcement";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Numered | Home</title>
      </Helmet>
      <Banner></Banner>
      <Announcement></Announcement>
      <Posts></Posts>
    </div>
  );
};

export default Home;
