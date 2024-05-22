import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <div className="p-5 flex flex-col gap-4 h-screen items-center justify-center bg-teal-50">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
