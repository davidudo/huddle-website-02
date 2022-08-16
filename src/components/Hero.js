import mockup_illustration from "../assets/images/illustration-mockups.svg";

function Hero() {
  return (
    <div className="container hero-section">
      <section>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </section>
      <img src={ mockup_illustration } alt="Mockup illustration of a software" />
    </div>
  );
}

export default Hero;
