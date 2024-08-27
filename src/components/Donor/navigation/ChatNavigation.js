import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ChatScreen from '../Screens/ChatScreen'
import ChatDonor from '../DrawerScreens/Chat'

function ChatNavigation() {
    const Stack = createStackNavigator()
  return (
    <>
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='Chat' component={ChatDonor} />
            <Stack.Screen options={{
                headerShown: false
            }} name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>
    </>
  )
}

export default ChatNavigation