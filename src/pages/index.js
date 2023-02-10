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
          {data.whatido.map((wid, index) => (
            <li className="service-item" key={index.toString()}>
              <div className="service-icon-box">
                <img src={wid.icon} alt={wid.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{wid.title}</h4>
                <p className="service-item-text">{wid.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
