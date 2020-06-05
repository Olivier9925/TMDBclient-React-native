import React from 'react';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { colorConstants, NavigationConstants } from '@constants';
import Home from '@scenes/Home';
import ConnexionNavigator from '@navigators/ConnexionNavigator';
import MovieNavigator from '@navigators/MovieNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

let width = Dimensions.get('window').width;

const MyTabs = () =>
{
  const connexion = useSelector(state => state.userReducer.connexion);

  return (
    <Tab.Navigator
      initialRouteName={Home}
      activeColor={colorConstants.TEXT}
      inactiveColor={colorConstants.ACCENT_COLOR}
      barStyle={{
        backgroundColor: colorConstants.BACK_SECOND,
      }}>
      <Tab.Screen name={NavigationConstants.HOME} component={Home} />
      <Tab.Screen name={NavigationConstants.MOVIES} component={MovieNavigator} />
      <Tab.Screen
        name={NavigationConstants.LOGIN}
        component={ConnexionNavigator}
        options={{
          tabBarLabel: connexion ? 'Mon compte' : 'Connexion',
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
