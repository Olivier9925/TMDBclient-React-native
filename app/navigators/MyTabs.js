import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { colorConstants, NavigationConstants } from '@constants';
import { logout } from '@actions/userActions';
import Movie from '@scenes/Movie';
import Home from '@scenes/Home';
import Signup from '@scenes/Signup';
import ConnexionNavigator from '@navigators/ConnexionNavigator';
import MovieList from '@scenes/MovieList';
import MovieNavigator from '@navigators/MovieNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import home from '@assets/home.png';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

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

const styles = StyleSheet.create({
  statusBar: {
    width: width - 100,
    marginLeft: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
  },
  logText: {
    color: colorConstants.TEXT,
    padding: 10,
  },
});
