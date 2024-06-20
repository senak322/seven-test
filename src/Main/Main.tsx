import "./Main.style.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__wrapper">
          <div>
            <p className="main__name">Название проекта</p>
            <p className="main__name main__name-small">Аббревиатура</p>
          </div>
          <KeyboardArrowDownIcon sx={{ color: "#D3D3D3" }} />
        </div>
        <div className="main__wrapper">Строительно-монтажные работы</div>
      </div>
    </main>
  );
}
