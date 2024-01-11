import { Stack } from 'expo-router'

import { useFonts } from 'expo-font';
export default function Layout() {

  const [loaded] = useFonts({
    BalooBold: require('../../assets/fonts/Baloo_2/static/Baloo2-Bold.ttf'),
    BalooVariable: require('../../assets/fonts/Baloo_2/Baloo2-VariableFont_wght.ttf'),
    Poppins: require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
    Belsamique: require('../../assets/fonts/Balsamiq_Sans/BalsamiqSans-Bold.ttf')
  })

  if(!loaded){
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      
      <Stack.Screen
        name='Home'
      />

      <Stack.Screen
      name='SigIn'
      />
      <Stack.Screen 
      name='ForgetPassword'
      />
      
    </Stack>
  );
}