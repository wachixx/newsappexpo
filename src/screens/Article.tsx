import { FunctionComponent } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import { Box } from "native-base"
import RootStackParamList from '../navigation/RootStackParamList';
import TopBar from '../components/TopBar';
import WebViewBox from '../components/WebViewBox';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Article'>;

const Article: FunctionComponent<ScreenProps> = ({ route, navigation } :  any) => {
    const { url } = route.params;
    return (
      <>
        <Box width='100%' height="100%">
          <TopBar title="NewsApp" subPage={true} onBackBtnPress={()=>navigation.dispatch(CommonActions.goBack())}/>
          <WebViewBox url={url}/>
        </Box>
      </>
    )
}

export default Article
