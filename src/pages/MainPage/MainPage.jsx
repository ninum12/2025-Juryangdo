import { Link } from "react-router-dom";
import * as S from "./Mainpage.style";

const MainPage = () => {
  return (
    <S.Root>
      <S.ContentsWrapper>
        <Link to="/test">Go</Link>
      </S.ContentsWrapper>
    </S.Root>
  );
};

export default MainPage;
