import "./Nav.scss";

export default function Nav() {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <a href="#">Контрагентам</a>
        <a href="#">Дизайнерам</a>
        <a href="#">Вакансии</a>
      </div>
      <div className="logo">
        <img src="/image/logo.png" alt="logo" />
      </div>
      <div className="nav_right">
        <div className="search">
          <img src="/icons/search.svg" alt="search" />
          <span>Поиск</span>
        </div>
        <div className="auth">Вход/Регистрация</div>
        <div className="inter">
          <img src="/icons/user.svg" alt="user" />
          <img src="/icons/heart.svg" alt="user" />
        </div>
      </div>
    </div>
  );
}
