import Banner from "./banner/banner";
import MainView from "./mainview/mainView";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="container-page">
        <MainView></MainView>
      </div>
    </div>
  );
};
export default Home;
