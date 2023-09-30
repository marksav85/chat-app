import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");
  const [color, setColor] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background-image.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.bgText}>Choose Background Color:</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[styles.colorButton, styles.color1]}
              onPress={() => {
                setBackground("#090C08");
                setColor("white");
              }}
            />
            <TouchableOpacity
              style={[styles.colorButton, styles.color2]}
              onPress={() => {
                setColor("#FFFFFF");
                setBackground("#474056");
              }}
            />
            <TouchableOpacity
              style={[styles.colorButton, styles.color3]}
              onPress={() => {
                setColor("#FFFFFF");
                setBackground("#8A95A5");
              }}
            />
            <TouchableOpacity
              style={[styles.colorButton, styles.color4]}
              onPress={() => {
                setColor("#FFFFFF");
                setBackground("#B9C6AE");
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", {
                name: name,
                background: background,
                color: color,
              })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
