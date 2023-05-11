import { AspectRatio, Box, Center, Heading, Image, Stack, Text } from "native-base";
import { FunctionComponent } from "react";
import { Pressable } from "react-native";

type Props = {
    title?: string;
    description?: string;
    urlToImage?: string;
    url?: string;
    onPress: () => void;
};

const NewsCard: FunctionComponent<Props> = ({ title, description, urlToImage, url, onPress}) => {
    return (
        <Pressable onPress={onPress}>
        <Box alignItems="center" style={{marginVertical: 20}}>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
                }} 
                _web={{
                shadow: 2,
                borderWidth: 0
                }} _light={{
                backgroundColor: "gray.50"
                }}>
                </Box>
                <Box>
                    <AspectRatio w="100%" ratio={8 / 3}>
                        <Image source={{uri: urlToImage}} alt="image" style={{width: 200, height: 200}} />
                    </AspectRatio>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                           {title}
                        </Heading>
                        <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                        </Text>
                   </Stack>
                   <Text fontWeight="400">
                        {description}
                    </Text>
                </Box>
        </Box>
        </Pressable>
    );
};

export default NewsCard;