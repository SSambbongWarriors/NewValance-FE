import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import * as S from './DraggableList.styles';
import { useCallback } from 'react';
import { CustomText } from '../common/CustomText';
import theme from '../../styles/theme';
import ListIcon from '../../assets/images/list.svg';

interface DraggableListProps {
  data: Array<string>;
  setData: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DraggableList = ({ data, setData }: DraggableListProps) => {
  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<string>) => {
      return (
        <ScaleDecorator>
          <S.ItemContainer onLongPress={drag} disabled={isActive}>
            <CustomText font={theme.fonts.reg24}>{item}</CustomText>
            <ListIcon />
          </S.ItemContainer>
        </ScaleDecorator>
      );
    },
    []
  );

  return (
    <S.Container>
      <DraggableFlatList
        data={data}
        keyExtractor={(item) => `draggable-item-${item}`}
        onDragEnd={({ data }) => setData(data)}
        renderItem={renderItem}
      />
    </S.Container>
  );
};
