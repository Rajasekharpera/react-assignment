import React, { useState, useEffect } from 'react';
import Banner from './Components/Banner';
import Section from './Components/Section';
import { sections, cards } from './data/data';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';

    // Create a <link> element for the theme CSS file
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';

    // Set the appropriate theme CSS file based on the current theme state
    // linkElement.href = `src/assets/styles/${theme}-theme.css`;
    linkElement.href = `${process.env.PUBLIC_URL}/assets/styles/${theme}-theme.css`;

    // Append the <link> element to the <head> of the document
    document.head.appendChild(linkElement);

    // Clean up the <link> element when the component unmounts or when the theme changes
    return () => {
      document.head.removeChild(linkElement);
    };
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}style={{
    display: 'block',
    margin: '0 auto',
    marginTop: '20px',
    padding: '10px 20px',
    background: 'blue',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }}>Switch Theme</button>
      <Banner />
      {sections.map(section => (
        <Section key={section.id} {...section} cards={cards.filter(card => card.parent_sec === section.id)} />
      ))}
    </div>
  );
}

export default App;