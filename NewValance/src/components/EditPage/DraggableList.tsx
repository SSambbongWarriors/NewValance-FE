import * as S from './DraggableList.styles';

import { CustomText } from '../common/CustomText';
import theme from '../../styles/theme';
import ListIcon from '../../assets/images/list.svg';

import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

interface DraggableListProps {
  data: Array<string>;
  setData: React.Dispatch<React.SetStateAction<string[]>>;
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

  async function onReordered(fromIndex: number, toIndex: number) {
    const finalIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
    const copy = [...data];
    const removed = copy.splice(fromIndex, 1);

    copy.splice(finalIndex, 0, removed[0]);
    setData(copy);
  }

  return (
    <S.Container>
      <DragList
        contentContainerStyle={{ gap: 12 }}
        data={data}
        keyExtractor={(item) => `draggable-item-${item}`}
        onReordered={onReordered}
        renderItem={renderItem}
      />
    </S.Container>
  );
};
