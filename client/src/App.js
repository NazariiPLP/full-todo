import { useReducer } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home sendUser={setUser}/>} />
        <Route path="/tasks/" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
