// import React, { useState } from 'react';
// import axios from 'axios';
import "./App.css"

const App = () => {
  // const [url, setUrl] = useState("");
  // const [format, setFormat] = useState("mp4");
  // const serverURL = 'https://ytmp4-dg2j.onrender.com';

  // const handleDownload = async (e) => {
  //   e.preventDefault();

  //   if (!url) {
  //     alert('Enter YouTube URL');
  //     return;
  //   }

  //   try {
  //     const endpoint = format === 'mp3' ? '/downloadmp3' : '/downloadmp4';
  //     const response = await axios.get(`${serverURL}${endpoint}?url=${encodeURIComponent(url)}`, { responseType: 'blob' });

  //     if (response.status === 200) {
  //       const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
  //       const a = document.createElement('a');
  //       a.href = downloadUrl;
  //       a.setAttribute('download', `${format === 'mp3' ? 'audio' : 'video'}.${format}`);
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //     } else {
  //       alert("Invalid URL or other error");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching download URL", error);
  //     alert("An error occurred while downloading the file.");
  //   }
  // };

  return (
    <div>
      <div className="menu-wrapper" id="menuWrapper">
        <div className="container">
          <div className="menu-wrapper__nav flex">
            <strong className="logo">DOWNLOADLIFY</strong>
            <p className="year">© 2024</p>
            <button className="menu__btn" id="closeBtn">CLOSE</button>
          </div>
          <div className="content">
            <div>
              <div className="flex-links">
                <a className="content__link" href="#!">ABOUT</a>
                <div className="flex-direct">
                  <a className="content__link" href="mailto:sanjarkama26@gmail.com">FEEDBACK</a>
                  <a className="content__link" href="https://buymeacoffee.com/sanjar">DONATE</a>
                </div>
              </div>
              <div className="flex">
                <div className="socials flex-direct__alignstart">
                  <p>FOLLOW</p>
                  <div className="links flex-direct flex-direct__links">
                    <a href="https://www.instagram.com/downloadlify">INSTAGRAM</a>
                    <a href="#!">YOUTUBE</a>
                    <a href="#!">X</a>
                  </div>
                </div>
                <div className="others flex-direct__alignstart">
                  <p>OTHERS</p>
                  <div className="links flex-direct flex-direct__links">
                    <a target="_blank" href="https://wave-content.vercel.app/">WAVE 1.0</a>
                    <a target="_blank" href="https://wave-content.vercel.app/">WAVE 2.0</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="container">
          <div className="flex">
            <strong className="logo">DOWNLOADLIFY</strong>
            <p className="year__made">© 2024</p>
            <button className="menu__btn" id="openBtn">MENU</button>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <h1>Download <span>Anything</span> From YouTube</h1>
          <p>Without Annoying & Spammy Ads</p>
        </div>
      </div>

      {/* <div className="download-pg">
        <div className="container">
          <form onSubmit={handleDownload} className="flex">
            <div className="input-wrapper flex">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Enter YouTube URL"
                className="URL-input"
                required
              />
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="opt"
              >
                <option value="mp4">MP4</option>
                <option value="mp3">MP3</option>
              </select>
            </div>
            <button type="submit" className="download-btn" id="btn">DOWNLOAD</button>
          </form>
        </div>
      </div> */}
      
      <div className="download-pg">
        <div className="container">
          <form className="flex">
            <div className="input-wrapper flex">
              <input type="text" placeholder="Enter YouTube URL" className="URL-input" required/>
              <select className="opt">
                <option value="mp4">MP4</option>
                <option value="mp3">MP3</option>
              </select>
            </div>
            <button type="submit" className="download-btn" id="btn">DOWNLOAD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
