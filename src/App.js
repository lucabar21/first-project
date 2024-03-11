import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="img-container">
          <div className="flower-container">
            <ButtonComponent text="Flower" />
            <ImageComponent
              source="https://images.unsplash.com/photo-1464798429116-8e26f96b2e60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alternative="blue-flower"
            />
          </div>
          <div className="ananas-container">
            <ButtonComponent text="Ananas" />
            <ImageComponent
              source="https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alternative="blue-ananas"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
