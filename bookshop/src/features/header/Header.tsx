import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  NotificationIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../../assets";
import { useAppSelector } from "../../store/hooks";
import { getCartInfo } from "../../store/selectors";
import { AppPages } from "../../routes";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import style from "./Header.module.css";

export const Header: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { cart } = useAppSelector(getCartInfo);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    navigate(`/bookshop/search/${data.title}/1`);
  };
  return (
    <header className={style.wrapper}>
      <div className={style.logo}>
        <Link to={AppPages.HOME} className={style.link}>
          <p className={style.logoName}>bookshop</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <input
          className={style.input}
          type="text"
          placeholder="Search"
          {...register("title", {
            required: true,
            minLength: 1,
            maxLength: 24,
            pattern: /^[A-Za-z]+$/i,
          })}
        ></input>
        <ButtonPrimary type="submit" className={style.button}>
          <SearchIcon></SearchIcon>
        </ButtonPrimary>
      </form>
      <nav className={style.nav}>
        <Link to={AppPages.SHOPPING_CART}>
          <ShoppingIcon></ShoppingIcon>
          {cart.length !== 0 ? (
            <div className={style.notificationContainer}>
              <NotificationIcon className={style.pic}></NotificationIcon>
            </div>
          ) : (
            <div></div>
          )}
        </Link>
        <Link to={AppPages.ACCOUNT}>
          <UserIcon></UserIcon>
        </Link>
      </nav>
    </header>
  );
};
