import "./App.css";
import { BookDetails } from "./components/BookDetails";
import { Dashboard } from "./components/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { FilterProvider } from "./context/FilterContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex bg-[#eaf8fd] justify-center py-[50px] h-screen flex-col md:flex-row">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
