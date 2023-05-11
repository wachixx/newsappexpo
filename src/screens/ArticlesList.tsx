import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Center, Container, View } from "native-base";
import NewsCard from "../components/NewsCard";
import TopBar from "../components/TopBar";
import NewsTopicsSelector from "../components/NewsTopicsSelector";
import ThemeColor from "../components/ThemeColor";
import request from "../services/request";
import getDates from "../utils/getDates";


const  ArticlesList = ({navigation}) => {

  const [articles, setArticles] = useState();
  const [topic, setTopic] = useState('apple');
  const [language, setLanguage] = useState('en');

  const { today, aWeekAgo } = getDates();

  const fetchData = useCallback(async () => {
    const { data } = await request.get(`everything?q=${topic}&from=${aWeekAgo}&to=${today}&language=${language}`);
    setArticles(data.articles);
  }, [])

  useEffect (() => {
    fetchData()
      .catch(console.error);
  }, [topic])

  return (
      <Center>
        <Container>
            <TopBar/>
            <View style={{flexDirection: 'row', columnGap: 5, marginVertical: 10, alignSelf: 'center'}}>
              <ThemeColor color="red"/>
              <ThemeColor color="black"/>
              <ThemeColor color="green"/>
            </View>

            <View style={{flexDirection: 'row', columnGap: 5, marginVertical: 10, alignSelf: 'center'}}>
              <NewsTopicsSelector title = 'apple'/>
              <NewsTopicsSelector title = 'meta'/>
              <NewsTopicsSelector title = 'netflix'/>
              <NewsTopicsSelector title = 'google'/>
              <NewsTopicsSelector title = 'twitter'/>
              <NewsTopicsSelector title = 'tesla'/>
            </View>

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
        </Container>
      </Center>
  );

}

export default ArticlesList
