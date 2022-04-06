import Navbar from "../navbar/Navbar";
import style from "./Header.module.scss";

type HeaderProps = {
  isAuth: boolean
  login: string | null
}

function Header(props: HeaderProps) {
  return (
    <div className={style.header}>
      <Navbar isAuth={props.isAuth} login={props.login} />
    </div>
  );
}

export default Header;
