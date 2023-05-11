
import { useCallback, useEffect, useState } from "react";
import { View } from "native-base";
import NewsCard from "../components/NewsCard";
import TopBar from "../components/TopBar";
import NewsTopicsSelector from "../components/NewsTopicsSelector";
import ThemeColor from "../components/ThemeColor";
import request from "../services/request";


const  ArticlesList = () => {

  const [data, setData] = useState();
  const [topic, setTopic] = useState('apple');
  const [language, setLanguage] = useState('en');

  const fetchData = useCallback(async () => {
    const { data } = await request.get(`everything?q=${topic}`);
    setData(data);
  }, [])

  useEffect (() => {
    fetchData()
      .catch(console.error);
  }, [topic])

  return (
      <>
         <TopBar/>
         <View style={{flexDirection: 'row', columnGap: 5, marginVertical: 10, alignSelf: 'center'}}>
             <ThemeColor color="red"/>
             <ThemeColor color="black"/>
             <ThemeColor color="green"/>
         </View>
         <View style={{flexDirection: 'row', columnGap: 5, marginVertical: 10, alignSelf: 'center'}}>
             <NewsTopicsSelector title = 'All'/>
             <NewsTopicsSelector title = 'apple'/>
             <NewsTopicsSelector title = 'meta'/>
             <NewsTopicsSelector title = 'netflix'/>
             <NewsTopicsSelector title = 'google'/>
             <NewsTopicsSelector title = 'twitter'/>
             <NewsTopicsSelector title = 'tesla'/>
         </View>

         <NewsCard
           title="Some title here"
           description="Lorem ipsum"/>
          <NewsCard
           title="Some title here"
           description="Lorem ipsum"/>

      </>
  );

}

export default ArticlesList
