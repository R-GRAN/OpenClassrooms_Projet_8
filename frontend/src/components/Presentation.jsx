import emoji from "@/assets/images/emoji.webp";

function Presentation() {
  return (
    <section id="presentation">
      <h3>Qui suis-je ?</h3>
      <div className="presentation-details">
        <img
          className="presentation-img"
          src={emoji}
          alt="dessin représentant Rémy"
        />
        <p className="presentation-text">
          "Suite à mon désir de reconversion dans le monde du développement web
          puis à sa concrétisation en me formant grâce à OpenClassrooms, j'ai pu
          acquérir de nombreuses compétences que je souhaite désormais exploiter
          en créant des sites et applications web . Découvrir, apprendre,
          maîtriser, créer, partager, tels sont mes objectifs. Je vous invite à
          jeter un oeil aux projets que j'ai pu réaliser dans le cadre de ma
          formation de Développeur Web chez OpenClassrooms, ainsi qu'aux
          compétences que j'ai acquises suite à cette formation."
        </p>
      </div>
    </section>
  );
}

export default Presentation;
