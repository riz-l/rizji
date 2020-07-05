// Import: Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: Components
import HomePage from "./components/pages/HomePage/HomePage.component";
import ShopPage from "./components/pages/ShopPage/ShopPage.component";
import Header from "./components/UI/Header/Header.component";
import SignInSignUpPage from "./components/pages/SignInSignUpPage/SignInSignUpPage.component";

// Import: Firebase Authentication
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Component: App
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
        console.log(this.state);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// Export: App
export default App;
