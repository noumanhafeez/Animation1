import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const Basic = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  // For dragging
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(2), -1, true);
  }, []);

  // Gesture handler for drag
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            { height: 100, width: 100, backgroundColor: 'blue' },
            reanimatedStyle,
          ]}
        />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
