import { Link, Text, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'
import { RiContactsLine } from 'react-icons/ri'

interface LinkProps extends ChakraLinkProps {
    icon: ElementType
    children: string
}

export const NavLink = ({ icon, children, ...rest }: LinkProps) => {
    return (
        <Link display='flex' alignItems='center' {...rest}>
            <Icon as={icon} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{children}</Text>
        </Link>
    )
}