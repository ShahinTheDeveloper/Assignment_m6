import Footer from "./assets/components/Footer";
import Content from "./assets/components/Content";
import Header from "./assets/components/Header";

const App = () => {
  const cText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, porro cupiditate! Maiores incidunt soluta sed modi quidem quod repudiandae enim exercitationem neque, asperiores temporibus at non praesentium impedit magnam minima necessitatibus magni dolore amet corrupti? Laudantium voluptatum, minus necessitatibus in ex eius molestias mollitia ipsam sunt accusantium minima iste possimus!';
  return (
    <div>
      <Header title={"This is Header Title From Props"}></Header>
      <Content contentText={cText}></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;