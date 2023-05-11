import { Box, Button, View } from "native-base";
import { FunctionComponent } from "react";

type Props = {
    color: string;
}

const ThemeColor: FunctionComponent<Props>  = ({color}) => {
    return (
        <View style={{width: 20, height: 20, backgroundColor: color}}>
        </View>
    );
};

export default ThemeColor;