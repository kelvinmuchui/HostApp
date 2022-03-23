import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = ({navigation, name, cost, description, location, image}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  const Service = [
    {
        id: 1, 
        name: 'Diani Beach',
        cost: '$100',
        image: "https://cdn-eoenl.nitrocdn.com/BNJkhyBUKKcggHimsbwmFKFRdMqxkpHa/assets/static/optimized/rev-b234d03/wp-content/uploads/2018/10/BCL_7.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: '123'
    },
    {
        id: 2, 
        name: 'Lamu Beach House',
        cost: '$400',
        image:"https://c8.alamy.com/comp/T2R0GH/interior-of-a-luxurious-tent-cabin-for-tourist-in-maasai-mara-national-reserve-kenya-T2R0GH.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: '123'
    },
    {
        id: 3, 
        name: 'Masai Mara cabin',
        image: 'https://www.highadventuresafaris.com/admin/user_content/img/content_nombre839.png',
        cost: '$200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: '123'
    },
];
  
    return (
      <ScrollView style={styles.container}>
        {Service.map(item => (
            <Card >
        
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.description}</Paragraph>
              <Paragraph>{item.cost}</Paragraph>
        
            </Card.Content>
            <Card.Cover source={item.image} />
            <Card.Actions>
              <Button>view More</Button>
            </Card.Actions>
          </Card>
        ))}
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 50,
    marginHorizontal: 20,
  
  },
});
