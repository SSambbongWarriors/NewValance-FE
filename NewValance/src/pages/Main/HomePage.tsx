import { View } from 'react-native';
import { CustomText } from '../../components/common/CustomText';
import theme from '../../styles/theme';

const HomePage = () => {
  return (
    <View>
      <CustomText style={[theme.fonts.bold32, theme.colors.red]}>
        안녕하세용
      </CustomText>
    </View>
  );
};

export default HomePage;
