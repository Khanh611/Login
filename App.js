import * as React from 'react';
import { AppRegistry } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'

export default class app extends React.Component {
  render() {
    return (
      <SignIn />
    );
  }
}

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//         <Stack.Screen name="SignIn" component={SignIn} />
//         //Stack.Screen name="SignUp" component={SignUp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;