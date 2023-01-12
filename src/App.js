import './App.css';
import { EditorProvider } from "./context/context";
import CodeBar from "./components/CodeBar/CodeBar";

function App() {
    return (
        <EditorProvider>
            <CodeBar/>
        </EditorProvider>
    );
}

export default App;
