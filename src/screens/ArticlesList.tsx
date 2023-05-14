import { FunctionComponent, useCallback, useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Center, Container, View } from "native-base";
import NewsCard from "../components/NewsCard";
import TopBar from "../components/TopBar";
import { TopicSelectorWrapper } from "../components/TopicsSelector";
import ThemeColor from "../components/ThemeColor";
import request from "../services/request";
import getDates from "../utils/getDates";
import { LanguageContext } from "../context/LanguageContext";
import Loader from "../components/Loader";


const  ArticlesList = ({navigation}) => {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [topic, setTopic] = useState('apple');

  const { language } = useContext(LanguageContext);
  const { today, aWeekAgo } = getDates();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await request.get(`everything?q=${topic}&from=${aWeekAgo}&to=${today}&language=${language}`);
    setArticles(data.articles);
    setLoading(false);
  }, [topic, language])

  const handleTopicChange = (value: string) => {
    setTopic(value);
  };

  useEffect (() => {
    fetchData()
      .catch(console.error);
  }, [topic, language])


  return (
        <>
            <TopBar title="NewsApp"/>

            <View style={{flexDirection: 'row', columnGap: 5, marginVertical: 10, alignSelf: 'center'}}>
              <ThemeColor color="red"/>
              <ThemeColor color="black"/>
              <ThemeColor color="green"/>
            </View>

            <TopicSelectorWrapper onTopicChange={handleTopicChange}/>
            
            {loading ? 
              <Loader/>
            :
              <FlatList
                data={articles}
                renderItem={({ item }) => (
                  <NewsCard title={item.title} 
                    description={item.description}
                    urlToImage={item.urlToImage}
                    onPress = {()=> navigation.navigate('Article', { url: item.url})}
                  />
                )}
              />

            }

        </>
  );

}

export default ArticlesList
