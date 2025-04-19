import { Route, Routes } from "react-router-dom";
import TwoColumnsLayout from './layouts/TwoColumns/';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<TwoColumnsLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
