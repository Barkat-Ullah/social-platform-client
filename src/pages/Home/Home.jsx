import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Numered | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
