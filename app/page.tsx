export default function Home() {
  return (
    <main className="page">
      <div className="aurora auroraOne" aria-hidden="true" />
      <div className="aurora auroraTwo" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <div className="moon" aria-hidden="true" />

      <svg className="mountains back" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 420V300L135 205l86 68 145-151 122 112 142-170 172 188 122-105 116 83 126-133 176 132 96-65v236Z" />
      </svg>
      <svg className="mountains front" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 420V338l155-105 111 78 124-111 108 72 156-166 125 126 108-79 131 102 111-121 111 78 100-57v270Z" />
      </svg>

      <header className="brand">
        <div className="seal" aria-hidden="true"><span /><span /><span /></div>
        <p>OPALINE</p>
        <small>ALASKA · EST. 2026</small>
      </header>

      <section className="hero">
        <p className="eyebrow">WELCOME TO THE NORTH</p>
        <h1>OPALINE</h1>
        <div className="rule"><span /></div>
        <p className="tagline">A world of stories, secrets, and lives waiting to be lived.</p>

        <div className="network">
          <article className="networkCard medical">
            <div className="medicalMark"><span>+</span><i /><b /></div>
            <div>
              <p className="cardKicker">OPALINE · COMMUNITY</p>
              <h2>Medical Center</h2>
              <p>Care, emergency medicine, and the people who keep Opaline moving.</p>
            </div>
          </article>

          <article className="networkCard responders">
            <div className="responderBadge">
              <strong>OPALINE</strong>
              <em>★</em>
              <small>FIRST RESPONDERS</small>
              <em>★</em>
              <label>FIRE · EMS · POLICE</label>
            </div>
            <div>
              <p className="cardKicker">OPALINE · PUBLIC SAFETY</p>
              <h2>First Responders</h2>
              <p>The people answering the call when Opaline needs them most.</p>
            </div>
          </article>
        </div>

        <div className="portal">
          <p className="portalTitle">THE CITY IS PREPARING</p>
          <p className="portalText">
            Our doors are open, and the rest of Opaline is coming together.
            Links to our individual sites and subdomains will be available here shortly.
          </p>
          <div className="coming">
            <i /><span>SUBDOMAIN LINKS · COMING SHORTLY</span><i />
          </div>
        </div>
      </section>

      <div className="northStar" aria-hidden="true">✦</div>

      <footer>
        <span>OPALINE</span>
        <b>THE LAST LIGHT NORTH</b>
        <span>2026</span>
      </footer>
    </main>
  );
}
