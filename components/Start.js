import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  // Set the states
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const auth = getAuth();

  // Sign in anonymously
  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          name: name,
          background: background,
          userID: result.user.uid,
        });
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <View style={styles.container}>
      {/*Set the background image*/}
      <ImageBackground
        source={require("../assets/background-image.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/*Set the title*/}
        <Text style={styles.title}>Chat App</Text>
        {/*Set the input fields*/}
        <View style={styles.inputContainer}>
          <TextInput
            // add accessibility to text input
            accessible={true}
            accessibilityLabel="input name"
            accessibilityHint="Sets the title of the chat screen to the name entered in the text box"
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          {/*Set the background color options using touchable opacity as customised button*/}
          <Text style={styles.bgText}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              // add accessibility to background color option buttons
              accessible={true}
              accessibilityLabel="Black background color"
              accessibilityHint="Sets the background color to of the chat screen to black"
              accessibilityRole="button"
              style={[styles.colorButton, styles.color1]}
              onPress={() => {
                setBackground("#090C08");
              }}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Purple background color"
              accessibilityHint="Sets the background color to of the chat screen to purple"
              accessibilityRole="button"
              style={[styles.colorButton, styles.color2]}
              onPress={() => {
                setBackground("#474056");
              }}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Grey background color"
              accessibilityHint="Sets the background color to of the chat screen to grey"
              accessibilityRole="button"
              style={[styles.colorButton, styles.color3]}
              onPress={() => {
                setBackground("#8A95A5");
              }}
            />
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Olive green background color"
              accessibilityHint="Sets the background color to of the chat screen to olive green"
              accessibilityRole="button"
              style={[styles.colorButton, styles.color4]}
              onPress={() => {
                setBackground("#B9C6AE");
              }}
            />
          </View>
          {/*Set the start chatting button*/}
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Start Chatting"
            accessibilityHint="Button navigates to the chat screen"
            accessibilityRole="button"
            style={styles.button}
            onPress={signInUser} // Call the sign in function
          >
            {/*Set the button text*/}
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* Set the keyboard avoiding view for IOS to avoid keyboard covering textbox*/}
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  // Set the style of the screen
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "99%",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 100,
  },
  inputContainer: {
    width: "88%",
    height: "44%",
    backgroundColor: "#FFFFFF",
    paddingBottom: 30,
    paddingTop: 30,
    alignItems: "center",
    margin: 30,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 50,
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
  },
  bgText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 100,
    alignSelf: "flex-start",
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  color1: {
    backgroundColor: "#090C08",
  },
  color2: {
    backgroundColor: "#474056",
  },
  color3: {
    backgroundColor: "#8A95A5",
  },
  color4: {
    backgroundColor: "#B9C6AE",
  },
  button: {
    backgroundColor: "#757083",
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Start;
