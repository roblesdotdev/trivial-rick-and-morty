import { Route, Routes } from "react-router-dom";
import {
  WelcomePage,
  CharactersPage,
  CharacterDetailPage,
  NotFoundPage,
} from "../pages";
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/characters">
          <Route index element={<CharactersPage />} />
          <Route path=":id" element={<CharacterDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
