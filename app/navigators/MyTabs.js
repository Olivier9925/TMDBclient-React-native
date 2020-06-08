import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationConstants } from '@constants';
import ConnexionNavigator from '@navigators/ConnexionNavigator';
import MovieNavigator from '@navigators/MovieNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from '@components/BottomBar';


const Tab = createBottomTabNavigator();

const MyTabs = () =>
{
  const connexion = useSelector(state => state.UserReducer.connexion);

  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name={NavigationConstants.HOME} component={MovieNavigator} />
      <Tab.Screen
        name={NavigationConstants.LOGIN}
        component={ConnexionNavigator}
        options={{ tabBarLabel: connexion ? 'Mon compte' : 'Connexion' }}

      />
    </Tab.Navigator>
  );
};

export default MyTabs;
