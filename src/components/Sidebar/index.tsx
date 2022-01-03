import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { useSidebarDrawer } from "../../contexts/sidebarContext"
import { NavSidebar } from "./sidebar"

export const Sidebar = () => {
    const { isOpen, onClose } = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton mt='6'/>
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <NavSidebar />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as='aside' w='64' mr='8'>
            <NavSidebar />
        </Box>
    )
}