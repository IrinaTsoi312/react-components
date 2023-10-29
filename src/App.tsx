/* eslint-disable react/prefer-stateless-function */
import { Component } from "react";
import "./App.css";
// import Card from "./features/Card";

interface AppState {
  data: object | null;
  error: MyCustomError | null;
}
interface MyCustomError {
  message: string;
  code: number;
}

class App extends Component<object, AppState> {
  constructor() {
    super({});
    this.state = {
      data: null,
      error: null,
    };
  }

  componentDidMount(): void {
    this.getResponse();
  }

  getResponse() {
    fetch("https://swapi.dev/api/films")
      .then((res) => {
        if (!res.ok) {
          throw new Error("There is no response");
        }
        return res.json();
      })
      .then((data: object) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { data, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (data) {
      return (
        <div>
          <h1>SWAPI Data: </h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default App;
