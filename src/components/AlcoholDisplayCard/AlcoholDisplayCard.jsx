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
                  // src={cell.img}
                >
                  <img
                    src={cell.img}
                    style={{
                      height: "100%",
                      maxHeight: "80px",
                      padding: "5px",
                    }}
                  />
                </S.AlcoholCell>
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
