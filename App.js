import { createStackNavigator } from "@react-navigation/stack";
import Onbording from "./screen/onbording";
import phoneNumber from "./screen/phone-number";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "./screen/signin";
import VerifyNumber from "./screen/verify-number";


export default function App(){
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="onbording" component={Onbording}/>
        <stack.Screen name="phoneNumber" component={phoneNumber}/>
        <stack.Screen name="signin" component={SigninScreen} />
        <stack.Screen name="verify" component={VerifyNumber} />
      </stack.Navigator>
    </NavigationContainer>
  )
}