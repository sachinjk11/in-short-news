import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Button, Alert, SafeAreaView, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Loading } from './LoadingComponent';
import { ScrollView } from 'react-native-gesture-handler';


const WebViewScreen = ({ navigation }) => {


        const url = navigation.getParam('url');
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <WebView 
            scrollEnabled={true}
            startInLoadingState={true}
            source={{ uri:url }}
            renderLoading={() => <Loading/>}
            />
           </ScrollView>
        );
}

export default (WebViewScreen);