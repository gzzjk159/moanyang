import 'react-native-gesture-handler'
import * as React from 'react';
import TopTapNavigator from '../Components/TopTapNavigator';
import SearchBar from '../Components/SearchBar';

function HomeScreen ( {Tabs} ) {
  return (
    <>
      {/* <SearchBar/> */}
      <TopTapNavigator/>
    </>
  );
};

export default HomeScreen;