import { Link } from "react-router-dom";
import * as S from "./MainPage.style";
import { CircleInSquareCard, AlcoholDisplayCard } from "../../components";

export default function MainPage() {
  return (
    <S.Root>
      <S.Container>
        <S.CircleInSquareWrapper>
          <CircleInSquareCard
            content={"酒量"}
            font={"KoPubWorldBatang"}
            fontSize={"96px"}
          />
          <S.VerticalLongRectangle></S.VerticalLongRectangle>
        </S.CircleInSquareWrapper>
        <AlcoholDisplayCard />
      </S.Container>
      <S.Container>
        <Link to="/test">Go</Link>
      </S.Container>
      <S.Container></S.Container>
    </S.Root>
  );
}
