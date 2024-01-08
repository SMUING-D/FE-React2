import { PART_INFOS } from '../../constants/part';
import React, { useState } from 'react';
import * as S from './partIntro.style';

function PartIntro() {
  const [selectedPart, setSelectedPart] = useState({ part: '기획' });

  const handleButtonClick = part => {
    setSelectedPart(part);
  };

  return (
    <S.Container>
      <S.PartBox>
        <S.PartNav>
          {PART_INFOS.map(info => (
            <button
              key={info.part}
              onClick={() => handleButtonClick(info)}
              className={selectedPart.part === info.part ? 'selected' : ''}
            >
              {info.part}
            </button>
          ))}
        </S.PartNav>
        <S.PartContents>
          {selectedPart && (
            <p>
              {
                PART_INFOS.find(info => info.part === selectedPart.part)
                  .description
              }
            </p>
          )}
        </S.PartContents>
      </S.PartBox>
    </S.Container>
  );
}

export default PartIntro;
