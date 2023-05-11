import { AspectRatio, Box, Center, Heading, Image, Stack, Text } from "native-base";
import { FunctionComponent } from "react";

type Props = {
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
};

const NewsCard: FunctionComponent<Props> = ({ title, description, url, urlToImage }) => {
    return (
        <Box alignItems="center">
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
                    <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }} alt="image" />
                    </AspectRatio>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                        The Garden City
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
                        Bengaluru (also called Bangalore) is the center of India's high-tech
                        industry. The city is also known for its parks and nightlife.
                    </Text>
                 </Box>
        </Box>
    );
};

export default NewsCard;