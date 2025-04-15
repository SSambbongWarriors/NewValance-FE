import * as S from './DraggableList.styles';

import { CustomText } from '../common/CustomText';
import theme from '../../styles/theme';
import ListIcon from '../../assets/images/list.svg';

import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { Category } from '../../store/interfaces';

interface DraggableListProps {
  data: Array<Category>;
  setData: React.Dispatch<React.SetStateAction<Category[]>>;
}

export const DraggableList = ({ data, setData }: DraggableListProps) => {
  const renderItem = (info: DragListRenderItemInfo<string>) => {
    const { item, onStartDrag, isActive } = info;

    return (
      <S.ItemContainer onLongPress={onStartDrag} disabled={isActive}>
        <CustomText font={theme.fonts.reg20}>{item}</CustomText>
        <ListIcon />
      </S.ItemContainer>
    );
  };

  const onReordered = async (fromIndex: number, toIndex: number) => {
    const nameList = data.map((item) => item.name);
    const [moved] = nameList.splice(fromIndex, 1);
    nameList.splice(toIndex, 0, moved);

    const reordered = nameList.map(
      (name) => data.find((c) => c.name === name)!
    );
    setData(reordered);
  };

  return (
    <S.Container>
      <DragList
        contentContainerStyle={{ gap: 12 }}
        data={data.map((item) => item.name)}
        keyExtractor={(item) => `draggable-item-${item}`}
        onReordered={onReordered}
        renderItem={renderItem}
      />
    </S.Container>
  );
};
