import { NativeBaseProvider } from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArticlesList from "./src/screens/ArticlesList";

import RootStackParamList from './src/navigation/RootStackParamList';
import Article from "./src/screens/Article";

const Stack = createNativeStackNavigator<RootStackParamList>();;

export default function App() {

  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="ArticlesList"
              component={ArticlesList}
              options={{header: () => null}}
            />
            
            <Stack.Screen 
              name="Article" 
              component={Article} 
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );

}
