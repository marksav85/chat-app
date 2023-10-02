import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { KeyboardAvoidingView, Platform } from "react-native";

const Chat = ({ route, navigation }) => {
  // Get the params from the route
  const { name, background, color } = route.params;
  // Set the messages state
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    // Custom function to call setMessages with new messages which appends to the existing messages
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };
  // Function to customise chat bubble
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  useEffect(() => {
    // Set the title of the screen
    navigation.setOptions({ title: name });
  }, []);

  useEffect(() => {
    // Set the messages following the GiftedChat format
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <GiftedChat
        messages={messages}
        // Render customised chat bubble
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {/* Set the keyboard avoiding view for Android to avoid keyboard covering textbox*/}
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );

  /* return (
    // Set the background color of the screen
    <View style={[styles.container, { backgroundColor: background }]}>
      <Text style={{ color: color }}>Chat Screen</Text>
    </View>
  ); */
};

const styles = StyleSheet.create({
  // Set the style of the screen
  container: {
    flex: 1,
    /* justifyContent: "center",
    alignItems: "center", */
  },
  text: {
    flex: 1,
  },
});

export default Chat;
