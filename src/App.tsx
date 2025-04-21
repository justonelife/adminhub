import { Loading } from "components/Loading";
import { menuItems } from "constants/menu-items";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TwoColumnsLayout from './layouts/TwoColumns/';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TwoColumnsLayout items={menuItems} />}>
          {menuItems.map((item, idx) => (
            <Route path={item.path} element={
              <Suspense fallback={<Loading />}>
                {item.component && <item.component />}
              </Suspense>
            }>
            </Route>
          ))}

        </Route>
      </Routes>
    </>
  );
}

export default App;
