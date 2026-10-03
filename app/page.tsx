"use client";

const services = [
  {
    name: "Haircut & Styling",
    description: "Professional haircuts, styling and blow-dry services.",
    icon: "✂️",
  },
  {
    name: "Hair Spa",
    description: "Relaxing hair spa treatment for healthy, smooth hair.",
    icon: "💆‍♀️",
  },
  {
    name: "Facial",
    description: "Refreshing facial treatments for glowing skin.",
    icon: "✨",
  },
  {
    name: "Bridal Makeup",
    description: "Professional bridal makeup for your special day.",
    icon: "👰",
  },
  {
    name: "Manicure & Pedicure",
    description: "Complete nail care and beauty treatment.",
    icon: "💅",
  },
  {
    name: "Home Beauty Service",
    description: "Book professional beauty services at your home.",
    icon: "🏠",
  },
];

const categories = [
  ["💇‍♀️", "Hair Salon"],
  ["💄", "Beauty Parlour"],
  ["💈", "Barber"],
  ["👰", "Bridal Makeup"],
  ["🧖‍♀️", "Spa"],
  ["🏠", "Home Beauty"],
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo">
            <span className="logoMark">S</span>
            <span>Super Beauty</span>
          </a>

          <nav className="navLinks">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#salons">Salons</a>
            <a href="#about">About</a>
          </nav>

          <button className="loginButton">Login</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container heroGrid">
          <div className="heroText">
            <span className="eyebrow">
              SUPER BEAUTY • BEAUTY SERVICES
            </span>

            <h1>
              Look Good.
              <br />
              <span>Feel Super.</span>
            </h1>

            <p>
              Discover salons, beauty professionals and personal care
              services near you. Find the right service and get started
              easily with Super Beauty.
            </p>

            <div className="searchBox">
              <span className="searchIcon">⌕</span>

              <input
                type="text"
                placeholder="Search salon or beauty service..."
              />

              <button>Search</button>
            </div>

            <div className="trustRow">
              <span>✓ Verified Providers</span>
              <span>★ Trusted Services</span>
              <span>⚡ Quick Booking</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="beautyCircle">💇‍♀️</div>

            <div className="floatingCard topCard">
              ★ 4.8 Rating
            </div>

            <div className="floatingCard bottomCard">
              ✓ Verified Salon
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">EXPLORE</span>
              <h2>What are you looking for?</h2>
            </div>
          </div>

          <div className="categoryGrid">
            {categories.map(([icon, title]) => (
              <div className="categoryCard" key={title}>
                <div className="categoryIcon">{icon}</div>
                <h3>{title}</h3>
                <span>Explore →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section servicesSection" id="services">
        <div className="container">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Popular Beauty Services</h2>
            </div>

            <a href="#services" className="viewAll">
              View All →
            </a>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.name}>
                <div className="serviceImage">
                  {service.icon}
                </div>

                <div className="serviceContent">
                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <div className="serviceBottom">
                    <span>Available near you</span>

                    <button>Book Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOME SERVICE */}
      <section className="homeBanner">
        <div className="container bannerGrid">
          <div>
            <span className="eyebrow">
              SUPER BEAUTY AT HOME
            </span>

            <h2>
              Beauty services at your doorstep.
            </h2>

            <p>
              Book trusted beauty professionals and enjoy
              salon-quality services from the comfort of your home.
            </p>

            <button className="primaryButton">
              Book Home Service
            </button>
          </div>

          <div className="bannerIcon">
            🏠✨
          </div>
        </div>
      </section>

      {/* SALONS */}
      <section className="section" id="salons">
        <div className="container">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">NEAR YOU</span>
              <h2>Popular Salons</h2>
            </div>
          </div>

          <div className="salonGrid">
            <div className="salonCard">
              <div className="salonImage">💇‍♀️</div>

              <div className="salonContent">
                <span className="rating">★ 4.8</span>
                <h3>Glow Beauty Studio</h3>
                <p>📍 Tirupati</p>
                <button>View Salon</button>
              </div>
            </div>

            <div className="salonCard">
              <div className="salonImage">💈</div>

              <div className="salonContent">
                <span className="rating">★ 4.7</span>
                <h3>Style Zone Salon</h3>
                <p>📍 Tirupati</p>
                <button>View Salon</button>
              </div>
            </div>

            <div className="salonCard">
              <div className="salonImage">✨</div>

              <div className="salonContent">
                <span className="rating">★ 4.9</span>
                <h3>Royal Beauty Lounge</h3>
                <p>📍 Chittoor</p>
                <button>View Salon</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="aboutSection" id="about">
        <div className="container aboutGrid">
          <div>
            <span className="eyebrow">
              ABOUT SUPER BEAUTY
            </span>

            <h2>
              Your beauty.
              <br />
              Our priority.
            </h2>
          </div>

          <div>
            <p>
              Super Beauty connects customers with salons,
              barbers, beauticians and professional beauty
              service providers.
            </p>

            <p>
              Discover services, explore salons and connect
              with trusted beauty professionals.
            </p>

            <div className="aboutPoints">
              <span>✓ Verified Professionals</span>
              <span>✓ Easy Service Discovery</span>
              <span>✓ Transparent Information</span>
              <span>✓ Home Beauty Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="logo footerLogo">
              <span className="logoMark">S</span>
              <span>Super Beauty</span>
            </div>

            <p>
              Discover beauty services and salons near you.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#services">Hair</a>
            <a href="#services">Makeup</a>
            <a href="#services">Facial</a>
            <a href="#services">Spa</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#home">Contact</a>
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
          </div>

          <div>
            <h4>Professionals</h4>
            <a href="#home">Register Salon</a>
            <a href="#home">Become a Partner</a>
            <a href="#home">Help Center</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Kumar Tech Private Limited. All rights reserved.
        </div>
      </footer>
    </main>
  );
}