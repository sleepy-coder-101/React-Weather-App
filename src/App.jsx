import MainBox from "./components/MainBox";

const App = () => {
  let randomIndex = 1;

  const getRandomImage = () => {
    const size = 5;
    randomIndex = Math.floor(Math.random() * size) + 1;
  };

  getRandomImage();

  return (
    <div
      className="bg-img"
      style={{ backgroundImage: `url("wallpaper/${randomIndex}.jpg")` }}
    >
      <MainBox />
    </div>
  );
};

export default App;
