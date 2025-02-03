import * as S from "./CircleInSquareCard.style";

export default function CircleInSquareCard({ content, font, fontSize }) {
  return (
    <>
      <S.Wrapper>
        <S.CircleTextWrapper font={font} fontSize={fontSize}>
          {content}
        </S.CircleTextWrapper>
      </S.Wrapper>
    </>
  );
}
