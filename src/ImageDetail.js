import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const ImageDetail = ({ route }) => {
  const { title, info, image } = route.params;

  return (
    <ScrollView style={styles.backgroundColor}>
      <View style={styles.container}>
        <Image style={styles.image} source={image.url} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    marginHorizontal: 20,
    paddingRight: 240,
    paddingBottom: 20,
  },
  info: {
    fontSize: 16,
    marginHorizontal: 20,

  },
  backgroundColor:{
    backgroundColor: 'white', 
  }
});

export default ImageDetail;
