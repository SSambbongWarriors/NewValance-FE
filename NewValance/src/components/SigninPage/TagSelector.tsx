import { useState } from 'react';
import theme from '../../styles/theme';
import { CustomText } from '../common/CustomText';
import * as S from './TagSelector.styles';

const tagData = {
  정치: [
    '국회',
    '선거',
    '정부',
    '법원',
    '대통령',
    '보수',
    '진보',
    '비리',
    '외교',
    '안보',
    '지방자치',
    '시위',
  ],
  사회: [
    '교육',
    '복지',
    '노동',
    '환경',
    '여성',
    '청년',
    '노인',
    '장애인',
    '의료',
    '범죄',
    '교통',
  ],
  경제: [
    '주식',
    '부동산',
    '투자',
    '금리',
    '산업',
    '환율',
    '세금',
    'GDP',
    '수출입',
    '일자리',
    '소비',
    '소득',
  ],
  'IT/과학': [
    '인공지능',
    '빅데이터',
    '블록체인',
    '클라우드',
    '사물인터넷',
    '메타버스',
    '가상현실',
    '증강현실',
    '데이터센터',
    '해킹',
    '과학',
    '스마트폰',
  ],
  국제: [
    '미국',
    '중국',
    '일본',
    '유럽',
    '중동',
    '북한',
    '러시아',
    'UN',
    '전쟁',
    '난민',
    '기후협약',
    '국제법',
  ],
  '생활/문화': [
    '예술',
    '영화',
    '음악',
    '공연',
    '문학',
    '전통',
    '역사',
    '건축',
    '패션',
    '문화유산',
    '날씨',
  ],
};

interface TagSelectorProps {
  tagList: Set<string>;
  setTagList: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const TagSelector = ({ tagList, setTagList }: TagSelectorProps) => {
  const [selectedCat, setSelectedCat] = useState<keyof typeof tagData>('정치');

  const onPressCat = (cat: keyof typeof tagData) => {
    setSelectedCat(cat);
  };

  const toggleItem = (item: string) => {
    setTagList((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        if (tagList.size < 5) {
          newSet.add(item);
        }
      }
      return new Set(newSet);
    });
  };

  return (
    <S.Container>
      <S.CategoryList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        data={Object.keys(tagData)}
        renderItem={({ item }: { item: keyof typeof tagData }) => (
          <S.Category
            key={item}
            $isActive={selectedCat === item}
            onPress={() => onPressCat(item)}
          >
            <CustomText font={theme.fonts.bold20} color={theme.colors.violet}>
              {item}
            </CustomText>
          </S.Category>
        )}
      />
      <S.TagList style={{ flexWrap: 'wrap' }}>
        {tagData[selectedCat].map((item: string) => (
          <S.Tag
            key={item}
            $isActive={tagList.has(item)}
            $isFull={tagList.size > 4}
            onPress={() => {
              toggleItem(item);
            }}
          >
            <CustomText
              font={theme.fonts.reg18}
              color={
                tagList.has(item)
                  ? theme.colors.white
                  : tagList.size < 5
                  ? theme.colors.violet
                  : theme.colors.gray_3
              }
            >
              {item}
            </CustomText>
          </S.Tag>
        ))}
      </S.TagList>
    </S.Container>
  );
};
