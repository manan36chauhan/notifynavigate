import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';
import ProductDetail from './Screens/ProductDetail';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import NavigationService from './NavigationService';

const Stack = createNativeStackNavigator();

export function Route() {
  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
