import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Users from "../screens/Users";
import { user } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (

    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#121212'}
      }}>
        <Tab.Screen
          name="Users"
          component={Users}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="list"
                size={24}
                color={focused ? "#7c5295" : "#fff"}
              />
            ),
            tabBarLabel: "Filiais",
            tabBarActiveTintColor: "#7c5295",
            tabBarInactiveTintColor: "#fff",
          }}
        />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#7c5295",
          tabBarInactiveTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
