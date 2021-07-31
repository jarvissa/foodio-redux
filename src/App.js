import Header from "./components/ui/Header";
import Meals from "./components/app/Meals";

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-700 font-os">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
};

export default App;
