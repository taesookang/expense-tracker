import "./scss/base.scss";
import Details from "./components/details/Details";
import Main from "./components/main/Main";
import Topbar from "./components/topbar/Topbar";
import List from "./components/list/List";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Main />
        <div className="details">
          <Details title="Income" />
          <Details title="Expense" />
        </div>
        <List />
      </div>
      <footer>All rights reserved by <b>Taesoo</b></footer>
    </div>
  );
}

export default App;
