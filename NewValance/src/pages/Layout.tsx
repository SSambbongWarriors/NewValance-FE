import { useRoute } from '@react-navigation/native';
import { StatusBar, StatusBarStyle, View } from 'react-native';
import theme from '../styles/theme';
import { NavBar } from '../components/common/NavBar/NavBar';
import { Header } from '../components/common/Header/Header';

interface PageConfig {
  header?: boolean;
  navBar?: boolean;
  statusColor?: string;
  barStyle?: StatusBarStyle;
}

const defaultConfig: PageConfig = {
  header: false,
  navBar: false,
  statusColor: theme.colors.white,
  barStyle: 'dark-content',
};

const pageConfig: Record<string, PageConfig> = {
  Home: { header: true, navBar: true },
  Genre: { header: true, navBar: true },
  Likes: { header: true, navBar: true },
  Search: {
    navBar: true,
    statusColor: theme.colors.violet,
    barStyle: 'light-content',
  },
  Video: { navBar: true },
  My: { statusColor: theme.colors.violet, barStyle: 'light-content' },
  ProfileEdit: { statusColor: theme.colors.violet_2 },
  Signin: { statusColor: theme.colors.violet_2 },
} as const;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const route = useRoute();

  const { header, navBar, statusColor, barStyle } = Object.assign(
    {},
    defaultConfig,
    pageConfig[route.name] ?? {}
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={statusColor} barStyle={barStyle} />
      {header && <Header />}
      <View style={{ flex: 1 }}>{children}</View>
      {navBar && <NavBar />}
    </View>
  );
};

export default Layout;
