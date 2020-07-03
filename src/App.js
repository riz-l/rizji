// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: Components
import HomePage from "./components/pages/HomePage/HomePage.component";
import ShopPage from "./components/pages/ShopPage/ShopPage.component";
import Header from "./components/UI/Header/Header.component";

// Component: App
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

// Export: App
export default App;
