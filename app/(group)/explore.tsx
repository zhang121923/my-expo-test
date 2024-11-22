import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, useLocalSearchParams, router } from 'expo-router';
import AnimatedBox from '@/components/AnimateBox';

export default function TabTwoScreen() {
  const { name } = useLocalSearchParams<{name?: string, age: string}>();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <View>
        <Text>{name || 'no name'}</Text>
      </View>
      {/* <AnimatedBox /> */}
      {/* <Link href={"/"} asChild> */}
        <Pressable onPress={() => {
          router.canGoBack()
        }}>
          <Text style={styles.btn}>Press me</Text>
        </Pressable>
      {/* </Link> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    color: "grey",
    fontSize: 20,
    fontWeight: 'bold',
  }
});
