// App.js
import React, { useState, useEffect } from 'react';
import './styles/styles.css';
import logo from './images/VivieIcon.png';
import youtube from './images/youtube.webp';
import twitter from './images/twitter.png';

const App = () => {
  //const [scrollColor, setScrollColor] = useState('pink');
  const [scrollColor] = useState('pink');
  const [typingText, setTypingText] = useState('');
  const [index, setIndex] = useState(0);
  const descriptionList = ['Love Playing Video Games', 'Love Cookies', 'am a YouTuber', 'do Coding', 'am a VTuber', 'Love Minecraft', 'Love AI'];

  /*useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrollColor('blue');
      } else {
        setScrollColor('pink');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);*/

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < descriptionList.length) {
        typeText(descriptionList[index]);
      } else {
        setIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index, descriptionList]);

  const typeText = (text) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setTypingText(text.substring(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          backspaceText(text);
        }, 1000);
      }
    }, 200);
  };

  const backspaceText = (text) => {
    let i = text.length;
    const interval = setInterval(() => {
      if (i >= 0) {
        setTypingText(text.substring(0, i));
        i--;
      } else {
        clearInterval(interval);
        setIndex(index + 1);
      }
    }, 100);
  };

  return (
    <div className={`app ${scrollColor === 'blue' ? 'dark-mode' : ''}`}>
      <header>
        <div className="image-container">
          <img src={logo} alt="AI Vtuber" className="vtuber-image" />
        </div>
        <div className="line"></div>
        <h1 className="color-changing-text">VIVIE</h1>
        <div className="typing-text">I {typingText}</div>
      </header>
      <main>
        <section className="section about-section">
          <div className="about-content">
            <h2>About</h2>
            <p>Vivie is an AI-powered virtual YouTuber who loves to entertain her audience with gaming, and Minecraft. With her advanced AI capabilities, she interacts with her viewers in real-time, making each experience unique and enjoyable.</p>
          </div>
        </section>
        
        <section className="section fun-facts-section">
          <div className="fun-facts-content">
            <h2>Fun Facts</h2>
            <table>
              <tbody>
                <tr>
                  <td>Height:</td>
                  <td>170 cm</td>
                </tr>
                <tr>
                  <td>Birthday:</td>
                  <td>February 4-18th...</td>
                </tr>
                <tr>
                  <td>AI Parameters:</td>
                  <td>13 Billion...</td>
                </tr>
                <tr>
                  <td>Favorite Subject:</td>
                  <td>Not math</td>
                </tr>
                <tr>
                  <td>Favorite Food:</td>
                  <td>Chocolate chip cookies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="section news-section">
          <h2>News</h2>
          <div className="news-box">
            <div className="news-item">
              <p>Date: March 12, 2024</p>
              <p>Vivie is getting her own webpage to share to the world her powers!</p>
            </div>
            <div className="news-item">
              <p>Date: February 4, 2024</p>
              <p>Vivie was finally good enough to be good.</p>
            </div>
            <div className="news-item">
              <p>Date: January 15, 2024</p>
              <p>The project began and there was many to learn! Step 1 complete.</p>
            </div>
          </div>
        </section>

      </main>
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.youtube.com/c/vivtorsing" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${youtube})` }}></a>
          <a href="https://twitter.com/vivtorsing" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${twitter})` }}></a>
        </div>
        <p>&copy; 2024 Vivtorsing</p>
      </footer>
    </div>
  );
};

export default App;
