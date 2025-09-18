import React from "react";
import "./LipReaderUI.css";

export default function LipReaderUI() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">e</div>
        <div className="icon">🏠</div>
        <div className="icon">➕</div>
        <div className="icon">🌐</div>
        <div className="icon bottom">👤</div>
      </aside>

      {/* Main content */}
      <main className="main">
        {/* video area */}
        <div className="video-container">
          <div className="wireframe">
            <img src="video.jpg" alt="video" />
          </div>
        </div>

        {/* Bottom cards */}
        <div className="cards">
          {/* Upload Card */}
          <section className="card">
            <h3>Upload a Video</h3>
            <button>📁 Upload a Video</button>
            <button>📷 Use Webcam</button>
            <div className="progress">
              <div className="bar"></div>
            </div>
            <div className="time">
              <span>▶</span>
              <span>0:00</span>
            </div>
          </section>

          {/* Transcription Card */}
          <section className="card">
            <h3>Transcription Output</h3>
            <div className="output-box">
              This is where output will be displayed
            </div>
            <div className="progress">
              <div className="bar small"></div>
            </div>
            <div className="time right">0:00</div>
          </section>
        </div>
      </main>

      {/* Right panel */}
      <aside className="settings">
        <h3>Output Settings</h3>
        <label>Language</label>
        <select>
          <option>English (US)</option>
          <option>Nepali</option>
        </select>
        <button className="start">START LIP READING</button>
      </aside>
    </div>
  );
}
