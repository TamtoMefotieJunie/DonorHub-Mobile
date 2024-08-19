import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Chat from '../DrawerScreens/Chat'
import ChatScreen from '../Screens/ChatScreen'

function ChatNavigation() {
    const Stack = createStackNavigator()
  return (
    <>
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='Chat' component={Chat} />
            <Stack.Screen options={{
                headerShown: false
            }} name='Chat Screen' component={ChatScreen} />
        </Stack.Navigator>
    </>
  )
}

export default ChatNavigation