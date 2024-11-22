import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Image, StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default (): React.ReactNode => {
  const { user } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.avatar}
      />
      <View style={styles.person}>
        <Text style={styles.name}>Hello {user}</Text>
      </View>
      <Link href="/(drawer)/" asChild>
        <TouchableHighlight>
          <Text>Touch me</Text>
        </TouchableHighlight>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
  },
  person: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
});
