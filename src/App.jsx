import React, { Component } from "react";

import Departments from "./components/Departments";
import Users from "./components/Users";
import Loading from "./components/Loading";

import "./index.css";

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: message => {},
  hideLoading: () => {},
});

class App extends Component {

  state = {
    loading: false,
    message: null,
  };

  showLoading = message => this.setState({ loading: true, message });

  hideLoading = () => this.setState({ loading: false });

  render() {
    const value = {
      loading: this.state.loading,
      message: this.state.message,
      showLoading: this.showLoading,
      hideLoading: this.hideLoading,
    };

    const Provider = LoadingContext.Provider;
    const Consumer = LoadingContext.Consumer;

    return (
      <Provider value={value}>
        <Consumer>
          {
            ({ loading, message, showLoading, hideLoading }) => (
              <div className="screen">
                <h1 className="title">Web Site creating for demonstrate the use of the Context API!</h1>
                <Users {...{ showLoading, hideLoading }} />
                <Departments {...{ showLoading, hideLoading }} />
                <Loading {...{ loading, message }} />
                <h2 className="title">Create with {'<3'} By Paulo!</h2>
              </div>
            )
          }
        </Consumer>
      </Provider>
    );
  }
}

export default App;