import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LoginPage />
        </div>
      </div>
    </div>
  );
}
