import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Keyboard,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface BottomSheetProps {
  sheetType: 'theme' | 'comment';
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  isTextInputFocused: boolean;
  setIsTextInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { sheetType, isActive, setIsActive, children } = props;
  const isCommentSheet = sheetType === 'comment';
  const isTextInputFocused = isCommentSheet ? props.isTextInputFocused : false;
  const setIsTextInputFocused = isCommentSheet
    ? props.setIsTextInputFocused
    : () => {};

  const [panY] = useState(new Animated.Value(0));
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    if (isActive) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [isActive]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // TextInput 영역에서는 PanResponder를 작동시키지 않음
        const { dy } = gestureState;
        return Math.abs(dy) > 10 && !isTextInputFocused;
      },
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 50) {
          closeBottomSheet();
        } else {
          openBottomSheet();
        }
      },
    })
  ).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const openBottomSheet = () => {
    Animated.spring(panY, {
      toValue: -keyboardHeight,
      useNativeDriver: true,
    }).start();
  };

  const closeBottomSheet = () => {
    Animated.spring(panY, {
      toValue: 300,
      useNativeDriver: true,
    }).start();
    setIsActive(false);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsTextInputFocused(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
        setIsTextInputFocused(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      {isActive && (
        <Container>
          <BackgroundBlur onPress={closeBottomSheet} />
          {sheetType === 'comment' && (
            <Animated.View
              style={[
                styles.commentContainer,
                {
                  transform: [{ translateY }],
                  bottom: keyboardHeight,
                },
              ]}
              {...panResponder.panHandlers}
            >
              <Bar />
              {React.Children.map(children, (child) =>
                React.cloneElement(child, { setIsTextInputFocused })
              )}
            </Animated.View>
          )}
          {sheetType === 'theme' && (
            <Animated.View
              style={[
                styles.themeContainer,
                {
                  transform: [{ translateY }],
                },
              ]}
              {...panResponder.panHandlers}
            >
              <Bar />
              {React.Children.map(children, (child) =>
                React.cloneElement(child)
              )}
            </Animated.View>
          )}
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    paddingBottom: 0,

    height: '70%',
    elevation: 5,
    alignItems: 'center',
  },
  themeContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    paddingBottom: 0,

    //height: 210,
    elevation: 5,
    alignItems: 'center',
  },
});

export default BottomSheet;

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  position: absolute;
`;

export const BackgroundBlur = styled.Pressable`
  width: ${width}px;
  height: ${height}px;
  position: absolute;

  background-color: ${theme.colors.black_1};
  opacity: 0.5;
`;

export const Bar = styled.View`
  width: 40px;
  height: 3px;
  border-radius: 50px;
  background-color: ${theme.colors.gray_3};
  margin-top: 16px;
  margin-bottom: 16px;
`;
