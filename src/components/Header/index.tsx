import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotification2Line, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export const Header = () => {
    return (
        <Flex as='header' w='100%' maxWidth={1480} h='20' mt='4' px='6' mx='auto' align='center'>
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                dashgo
                <Text as='span' color='pink.500' ml='1'>.</Text>
            </Text>

            <Flex as='label' flex='1' py='4' px='8' ml='6' maxWidth={400} alignSelf='center' color='gray.200' position='relative' bg='gray.800' borderRadius='full'>
                <Input color='gray.50' variant='unstyled' placeholder='Buscar na plataforma' px='4' mr='4' _placeholder={{ color: 'gray.400' }}/>
                <Icon as={RiSearchLine} fontSize='20'/>
            </Flex>

            <Flex align='center' ml='auto'>
                <HStack spacing='8' mx='8' pr='8' py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>
                    <Icon as={RiNotification2Line} fontSize='20' />
                    <Icon as={RiUserAddLine} fontSize='20' />
                </HStack>
                <Flex align='center' >
                    <Box mr='4' textAlign='right'>
                        <Text>Gabriel Valin</Text>
                        <Text color='gray.300' fontSize='small'>
                            gabrielvalin@gmail.com
                        </Text>
                    </Box>

                    <Avatar size='md' name='Gabriel Valin' src='https://github.com/gabriel-valin.png'/>
                </Flex>
            </Flex>
        </Flex>
    )
}