import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import SideMenu from '../components/SideMenu'

//screens
import Restaurants from '../components/Restaurants'
import Dishes from '../components/Dishes'
import Cart from '../components/Cart'

const WIDTH = Dimensions.get('window').width


const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: ({ navigation }) => {
        return (
            <SideMenu navigation={navigation} />
        )
    }
}

const DrawerNavigator = createDrawerNavigator({

    Restaurants: {
        screen: Restaurants
    },
    Dishes: {
        screen: Dishes
    },
    Cart: {
        screen: Cart
    },

},
    DrawerConfig)



export default DrawerNavigator