import { FunctionComponent } from "react";
import { Platform } from "react-native";
import {WebView} from 'react-native-webview';

type Props = {
    url: string;
}

const WebViewBox: FunctionComponent<Props> = ({url}) => {
    return(
        <>
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
        </>
    )
}

export default WebViewBox;