import { Box, Text, Link, Icon, Stack } from "@chakra-ui/react"
import { ReactNode } from "react"
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

type SectionProps = {
    title: string
    children: ReactNode
}

export const Section = ({ title, children }: SectionProps) => {
    return (
        <Box>
            <Text fontWeight='bold' color='gray.400' fontSize='small'>{title}</Text>
            <Stack spacing='4' mt='8' align='stretch'>
                {children}
            </Stack>
        </Box>
    )
}