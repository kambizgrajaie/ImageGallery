import React, {useState} from "react";
import './App.css';
import Gallery from './components/gallery/gallery'
import ErrorBoundary from './components/errorBoundary'
import Switch from './components/switch/switch';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
      setIsDark(!isDark);
  }

  return (
    <ErrorBoundary>
      <div className={isDark ? `dark-theme` : `light-theme`}>
        <Switch toggleDarkMode={toggleDarkMode} />
        <Gallery />
      </div>
    </ErrorBoundary>)
}

export default App;
