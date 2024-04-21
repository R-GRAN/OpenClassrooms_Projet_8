import mac_open from "@/assets/images/mac_open.webp"

function Banner() {
  return (
    <div className="banner" id="home">
      <img
        src={mac_open}
        alt="bannière"
        className="banner-background"
      />
      <div className="banner-introduction ">
        <h1 className="banner-title fadeIn">Hello, je suis Rémy</h1>
        <h2 className="banner-subtitle fadeIn delayed">
          Développeur Web Junior
        </h2>
      </div>
    </div>
  );
}

export default Banner;
