import React from 'react';
import {  StyleSheet,View} from 'react-native'
import { AdMobBanner} from 'expo-ads-admob';


const BannerAd = () => {
    return(
        <View >
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-1426929393334020/4328721773"
              // Test ID, Replace with your-admob-unit-id
              testDeviceID="ca-app-pub-1426929393334020/4328721773"
              onDidFailToReceiveAdWithError={err => {
                  console.log(err)
              }}
              onAdViewDidReceiveAd={() => {
                  console.log("Ad Recieved");
              }}
              />
        </View>
    );
};

export default BannerAd;