import "./App.css";
import { Card } from "./components/Card";
import casinos from "./casinos";

function App() {
  return (
    <>
      <div className="p-5 space-y-3">
        
        <h1 className="text-xl font-bold text-[#939393] capitalize">
          best casinos 2024
        </h1>

        <div className="space-y-5">
          {casinos.map((casino, i) => {
            return (
              <div key={i}>
                <Card
                  name={casino.name}
                  img={casino.img}
                  bg={casino.bg}
                  rating={casino.rating}
                />
              </div>
            );
          })}
        </div>

      </div>
    </>
  );
}

export default App;
