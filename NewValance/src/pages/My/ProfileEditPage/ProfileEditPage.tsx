import { useEffect, useState } from 'react';
import { CustomText } from '../../../components/common/CustomText';
import { NameInput } from '../../../components/SigninPage/NameInput';
import theme from '../../../styles/theme';
import * as S from './ProfileEditPage.styles';
import { Button } from '../../../components/common/Button/Button';
import { Keyboard, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useUser } from '../../../hooks/useUser';
import { getIsDuplicated } from '../../../api/auth';
import { patchUserProfile } from '../../../api/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileEditPage = () => {
  const { user, saveUser } = useUser();
  const [name, setName] = useState<string>(user?.username || '');
  const [profileImage, setProfileImage] =
    useState<ImagePicker.ImagePickerAsset>();
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);
  const [isKeyboardActive, setIsKeyboardActive] = useState<boolean>(false);

  const navigate = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardActive(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardActive(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0]);
    }
  };

  const saveProfile = async () => {
    try {
      let res;
      if (name == user?.username) {
        res = await patchUserProfile(undefined, profileImage);
      } else {
        const checkUsername = await getIsDuplicated(name);
        if (checkUsername.available) {
          res = await patchUserProfile(name, profileImage);
        } else {
          setIsDuplicated(true);
        }
      }
      const newUser = {
        username: res.username,
        profileImgUrl: res.profileImgUrl,
      };
      saveUser(newUser);
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error(error);
    }
    console.log('저장');
    navigate.goBack();
  };

  return (
    <S.Container>
      <CustomText font={theme.fonts.bold24}>개인정보 수정</CustomText>
      <S.ContentContainer>
        <Pressable onPress={pickImage}>
          <S.ProfileImage
            source={
              profileImage
                ? { uri: profileImage.uri }
                : { uri: user?.profileImgUrl }
            }
          />
        </Pressable>
        <NameInput name={name} setName={setName} isDuplicated={isDuplicated} />
      </S.ContentContainer>
      {!isKeyboardActive && (
        <S.ButtonWrapper>
          <Button text="저장하기" isActive={true} onPress={saveProfile} />
        </S.ButtonWrapper>
      )}
    </S.Container>
  );
};

export default ProfileEditPage;
