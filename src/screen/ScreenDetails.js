import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import {WebView } from 'react-native-webview';
import Separator from '../Components/Separator';
import BannerAd from '../Components/bannerAd';

const DetailsScreen = ({ navigation }) => {
  
  const item = navigation.getParam('item');
  const { navigate } = navigation;

  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
        <BannerAd/>
      <View  style={styles.container}>
        <Text style={styles.header}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
        <Text style={styles.title}>Description</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.title}>Content</Text>
        <Text style={styles.desc}>{item.content}</Text>

        <Text style={styles.last}>Original Content</Text>
          <Separator /> 
          {
            (item.url.includes("youtube.com"))
            ?
            <View></View>
            :
            <Button
                uppercase={false}
                title="Read Full Article"
                onPress={()=>{navigate('ReadNow', { url: item.url })}}
            />
          }
          <Separator />  
      </View>
      <BannerAd/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight:10
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'sans-serif-condensed',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginTop :10,
    fontFamily: 'sans-serif-condensed',
  },
  name: {
    fontSize: 15,
    marginBottom: 5,
    marginTop :5
  },
  last: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginTop :15,
    
  },
  desc: {
    fontFamily: 'sans-serif-condensed',
  }
});

export default DetailsScreen;