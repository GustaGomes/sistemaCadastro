import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";
import useAuth from "../hooks/useAuth";
import { DemoPage } from "../pages/DemoPage";
useAuth

interface PrivateProps {
  Item: React.ComponentType;
}

const Private: React.FC<PrivateProps> = ({ Item }) => {
  const signed = useAuth();

  return signed ? <Item /> : <Signup />;
};

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Private Item={Dashboard} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
