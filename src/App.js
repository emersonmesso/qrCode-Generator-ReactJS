import React, { useState } from 'react';
import {
  Box,
  ChakraProvider,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import QrCode from './QRcode';

function App() {

  const [gerado, setGerado] = useState(false);
  const [texto, setTexto] = useState('');

  function onChangeText(str) {
    if(str.target.value != ""){
      setTexto(str.target.value);
    }
  }
  function onActionClick() {
    if(texto != ""){
      setGerado(true);
    }
  }
  function onGenerateOtherQrCode() {
    setTexto("");
    setGerado(false);
  }
  return (
    <ChakraProvider>
      <Box display='flex' justifyContent='center' alignItems='center' backgroundColor='#202124' width='100vw' height='100vh'>

        <Box w='700px' backgroundColor='#FFFFFF' p='8' borderRadius='20px'>
          <Text fontSize='5xl' align='center' fontWeight='600'>Gerador de QRCode Com React JS</Text>
          <Box h='50px' />
          {gerado ?
            <Box justifyContent='center' alignItems='center' display='flex'>
              <QrCode texto={texto} />
            </Box>
            :
            <Box />
          }
          {
            gerado ?
              <Box justifyContent='center' alignItems='center' display='flex'>
                <Box h='90px' />
                <Button colorScheme='teal' variant='outline' onClick={onGenerateOtherQrCode}>
                  Gerar Outro QRCode
                </Button>
              </Box>
              :
              <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row'>
                <Input placeholder='Seu texto aqui!' onChange={onChangeText} />
                <Box w='10px' />
                <Button colorScheme='teal' variant='outline' onClick={onActionClick}>
                  Gerar
                </Button>
              </Box>
          }

        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App;
