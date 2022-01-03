import { Icon, HStack } from "@chakra-ui/react"
import { RiNotification2Line, RiUserAddLine } from 'react-icons/ri'

export const Notification = () => {
    return (
        <HStack spacing='8' mx='8' pr='8' py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>
            <Icon as={RiNotification2Line} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
    )

}