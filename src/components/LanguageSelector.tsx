import { Box, Center, CheckIcon, Heading, Select, StatusBar, Text, View } from "native-base";
import {  useState } from "react";


const LanguageSelector = () => {
    const [service, setService] =useState("");
    return (
        <>
         <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Language" placeholder="Language" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="English" value="ux" />
          <Select.Item label="Arabic" value="web" />
        </Select>
      </Box>
    </Center>
        </>
    );
};

export default LanguageSelector;