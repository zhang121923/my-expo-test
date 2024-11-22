import React, { useRef } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

const AnimatedBox = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const twirl = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null, 
          { dx: position.x, dy: position.y }
        ], 
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.sequence([
          Animated.decay(position, {
            velocity: { x: gestureState.vx, y: gestureState.vy },
            deceleration: 0.997,
            useNativeDriver: true,
          }),
          Animated.parallel([
            Animated.spring(position, {
              toValue: { x: 0, y: 0 },
              useNativeDriver: true,
            }),
            Animated.timing(twirl, {
              toValue: 360,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
        ]).start(() => twirl.setValue(0)); // reset twirl angle
      },
    })
  ).current;

  const rotation = twirl.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              { translateX: position.x },
              { translateY: position.y },
              { rotate: rotation },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default AnimatedBox;