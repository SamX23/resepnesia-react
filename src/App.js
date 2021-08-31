const header_grid = {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 2rem",
};

const nav_left = {};
const nav_right = {};

const footer_container = {
  margin: "0 2rem",
};

const footer_grid = {
  display: "grid",
};

function App() {
  return (
    <>
      <header style={header_grid}>
        <nav style={nav_left}>
          <img />
          <span>Resep</span>
          <span>Daerah</span>
          <span>Blog</span>
          <span>Tentang</span>
        </nav>
        <nav style={nav_right}>
          <span>Daftar</span>
          <span>Masuk</span>
          <i className="icon-search"></i>
          <i className="icon-bookmark"></i>
        </nav>
      </header>
      <main className="main_grid">
        <div>Hero section</div>
        <div>Populer section</div>
        <div>Video highlight section</div>
        <div>Memasak item section</div>
        <div>Daerah section</div>
        <div>Blog tips section</div>
        <div>Quote section</div>
        <div>Blog section</div>
        <div>Review section</div>
      </main>
      <footer style={footer_container}>
        <div style={footer_grid}>
          <div>Footer desc</div>
          <div>Footer nav</div>
          <div>Footer logo</div>
          <div>Footer utils</div>
        </div>
        <div>Footer copyright</div>
      </footer>
    </>
  );
}

export default App;
