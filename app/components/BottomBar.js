import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ColorConstants } from '@constants';
import NavigationConstants from '@constants/NavigationConstants';
import { useDispatch } from 'react-redux';
import MoviesReducer from '@reducers/MoviesReducer';

function BottomBar({ state, navigation })
{
  const dispatch = useDispatch();
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) =>
      {
        const isFocused = state.index === index;

        const onPress = () =>
        {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          dispatch(MoviesReducer.actions.setCurrentRoute(route.name));
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        function Icon()
        {
          switch (route.name) {
            case NavigationConstants.HOME:
              return <Image source={require('@assets/movie.png')} style={{ tintColor: ColorConstants.ACCENT_COLOR, width: 30, height: 30 }} resizeMode="contain" />
            case NavigationConstants.LOGIN:
              return <Image source={require('@assets/account.png')} style={{ tintColor: ColorConstants.ACCENT_COLOR, width: 30, height: 30 }} resizeMode="contain" />
            default:
              break;
          }
        }


        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={onPress}
            style={styles.bottomBar}
          >
            <Icon />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: ColorConstants.BACK_SECOND,
    height: 80,

  },
});

export default BottomBar

