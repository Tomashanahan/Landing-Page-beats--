import { Grid, GridItem } from '@chakra-ui/react'

import React from 'react'

function Card_chaka() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={4} mb={4}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
    </Grid>
  )
}

export default Card_chaka