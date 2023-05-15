import { FunctionComponent, useCallback, useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Box, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import RootStackParamList from "../navigation/RootStackParamList";
import Card from "../components/Card";
import TopBar from "../components/TopBar";
import { TopicSelectorWrapper } from "../components/TopicsSelector";
import request from "../services/request";
import getDates from "../utils/getDates";
import { LanguageContext } from "../context/LanguageContext";
import Loader from "../components/Loader";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ArticlesList'>;

const  ArticlesList: FunctionComponent<ScreenProps>  = ({navigation}) => {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [topic, setTopic] = useState('apple');
  const [error, setError] = useState('');

  const { language } = useContext(LanguageContext);
  const { today, aWeekAgo } = getDates();

  const handleTopicChange = (value: string) => {
    setTopic(value);
  };

  const fetchData = useCallback(async () => {
    try{
      setLoading(true);
      const { data } = await request.get(`everything?q=${topic}&from=${aWeekAgo}&to=${today}&language=${language}`);
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      if (error.response) {
         setError(error.response.data.message);
         setLoading(false);
      }
    }
  }, [topic, language]);

  useEffect (() => {
    fetchData()
      .catch(console.error);
  }, [topic, language]);

  return (
        <>
            <TopBar title="NewsApp" subPage={false}/>
            <TopicSelectorWrapper onTopicChange={handleTopicChange}/>

            {loading ? 
              <Loader/>
            :
            <>
              {error !== "" ? 
                 <Box m={20}><Text>{error}</Text></Box>
              :
                <FlatList
                  data={articles}
                  renderItem={({ item }) => (
                    <Card 
                      title={item.title} 
                      author = {item.author}
                      description={item.description}
                      urlToImage={item.urlToImage}
                      onPress = {()=> navigation.navigate('Article', { url: item.url})}
                    />
                  )}
                />
              }
            </>
            }
        </>
  );

}

export default ArticlesList
