import AppsIcon from "@mui/icons-material/Apps";
import ReplyIcon from "@mui/icons-material/Reply";
import "./Header.style.scss";


export default function Header() {
  return (
    <header className="header">
      <AppsIcon className="header__icon" sx={{ color: "#D3D3D3" }} />
      <ReplyIcon className="header__icon" sx={{ color: "#D3D3D3" }} />
      <p className="header__text">Просмотр</p>
      <p className="header__text">Управление</p>
    </header>
  );
}
