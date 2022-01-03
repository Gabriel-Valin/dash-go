import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/sidebarContext"
import { Logo } from "./logo"
import { Notification } from "./notification"
import { Profile } from "./profile"
import { SearchBox } from "./searchbox"

export const Header = () => {
    const { onOpen } = useSidebarDrawer()
    const isLargeScreen = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex as='header' w='100%' maxWidth={1480} h='20' mt='4' px='6' mx='auto' align='center'>
            { !isLargeScreen && (
                <IconButton aria-label='Open Navigation' icon={<Icon as={RiMenuLine} />} fontSize='22' variant='unstyled' onClick={onOpen} mr='2'>

                </IconButton>
            ) }
            <Logo />
            <SearchBox />
            <Flex align='center' ml='auto'>
                <Notification />
                <Profile showProfileInfo={isLargeScreen}/>
            </Flex>
        </Flex>
    )
}