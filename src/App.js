import Banner from "./components/Banner/Banner";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div>
      <Banner
        bannerTitle={""}
        bannerDescription={"Meet the developer behind the magic"}
        bannerButtonText={"Click here"}
        bannerPlace={"top"}
        bannerButtonUrl={"https://shuvoportfolio.vercel.app"}
      />
      <AppRoutes />
      <ScrollToTop />
    </div>
  );
};

export default App;
