import "./App.css";

function App() {
  return (
    <>
      <header className="header__grid container">
        <nav className="header__right flex--center--gap">
          <h1 className="header__title">
            <span className="color--primary">Resep</span>
            <span>nesia</span>
          </h1>
          <span>Resep</span>
          <span>Daerah</span>
          <span>Blog</span>
          <span>Tentang</span>
        </nav>
        <nav className="header__left flex--center--gap">
          <span>Daftar</span>
          <span>Masuk</span>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="bookmark-outline"></ion-icon>
        </nav>
      </header>
      <main className="main__grid">
        <div className="full--height">
          <div className="container">
            <div className="hero__left">
              <div className="hero__title">
                <h1>Buat Masakan Nusantara Khas Daerahmu.</h1>
                <p>Melestarikan masakan tradisional merupakan kewajiban kita</p>
              </div>
              <div className="hero__searchBox">
                <input type="text" placeholder="Cari resep" />
                <div>
                  <span>Paling populer: </span>
                  <span>Rendang</span>
                  <span>Onde - onde</span>
                  <span>Bakpia Keju</span>
                </div>
              </div>
            </div>
            <div className="hero__right">
              <div className="hero__imageGrid">
                <img src="#" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>Populer section</div>
        <div>Video highlight section</div>
        <div>Memasak item section</div>
        <div>Daerah section</div>
        <div>Blog tips section</div>
        <div>Quote section</div>
        <div>Blog section</div>
        <div>Review section</div>
      </main>
      <footer className="footer__container">
        <div className="container">
          <div className="footer__grid">
            <div>Footer desc</div>
            <div>Footer nav</div>
            <div>Footer logo</div>
            <div>Footer utils</div>
          </div>
          <div className="footer__copyright">Footer copyright</div>
        </div>
      </footer>
    </>
  );
}

export default App;
