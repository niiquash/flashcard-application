import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import { Routes, Route } from "react-router";
import StudyModePage from "./pages/study/StudyModePage";
import AllCardsPage from "./pages/cards/AllCardsPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/study" element={<StudyModePage />} />
        <Route path="/cards" element={<AllCardsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
