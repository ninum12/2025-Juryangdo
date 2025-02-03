import * as S from "./AlcoholDisplayCard.style";
import { ALCOHOL_DISPLAY_LIST } from "../../database/AlcoholDisplayList";

export default function AlcoholDisplayCard() {
  return (
    <S.Wrapper>
      {ALCOHOL_DISPLAY_LIST.map((type, typeIndex) => (
        <S.AlcoholCellWrapper key={typeIndex}>
          {type.map((cell, cellIndex) => (
            <>
              {cell.isImage ? (
                <S.AlcoholCell
                  key={`${typeIndex}-${cellIndex}`}
                ></S.AlcoholCell>
              ) : (
                <S.EmptyLightGrayCell></S.EmptyLightGrayCell>
              )}
            </>
          ))}
        </S.AlcoholCellWrapper>
      ))}
    </S.Wrapper>
  );
}
