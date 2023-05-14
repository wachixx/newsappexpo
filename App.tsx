import { FunctionComponent, useState } from "react";
import { NativeBaseProvider } from "native-base";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ArticlesList from "./src/screens/ArticlesList";

import RootStackParamList from './src/navigation/RootStackParamList';
import Article from "./src/screens/Article";
import { LanguageContext, LanguageContextType } from "./src/context/LanguageContext";

const Stack = createNativeStackNavigator<RootStackParamList>();


const App: FunctionComponent = () => {

  const [language, setLanguage] = useState('en');
  const languageContextValue: LanguageContextType = { language, setLanguage };  

  return (
    <LanguageContext.Provider value={languageContextValue}>
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
    </LanguageContext.Provider>
  );
}
export default App;
