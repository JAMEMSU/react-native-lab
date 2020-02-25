import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import Axios from 'axios';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

 async componentDidMount(){
  try {
    const result = await Axios.get("https://reactnative.dev/movies.json");
    this.setState({  isLoading: false,dataSource: result.data.movies})
  } catch (error) {
    
  }
}



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
