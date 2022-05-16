// index.js -> App.js
import Content from "./Content";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
    </div>
  );
};

export default App;
