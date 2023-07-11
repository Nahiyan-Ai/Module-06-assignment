import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const title = "This is the title of the react project";
  return (
    <>
      <Header title={title} />
      <Content />
      <Footer />
    </>
  );
}

export default App;
