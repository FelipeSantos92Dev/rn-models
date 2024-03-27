import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { user } from "../data/Profile";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Filiais from "../screens/Filiais";
import Details from "../screens/Details";
import Form from "../screens/Form";
import User from "../models/user/User";
import usersRepository from "../models/user/UserRepository";

const Tab = createBottomTabNavigator();

const users = usersRepository.getAll();

const TabRoutes = () => {
  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#121212' }
    }}>
      <Tab.Screen
        name="Filiais"
        component={Filiais}
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
        name="Form"
        component={Form}
        initialParams={{ user: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="printer"
              size={24}
              color={focused ? "#7c5295" : "#fff"}
            />
          ),
          tabBarLabel: "Form",
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
        name="Details"
        component={Details}
        initialParams={{ users }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="file-text"
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
