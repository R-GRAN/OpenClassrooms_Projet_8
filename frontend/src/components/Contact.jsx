function Contact() {
  return (
    <section className="contact" id="contact">
      <h3>Contact</h3>
      <h4>
        Une question ? N'hesitez pas à m'écrire ! Je vous repondrais en moins de
        24h. À très bientôt !
      </h4>

      <div className="form-container">
        <form className="form" id="contact-form">
          <label htmlFor="nom">Nom :</label>
          <div className="inputBox">
            <input
              type="text"
              id="nom"
              name="user_name"
              placeholder="Votre nom"
              required
            />
          </div>

          <label htmlFor="email">Email :</label>
          <div className="inputBox">
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Votre email"
              required
            />
          </div>

          <label htmlFor="message">Message :</label>
          <div className="inputBox">
            <textarea
              id="message"
              name="message"
              required
              placeholder="Votre message"
            ></textarea>
          </div>

          <input type="submit" value="Envoyer" />
        </form>
      </div>

      <div className="contact-info">
        <div>
          <a href="mailto:remy.grangenois@gmail.com">
            <i className="fa-regular fa-envelope"></i>
            remy.grangenois@gmail.com
          </a>
        </div>
        <div>
          <a href="https://www.google.com/maps/place/Cath%C3%A9drale+Notre-Dame+de+Strasbourg/@48.5817252,7.7480253,17z/data=!3m1!4b1!4m6!3m5!1s0x4796c85253398843:0xe7152777f55e2738!8m2!3d48.5817217!4d7.7505949!16zL20vMDRqNjc2?entry=ttu">
            <i className="fa-solid fa-location-dot"></i>67000 Strasbourg
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
