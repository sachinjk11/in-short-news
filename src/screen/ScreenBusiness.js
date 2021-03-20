import React, { useState } from 'react';
import { View, Text, FlatList,ScrollView, StyleSheet, Button } from 'react-native';
import ListData from '../Components/HorizList';
import searchBusiness from '../api/useSearchbusiness';
import { Loading } from '../Components/LoadingComponent';
import BannerAd from '../Components/bannerAd';

const BusinessScreen = ({ navigation }) => {

const [business, results, errorMessage, isLoading] = searchBusiness();
const listHeader =[];
var unqList = [];

const filterResult = (sname) => {
    return results.filter((item)=>{
        return sname === item.source.name
    });
};

const listHeaders = () => {
    results.filter((item) => {
        listHeader.push(item.source.name);
    });
    unqList = listHeader.filter(unique);
};

const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

    if(isLoading){
        return(
            <Loading/>
        );
    } else {
        return (
            <View style={{backgroundColor: '#ffffff'}}>  
                {listHeaders()}
                    <FlatList
                    data={unqList}
                    keyExtractor={result => result}
                        renderItem={({ item, index }) => {
                            return (
                                <ListData
                                title={item}
                                results={filterResult(item)}
                                index={index}
                            />
                        );
                        }
                        }
                    /> 
            </View>
            );
    }
};
  
export default BusinessScreen;