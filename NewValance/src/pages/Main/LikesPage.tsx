import { View } from 'react-native';
import Layout from '../Layout';
import { CustomText } from '../../components/common/CustomText';
import theme from '../../styles/theme';

const LikesPage = () => {
  return (
    <Layout>
      <View>
        <CustomText style={[theme.fonts.bold32, theme.colors.red]}>
          안녕하세용
        </CustomText>
      </View>
    </Layout>
  );
};

export default LikesPage;
