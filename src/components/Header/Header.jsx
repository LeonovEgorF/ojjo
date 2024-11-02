import "./header.scss";
import Nav from "./Nav/Nav";
import Button from "../Layout/Button/Button";

export default function Header() {
  return (
    <div className="container_haeder">
      <nav>
        <Nav />
      </nav>
      <div className="title">
        <h1>Долго, дорого, богато!</h1>
        <Button>каталог изделий</Button>
      </div>
      <div className="header_footer"></div>
    </div>
  );
}
