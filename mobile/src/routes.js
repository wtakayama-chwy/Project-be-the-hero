import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; // Similiar to BrowserRouter
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
// Pages
import Incidents from './pages/Incidents/index';
import Detail from './pages/Detail/index';

function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOption={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;