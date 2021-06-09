import { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list-component";
import { SearchBox } from "./component/searchBox/searchBox";

class App extends Component {
  state = {
    monster: [],
    searchField: "",
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    this.setState({ monster: data });
  }
  changeSearchField(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monster, searchField } = this.state;
    const filtered = monster.filter((mon) =>
      mon.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Montser Roledex</h1>
        <SearchBox
          placeholder="SearchMonster"
          handler={this.changeSearchField.bind(this)}
        />
        <CardList monster={filtered} />
      </div>
    );
  }
}

export default App;
