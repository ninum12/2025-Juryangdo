import { Link } from "react-router-dom";
import * as S from "./Mainpage.style";

export default function MainPage() {
  return (
    <S.Root>
      <S.Container>
        <Link to="/test">Go</Link>
      </S.Container>
      <S.Container></S.Container>
      <S.Container></S.Container>
    </S.Root>
  );
}
