import { Header } from "../features/header/Header";
import { Footer } from "../ui/footer/Footer";
import style from "./Template.module.css";

type ContentTemplateProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export const Template: React.FC<ContentTemplateProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};