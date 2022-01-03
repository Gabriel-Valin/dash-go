import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarProps = {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarContext = createContext({} as SidebarDrawerContextData)

export const SidebarProvider = ({ children }: SidebarProps) => {
    const router = useRouter()
    const disclosure = useDisclosure()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    return (
        <SidebarContext.Provider value={disclosure}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarContext)