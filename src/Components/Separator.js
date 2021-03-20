
import React from 'react';
import { Component } from 'react';
import { View, Text, FlatList,ScrollView, StyleSheet } from 'react-native';


export default Separator = () => (
    <View style={styles.separator} />
  );

  const styles = StyleSheet.create({
    separator: {
      marginVertical: 2,
      marginBottom: 1,
      marginTop: 1,
      borderBottomColor: '#737373',
      borderBottomWidth: 1,
    }
  });