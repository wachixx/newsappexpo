import { Badge, Center, HStack, Pressable } from "native-base";
import { FunctionComponent, useEffect, useState } from "react";

var defaultTopics: string[] = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];

type Props = {
    key: number;
    title: string;
    onTopicChange?: (value: string) => void;
    active: string
}

type TopicProps = {
    onTopicChange?: (value: string) => void;
}

export const TopicBadge: FunctionComponent<Props>  = ({key, title, onTopicChange, active}) => {

    const changeActiveTopic =(topic: string)=>{
        onTopicChange(topic)
    }
    return (
        <Pressable onPress={()=>changeActiveTopic(title)}>
            <Badge key={key} variant={active === title ? 'solid' : 'outline'} colorScheme="info">{title}</Badge>
        </Pressable>
    );
};

export const TopicSelectorWrapper: FunctionComponent<TopicProps>   = ({onTopicChange}) => {

    const [activeTopic, setActiveTopic] = useState('apple');

    const handleTopicChange = (value: string) => {
        setActiveTopic(value)
        onTopicChange(value)
    };

    //Force a rerender when a new chip is clicked. This can be done better? yes.
    useEffect(()=> {
    }, [activeTopic])

    return (
        <Center mt={5}>
            <HStack space={3} alignItems="center">
                {defaultTopics.map((item, index)=> {
                    return(
                        <TopicBadge key={index} title={item} onTopicChange={handleTopicChange} active={activeTopic}/>
                    )
                })}
            </HStack>
        </Center>
    );
}