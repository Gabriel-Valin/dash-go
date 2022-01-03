/* eslint-disable @next/next/link-passhref */
import { Link as ChakraLink, Text, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

interface LinkProps extends ChakraLinkProps {
    icon: ElementType
    children: string
    href: string
}

export const NavLink = ({ icon, children, href, ...rest }: LinkProps) => {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' alignItems='center' {...rest}>
                <Icon as={icon} fontSize='20' />
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}