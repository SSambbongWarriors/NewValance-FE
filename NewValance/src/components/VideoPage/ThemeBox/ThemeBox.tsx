import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import BottomSheet from '../BottomSheet';
import { useRecoilState } from 'recoil';
import { selectedThemeState, themeState } from '../../../store/videoState';
import * as S from './ThemeBox.styles';
import CheckIcon from '../../../assets/images/VideoPage/check.svg';

interface themeInfo {
  title: string;
  desc: string;
}

const themeListInfo = [
  {
    title: '캐주얼 테마',
    desc: '더 재미있고 가볍게 들을 수 있는 어투',
  },
  {
    title: '기본 테마',
    desc: '실제 뉴스 아나운서와 같은 어투',
  },
];

export const ThemeBox = () => {
  const [themeList, setThemeList] = useState<themeInfo[]>(themeListInfo);
  const [isActive, setIsActive] = useRecoilState(themeState);

  return (
    <BottomSheet
      sheetType="theme"
      isActive={isActive}
      setIsActive={setIsActive}
      isTextInputFocused={false}
      setIsTextInputFocused={() => {}}
    >
      <CustomText font={theme.fonts.reg18}>테마 선택</CustomText>
      <S.ThemeListContainer>
        {themeList.map((item, idx) => (
          <ThemeComponent
            key={idx}
            idx={idx}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </S.ThemeListContainer>
    </BottomSheet>
  );
};

const ThemeComponent = ({ idx, title, desc }: themeInfo & { idx: number }) => {
  const [selectedTheme, setSelectedTheme] = useRecoilState(selectedThemeState);
  const isActive = idx === selectedTheme;
  return (
    <S.ThemeContainer
      $isActive={isActive}
      onPress={() => setSelectedTheme(idx)}
    >
      <CheckIcon style={{ opacity: isActive ? 1 : 0 }} />
      <S.TextContainer>
        <CustomText font={theme.fonts.reg18}>{title}</CustomText>
        <CustomText font={theme.fonts.reg14}>{desc}</CustomText>
      </S.TextContainer>
    </S.ThemeContainer>
  );
};
