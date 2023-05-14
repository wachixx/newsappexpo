import { Center, HStack, Spinner } from "native-base";
import { FunctionComponent } from "react";

const Loader:FunctionComponent  = () => {
    return(
        <Center>
            <HStack alignItems="center" mt={100}>
            <Spinner/>
            </HStack>
        </Center>
    )
}

export default Loader;