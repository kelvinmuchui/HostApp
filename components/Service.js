import { View, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import React from 'react'

const Service = ({name, cost, description, location, image}) => {
  return (
    
      <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>{name}</Title>
      <Paragraph>{description}</Paragraph>
      <Paragraph>{cost}</Paragraph>

    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>view More</Button>
    </Card.Actions>
  </Card>
  )
}

export default Service