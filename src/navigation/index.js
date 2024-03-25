import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Divider, useTheme } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountScreen from '../screen/AccountScreen';
import DetailScreen from '../screen/DetailScreen';
import BookScreen from '../screen/HomeScreen';
import Wishlist from '../screen/WishlistScreen';
import MyBookScreen from '../screen/MybooksScreen';
import SettingScreen from '../screen/SettingScreen';
import active from "../../icon/icon_bookmark_actived.png"
import inactive from "../../icon/icon_bookmark.png"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

var isPressed = false;

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                drawerStyle: {width: 250}
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="HomeTab"
                component={MyTabs}
                options={{
                    headerShown: false,
                    title: "Home",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: true,
                    title: "Account",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={24} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: true,
                    title: "Setting",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={24} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarStyle: {height: 56},
                tabBarIconStyle:{marginTop: 8},
                tabBarLabelStyle:{fontSize: 12, marginBottom: 8}
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={StackNavigator}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                    headerShown: false,
                    title: "Wishlist",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="MyBook"
                component={MyBookScreen}
                options={{
                    headerShown: false,
                    title: "My books",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Image
                    source={require("../img/img_avatar.png")}
                    style={{
                        marginLeft: 20,
                        marginTop: 30,
                        marginBottom: 15
                    }}
                />
                <Text
                    style={{
                        marginLeft: 20,
                        fontSize: 24,
                        fontWeight: "500",
                        marginBottom: 15
                    }}
                >May</Text>
            </View>
            <Divider style={{ marginBottom: 10 }}/>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const HomeTitle = ({ navigation }) => {
    return (
        <View style={styles.headerStyle}>
            <Pressable
                style={styles.pressableStyle}
                onPress={() => navigation.openDrawer()}
            >
                <Image source={require("../../icon/nav_icon.png")} />
            </Pressable>
            <Pressable style={styles.pressableStyle}>
                <Image source={require("../../icon/search_icon.png")} />
            </Pressable>
        </View>
    );
}

const DetailTitle = () => {
    const [PressState, setPressState] = useState(0);

    var mark = PressState ? active : inactive;
    return (
        <View style={styles.DetitleStyle}>
            <Pressable
                style={styles.pressableStyle}
                // 回到主頁之後就會換圖片
                onPressIn={() => setPressState(!PressState)}
            >
                <Image source={mark}/>
            </Pressable>
        </View>
    );
}

const StackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{ headerTitle: () => <HomeTitle navigation={navigation} /> }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerTitle: () => <DetailTitle />,
                    headerBackImageSource: require("../../icon/icon_back.png") 
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#fff",
        width: '100%',
        height: 56,
        padding: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        right: 16
    },
    DetitleStyle: {
        backgroundColor: "#fff",
        width: '92%',
        height: 56,
        padding: 8,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    pressableStyle: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Navigation;