import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavLink } from "./links"
import { Section } from "./section"

export const NavSidebar = () => {
    return (
        <Stack spacing='12' align='flex-start'>
                <Section title='GERAL'>
                    <NavLink  icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink  icon={RiContactsLine}>Usuários</NavLink>  
                </Section>
                <Section title='AUTOMAÇÃO'>
                    <NavLink  icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink  icon={RiGitMergeLine}>Automação</NavLink>  
                </Section>
            </Stack>
    )
}