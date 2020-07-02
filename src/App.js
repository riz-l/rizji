// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: Components
import HomePage from "./components/pages/HomePage/HomePage.component";

// Component: KeyboardsPage
function KeyboardsPage() {
  return (
    <div>
      <h1>Keyboards Page</h1>
    </div>
  );
}

// Component: App
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/keyboardsPage" component={KeyboardsPage} />
      </Switch>
    </div>
  );
}

// Export: App
export default App;
