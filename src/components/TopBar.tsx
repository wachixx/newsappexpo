import {StatusBar, Text, View } from "native-base";
import LanguageSelector from "./LanguageSelector";


const TopBar = () => {
    return (
        <>
          <StatusBar barStyle="light-content" /> 
          <View style={{flexDirection: 'row',marginVertical:5, width: 500, alignSelf: 'center', justifyContent: 'space-between'}}> 
             <Text>NewsApp</Text>
             <LanguageSelector/>
          </View>
        </>
    );
};

export default TopBar;