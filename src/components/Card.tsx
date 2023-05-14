import { AspectRatio, Box, Center, Container, Heading, Image, Stack, Text } from "native-base";
import { FunctionComponent } from "react";
import { Pressable } from "react-native";

type Props = {
    title?: string;
    author: string;
    description?: string;
    urlToImage?: string;
    url?: string;
    onPress: () => void;
};


const Card : FunctionComponent<Props> = ({ title, author, description, urlToImage, url, onPress}) => {
    return (
        <Center>
            <Container>
                <Pressable onPress={onPress}>
                    <Box my={5} p={4} borderWidth={1} borderColor="#ccc"  borderRadius={5}>
                        <Image source={{uri: urlToImage}} alt="image" style={{minWidth: 250, height: 350}} borderRadius={5}/>
                        <Heading  mt={5}  size="md">
                            {title}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "violet.500"
                            }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" mb={1}>
                            {author}
                        </Text>
                        <Text fontWeight="400">
                            {description}
                        </Text>
                    </Box>
                </Pressable>
            </Container>
        </Center>
    )
}

export default Card;