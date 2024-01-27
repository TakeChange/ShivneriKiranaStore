import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import DonateMoney from '../screen/DonateMoney';
import DonateMapScreen from '../screen/DonateMapScreen';
import Donate from '../screen/Donate';
import DonateScreen from '../screen/DonateScreen';
import Login from '../screen/Login';
import PinsScreen from '../screen/PinsScreen';
import Receive from '../screen/Receive';
import Submit from '../screen/Submit';
import Dashboard from '../screen/Dashboard';
import History from '../screen/History';
import Register from '../screen/Register';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardScreen" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="DonateScreen" component={Donate} options={{ headerShown: false }} />
        <Stack.Screen name="DonateMapScreen" component={DonateMapScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DonateMoneyScreen" component={DonateMoney} options={{ headerShown: false }} />
        <Stack.Screen name="Donate" component={DonateScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HistoryScreen" component={History} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PinsScreen" component={PinsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReceiveScreen" component={Receive} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="SubmitScreen" component={Submit} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default AppNavigation;