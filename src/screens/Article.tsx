import {WebView} from 'react-native-webview';
import { Text, View } from "native-base"
import { Platform } from 'react-native';

const Article = ({ route }) => {
    const { url } = route.params;
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            {Platform.OS === 'web'?
              <iframe src={url} height="100%" width="100%"/>
               :
               <WebView
               originWhitelist={['*']} 
               source={{
                 uri: url, baseUrl:''
               }}
               style={{width:"100%", height: '100%'}}
               />
            }       
        </View>
    )
}

export default Article
