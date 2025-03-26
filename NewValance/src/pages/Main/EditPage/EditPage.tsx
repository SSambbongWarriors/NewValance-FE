import { View } from 'react-native';
import Layout from '../../Layout';
import * as S from './EditPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import { Button } from '../../../components/common/Button/Button';
import { Text } from 'react-native';
import { DraggableList } from '../../../components/EditPage/DraggableList';
import { useState } from 'react';

const EditPage = () => {
  const [catList, setCatList] = useState<Array<string>>([
    '정치',
    '경제',
    '사회',
    '생활/문화',
    'IT/과학',
    '세계',
  ]);

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <CustomText font={theme.fonts.bold24}>카테고리 정렬</CustomText>
        </S.Header>
        <S.ContentContainer>
          <DraggableList data={catList} setData={setCatList} />
          <Button
            text="저장하기"
            isActive={true}
            onPress={() => console.log('저장')}
          />
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default EditPage;
