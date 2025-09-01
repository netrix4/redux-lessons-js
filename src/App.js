import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import Info from "./components/Info";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Inicio</p>
        <Counter />
        <Info />
      </div>
    </Provider>
  );
}

export default App;
