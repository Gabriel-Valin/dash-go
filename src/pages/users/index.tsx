import { Box, Flex, Heading, Button, Icon, Table, Thead, Th, Tr, Checkbox, Tbody, Td, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiEditLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList () {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Usuários
                        </Heading>

                        <Link href='/users/create' passHref>
                            <Button as='a' size='sm' fontSize='small' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='8'>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td  px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Gabriel Valin</Text>
                                        <Text fontSize='sm' color='gray.300'>gabrielvalin@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    30, julho de 2021
                                </Td>
                                <Td>
                                <Button as='a' size='sm' fontSize='small' cursor='pointer' colorScheme='purple' leftIcon={<Icon as={RiPencilLine} />}>
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
            
        </Box>
    )
}