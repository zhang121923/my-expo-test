import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerPosition: 'right'
      }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Drawer",
            title: "Drawer",
          }}
        />
        <Drawer.Screen
          name="setting" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Setting",
            title: "Setting",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
