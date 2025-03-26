import { GestureResponderEvent, Image, Pressable } from 'react-native';

interface IconProps {
  src: any;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

export const Icon = ({ src, onPress }: IconProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={require(src)} />
    </Pressable>
  );
};
