import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, Instagram, Youtube, Music2, Menu, X } from "lucide-react";
import "./styles.css";

const profileImage = new URL("../public/pyragon-profile.png", import.meta.url).href;
const aboutMeImage = new URL("../public/192.jpg", import.meta.url).href;

const links = {
  spotify: "https://open.spotify.com/intl-fr/artist/3GlbBkEd2YDP75VwLTm5DA?si=LVF2nld4QRq1mexGCz6ecw",
  youtube: "https://music.youtube.com/channel/UC2I6YwIYjITf_nI8JUnoT6Q?si=zYqcpSK5jtOFWssT",
  apple: "https://music.apple.com/fr/artist/pyrλgon/6811577726",
  deezer: "https://link.deezer.com/s/34tON2IvDVD1ohszMWmVi",
  instagram: "https://www.instagram.com/pyragon_off/",
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      eyebrow: "THE CALL OF",
      title: "MOUNTAINS",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=88",
      caption: "Nature · Sound · Emotion",
    },
    {
      eyebrow: "A JOURNEY THROUGH",
      title: "THE WILD",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=88",
      caption: "Atmosphere · Freedom · Music",
    },
    {
      eyebrow: "WHERE SOUND MEETS",
      title: "HORIZONS",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=88",
      caption: "Light · Space · Memory",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero" id="home">
        {slides.map((item, i) => (
          <div
            key={item.title}
            className={`hero-bg ${i === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}

        <div className="hero-overlay" />

        <header className="nav">
          <button className="brand" onClick={() => scrollTo("home")}>PYRAGON</button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("music")}>MUSIC</button>
            <button onClick={() => scrollTo("about")}>ABOUT</button>
            <button onClick={() => scrollTo("gallery")}>GALLERY</button>
            <button onClick={() => scrollTo("contact")}>CONTACT</button>
          </nav>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </header>

        <div className="hero-content">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>

          <div className="artist-center">
            <div className="profile-ring">
              <img src={profileImage} alt="PYRAGON" />
            </div>
            <p className="artist-name">PYRAGON</p>
            <p className="artist-role">ELECTRONIC MUSIC ARTIST</p>
          </div>

          <button className="outline-button" onClick={() => scrollTo("music")}>
            LISTEN NOW <ArrowRight size={16} />
          </button>
        </div>

        <div className="hero-caption">
          <span>{slide.caption}</span>
          <span className="caption-line" />
        </div>

        <div className="side-socials">
          <a href={links.instagram}>Instagram</a>
          <a href={links.youtube}>YouTube</a>
          <a href={links.spotify}>Spotify</a>
        </div>

        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="scroll-hint" onClick={() => scrollTo("music")}>
          SCROLL <ArrowDown size={16} />
        </button>
      </section>

      <section className="release section-dark" id="music">
        <div className="release-cover">
          <div className="cover-image" />
          <div className="cover-text">
            <span>PYRAGON</span>
            <strong><br /></strong>
          </div>
        </div>

        <div className="release-info">
          <p className="section-kicker">LATEST RELEASE</p>
          <h2>EP.I : GODBATTLE</h2>
          <p className="release-artist">PYRAGON · 2026</p>
          <p className="release-description">
            Speed, rhythm and emotion converge in this electrifying release. Discover the latest
            song from PYRAGON.
          </p>

          <div className="streaming">
            <a className="stream spotify" href={links.spotify} target="_blank">SPOTIFY</a>
            <a className="stream apple" href={links.apple} target="_blank">APPLE MUSIC</a>
            <a className="stream youtube" href={links.youtube} target="_blank">YOUTUBE</a>
            <a className="stream deezer" href={links.deezer} target="_blank">DEEZER</a>
          </div>

          <button className="text-button" onClick={() => scrollTo("gallery")}>
            VIEW THE VISUALS <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="quote" id="gallery">
        <div className="quote-bg" />
        <div className="quote-content">
          <span>“</span>
          <blockquote>Not all those who wander are lost.<br />I find inspiration in places where the world feels quiet.</blockquote>
          <small>— J.R.R. Tolkien /PYRAGON</small>
        </div>
      </section>

      <section className="gallery-grid">
        <div className="gallery-card large mountain-one" />
        <div className="gallery-card mountain-two" />
        <div className="gallery-card mountain-three" />
        <div className="gallery-card wide mountain-four" />
      </section>

      <section className="about section-dark" id="about">
        <div className="about-photo">
          <img src={aboutMeImage} alt="Portrait de PYRAGON" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">ABOUT</p>
          <h2>PYRAGON</h2>
          <p>
            PYRAGON is an electronic music project exploring sound, atmosphere
            and memories through music. Inspired by landscapes, movement and
            quiet moments, the project turns emotions into immersive
            soundscapes.
          </p>
          <button className="outline-button" onClick={() => scrollTo("contact")}>
            GET IN TOUCH <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <div className="footer-brand">PYRAGON</div>
          <div className="footer-sub">ELECTRONIC MUSIC ARTIST</div>
        </div>

        <div className="footer-socials">
          <a href={links.instagram}><Instagram size={20} /></a>
          <a href={links.youtube}><Youtube size={20} /></a>
          <a href={links.spotify}><Music2 size={20} /></a>
        </div>

        <div className="copyright">© 2026 TechXCorp Music Ind. · ALL RIGHTS RESERVED.</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);