import { createStackNavigator } from "@react-navigation/stack";
import Onbording from "./screen/onbording";
import phoneNumber from "./screen/phone-number";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "./screen/signin";
import VerifyNumber from "./screen/verify-number";
import SelectLocation from "./screen/select-location";
import LoginScreen from "./screen/login";
import SignupScreen from "./screen/signup";
import HomeScreen from "./screen/home";

export default function App(){
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="onbording" component={Onbording}/>
        <stack.Screen name="phoneNumber" component={phoneNumber}/>
        <stack.Screen name="signin" component={SigninScreen} />
        <stack.Screen name="verify" component={VerifyNumber} />
        <stack.Screen name="location" component={SelectLocation} />
        <stack.Screen name="login" component={LoginScreen} />
        <stack.Screen name="signup" component={SignupScreen} />
        <stack.Screen name="home" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}