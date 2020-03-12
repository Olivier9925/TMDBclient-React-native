import React from 'react';
import {View, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const windowWidth = Dimensions.get('window').width;

const BottomSheet = () => {
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: 'red',
        width: windowWidth,
        height: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    />
  );
  const renderContent = () => (
    <View style={{backgroundColor: 'red', width: windowWidth, height: 200}} />
  );

  return (
    <View style={{backgroundColor: 'yellow', width: windowWidth, height: 100}}>
      <BottomSheet
        snapPoints={[350, 300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </View>
  );
};
export default BottomSheet;
