import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import UserListScreen from "./components/screens/UserListScreen";
import UserEditScreen from "./components/screens/UserEditScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/userlist" component={UserListScreen}  />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
