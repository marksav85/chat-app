import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  // Get the params from the route
  const { name, background, color } = route.params;
  useEffect(() => {
    // Set the title of the screen
    navigation.setOptions({ title: name });
  }, []);

  return (
    // Set the background color of the screen
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={{ color: color }}>Chat Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Set the style of the screen
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
});

export default Chat;
