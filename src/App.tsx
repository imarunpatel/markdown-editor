import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [markdown, setMarkdown] = useState('');
  
  return (
    <>
      <div className="flex flex-col min-h-screen h-screen w-full bg-gray-100 dark:bg-gray-950">
       <Header />
        <main className="mx-auto max-w-7xl flex-1 gap-5 flex w-full px-4">
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
            <Preview markdown={markdown} />
        </main>
        <Footer  />
      </div>
    </>
  )
}

export default App;