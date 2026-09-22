import React from "react";

import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';


import Home from "./Screens/Home";
import Lista from "./Screens/Livros";
import Detalhes from "./Screens/Detalhes";
import Tema from "./Screens/Tema";
import Perfil from "./Screens/Perfil";
import Configuracao from "./Screens/Configuracao";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Inicio() {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={ {
          headerStyle:{
            backgroundColor: '#673ab7'
            },
            headerTintColor: "#ffff",
            drawerActiveTintColor: "#541db3",
            drawerInactiveTintColor: "#150335"
          } 
        }
    >
        <Drawer.Screen
            name="Home"
            component ={Home}
            options={{
              title: "Inicio",
              drawerLabel:"Inicio"
            }
            }
        />
        <Drawer.Screen
            name="Livros"
            component ={Lista}
            options={{
              title: "Livros Classicos",
              drawerLabel:"Livros Classicos"
            }
            }
        />
        <Drawer.Screen
            name="Detalhes"
            component ={Detalhes}
            options={{
              title: "Detalhes do Livro",
              drawerItemStyle: {
                display: "none"
              }
            }
            }
        />
        <Drawer.Screen
            name="Tema"
            component ={Tema}
            options={{
              title: "Informações do Tema App",
              drawerLabel:"Informações do Tema App"
            }
            }
        />
    </Drawer.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Inicio: 'home-outline',
              Perfil: 'person-outline',
              Configuracao: 'settings-outline'
            };

            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#541db3',
          tabBarInactiveTintColor: '#777080',
          headerShown: false
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Configuracao" component={Configuracao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}