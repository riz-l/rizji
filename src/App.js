// Import: Dependencies
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Import: Styling
import "./index.css";

// Import: Components
import HomePage from "./components/pages/HomePage/HomePage.component";
import ShopPage from "./components/pages/ShopPage/ShopPage.component";
import Header from "./components/UI/Header/Header.component";
import SignInSignUpPage from "./components/pages/SignInSignUpPage/SignInSignUpPage.component";
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage.component";

// Import: Firebase Authentication
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Import: Redux, user.actions
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

// Component: App
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// Map Dispatch to Props
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Export: App
export default connect(mapStateToProps, mapDispatchToProps)(App);
