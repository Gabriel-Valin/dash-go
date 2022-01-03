import { Flex, Text, Box, Avatar } from "@chakra-ui/react"

export const Profile = () => {
    return (
        <Flex align='center' >
            <Box mr='4' textAlign='right'>
                <Text>Gabriel Valin</Text>
                <Text color='gray.300' fontSize='small'>
                    gabrielvalin@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name='Gabriel Valin' src='https://github.com/gabriel-valin.png' />
        </Flex>
    )
}