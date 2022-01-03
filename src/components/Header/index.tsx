import { Flex, Text, Input, Icon, useBreakpointValue} from "@chakra-ui/react"
import { Logo } from "./logo"
import { Notification } from "./notification"
import { Profile } from "./profile"
import { SearchBox } from "./searchbox"

export const Header = () => {
    const isLargeScreen = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex as='header' w='100%' maxWidth={1480} h='20' mt='4' px='6' mx='auto' align='center'>
            <Logo />
            <SearchBox />
            <Flex align='center' ml='auto'>
                <Notification />
                <Profile showProfileInfo={isLargeScreen}/>
            </Flex>
        </Flex>
    )
}