import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Head from "./Head";

export default function App() {
  return (
    <div>
      <div className="box">
        <Search />
        <Head />
        <Weather />

        <p class="git-code">
          <a href="https://github.com/Raluca158/weather-app-react" target="_blank" rel="noreferrer">
            Open-source code
          </a>{" "}
          by Raluca Popescu
        </p>
      </div>
    </div>
  );
}
