import { Box, Button, View } from "native-base";
import { FunctionComponent } from "react";

type Props = {
    title: string;
}

const NewsTopicsSelector: FunctionComponent<Props>  = ({title}) => {
    return (
        <Box alignItems="center">
           <Button variant="outline" onPress={() => console.log("hello world")}>{title}</Button>
        </Box>
    );
};

export default NewsTopicsSelector;