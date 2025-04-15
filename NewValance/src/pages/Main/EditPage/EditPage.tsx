import Layout from '../../Layout';
import * as S from './EditPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import { Button } from '../../../components/common/Button/Button';
import { DraggableList } from '../../../components/EditPage/DraggableList';
import { useEffect, useState } from 'react';
import { Category } from '../../../store/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditPage = () => {
  const [catList, setCatList] = useState<Array<Category>>([
    {
      id: 1,
      name: '정치',
    },
    {
      id: 2,
      name: '경제',
    },
    {
      id: 3,
      name: '세계',
    },
    {
      id: 4,
      name: '생활/문화',
    },
    {
      id: 5,
      name: 'IT/과학',
    },
    {
      id: 6,
      name: '사회',
    },
  ]);

  useEffect(() => {
    const getCatOrder = async () => {
      const res = await AsyncStorage.getItem('cat-order');
      if (res) {
        setCatList(JSON.parse(res));
      }
    };
    getCatOrder();
    // const remove = async () => {
    //   await AsyncStorage.removeItem('cat-order');
    // };
    // remove();
  }, []);

  const saveCatOrder = async () => {
    try {
      await AsyncStorage.setItem('cat-order', JSON.stringify(catList));
      console.log('저장');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <CustomText font={theme.fonts.bold24}>카테고리 정렬</CustomText>
        </S.Header>
        <S.ContentContainer>
          <DraggableList data={catList} setData={setCatList} />
          <Button text="저장하기" isActive={true} onPress={saveCatOrder} />
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
};

export default EditPage;
