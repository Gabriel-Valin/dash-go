import { Stack, Button, Box } from '@chakra-ui/react'
import { Item } from './item'
export const Pagination = () => {
    return (
        <Stack direction='row' mt='8' justify='space-between' align='center' spacing='6'>
            <Box>
                <strong>0</strong> - <strong>3</strong> de <strong>50</strong>
            </Box>
            <Stack direction='row' spacing='2'>
                <Item number={1} isCurrent />
                <Item number={2} />
                <Item number={3} />
                <Item number={4} />
            </Stack>
        </Stack>
    )
}