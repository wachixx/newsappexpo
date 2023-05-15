import { HStack, StatusBar, Heading, Box, CheckIcon, Select, ArrowBackIcon, Text } from "native-base";
import { FunctionComponent, useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Pressable } from "react-native";

type Props = {
  title: string;
  subPage: boolean;
  onBackBtnPress?: () => void;
}

const LanguageSelector: FunctionComponent = () => {

  const [selecTedLanguage, setSelectedLanguage] = useState('en');
  const { setLanguage } = useContext(LanguageContext);

  const handleChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setSelectedLanguage(selectedLanguage);
  };

  return (
      <Box maxW='120' py={1}>
        <Select
            selectedValue={selecTedLanguage} 
            minWidth='120' 
            placeholder='Language' 
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size='4' />
            }} 
            onValueChange={itemValue => handleChange(itemValue)}
          >
          <Select.Item label='English' value='en' />
          <Select.Item label='Arabic' value='ar' />
        </Select>
      </Box>
  );
};

const TopBar: FunctionComponent<Props> = ({title, subPage, onBackBtnPress}) => {
    return (
      <>
        <StatusBar barStyle='light-content' /> 
        <HStack px={5} borderBottomWidth={1} borderBottomColor='#000' w='100%' justifyContent='space-between' alignItems='center'>
        {subPage ?
          <>
             <Pressable onPress={onBackBtnPress}><ArrowBackIcon size="5" my={5}/></Pressable>
          </>
        : 
          <>
            <Heading size='lg'>{title}</Heading>
            <LanguageSelector/>
          </>
        } 
        </HStack> 
      </>
    );
};

export default TopBar;