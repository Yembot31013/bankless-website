import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'


class OurValuesSection extends React.Component {
  render() {
    return (
      <Flex
        className='section-container about-section'
        flexDir='column'
        justifyContent='left'
        alignItems='left'>
        <Box className='section'>
            <Text fontSize='4xl' className='banner-text left-align'>
              {'Our Values'.toUpperCase()}
            </Text>

        </Box>
      </Flex>
    )
  }
}

export default OurValuesSection