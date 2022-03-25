import Navbar from "../navbar/Navbar";
import style from "./Header.module.scss";

function Header(props: any) {
  return (
    <div className={style.header}>
      <Navbar isAuth={props.isAuth} login={props.login} />
    </div>
  );
}

export default Header;
