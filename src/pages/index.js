import data from "@/config/constants";

export default function Home() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p className="text-style" style={{ textAlign: "justify" }}>
          {data.aboutme}
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i do</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg"
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile App Development</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web App development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="./assets/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                He was hired to create a corporate identity. We were very
                pleased with the work done. He has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
