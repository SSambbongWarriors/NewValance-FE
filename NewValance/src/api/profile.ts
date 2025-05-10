import { ImagePickerAsset } from 'expo-image-picker';
import { client } from './client';

export const getUserProfile = async () => {
  try {
    const res = await client.get('/api/profile');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeekViewData = async () => {
  try {
    const res = await client.get('/api/profile/week');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchUserProfile = async (
  username?: string,
  image?: ImagePickerAsset
) => {
  const formData = new FormData();
  if (username) {
    formData.append('username', username);
  }
  if (image) {
    formData.append('profileImg', {
      uri: image.uri,
      name: image.fileName ?? 'profile.jpg',
      type: image.mimeType ?? 'image/jpeg',
    });
  }

  try {
    const res = await client.patch('/api/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
