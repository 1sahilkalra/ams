import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation'

import Allot from 'screens/allot'
import Locate from 'screens/locate'
import Release from 'screens/release'

const AppNavigator = createMaterialTopTabNavigator(
  {
    Allot: { screen: Allot, navigationOptions: { title: 'Allot' } },
    Locate: { screen: Locate, navigationOptions: { title: 'Locate' } },
    Release: { screen: Release, navigationOptions: { title: 'Release' } },
  },
  {
    animationEnabled: true,
    initialRouteName: 'Allot',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazy: true,
  },
)

const Navigator = createAppContainer(AppNavigator)

export default Navigator
