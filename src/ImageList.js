import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { images } from './imageData';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ImageList = ({ navigation }) => {
  
  const handleImagePress = (image) => {
    navigation.navigate('ImageDetail', { title: image.title, info: image.info, image });
  };

  const renderItem = ({ item }) => (
<TouchableOpacity key={item.id} onPress={() => handleImagePress(item)}>
    <View style={styles.imageContainer}>
      <View style={styles.imageInfo}>
        <Image style={styles.image} source={item.url} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Ionicons name='chevron-forward-outline' size={20} color='#ccc' />
    </View>
  </TouchableOpacity>
  );
  

  return (
    <ScrollView style={styles.container}>
      {images.map((item) => (
        renderItem({ item })
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ImageList;
