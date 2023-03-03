import { Route, Routes } from "react-router-dom";
import {
  WelcomePage,
  CharactersPage,
  CharacterDetailPage,
  NotFoundPage,
} from "../pages";

function App() {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/characters">
        <Route index element={<CharactersPage />} />
        <Route path=":id" element={<CharacterDetailPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
