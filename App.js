// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import fireStore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB3qWzgksyRfapKYhJarqeo8WQJ4_EiaT8",
    authDomain: "chat-app-71cf7.firebaseapp.com",
    projectId: "chat-app-71cf7",
    storageBucket: "chat-app-71cf7.appspot.com",
    messagingSenderId: "27811903188",
    appId: "1:27811903188:web:882054de0509019abead41",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      {/*Set up the navigation*/}
      <Stack.Navigator initialRouteName="Start">
        {/*Set up the screens*/}
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
