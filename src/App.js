import { EditorProvider } from "./context/context";
import CodeBar from "./components/CodeBar/CodeBar";
import Preview from "./components/Preview/Preview";
import Header from "./components/Header/Header";

import styles from './App.module.css'

function App() {
    return (
        <EditorProvider>
            <CodeBar/>

            <div className={styles.main}>
                <Header/>
                <Preview/>
            </div>

        </EditorProvider>
    );
}

export default App;
