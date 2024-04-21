function Banner() {
  return (
    <div className="banner" id="home">
      <img
        src="src/assets/images/mac_open.webp"
        alt="bannière"
        className="banner-background"
      />
      <div className="banner-introduction ">
        <h1 className="banner-title fadeIn">Hello, je suis Rémy</h1>
        <h2 className="banner-subtitle fadeIn delayed">Développeur Web Junior</h2>
      </div>
    </div>
  );
}

export default Banner;
