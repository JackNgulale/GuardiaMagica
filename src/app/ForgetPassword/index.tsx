import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Input from '@components/Input';
import Button from '@components/Button';

import { Link, useRouter } from 'expo-router';
export default function ForgetPassword() {
  const route = useRouter();
  return (
    <View className='flex-1 bg-slate-100'>
      <StatusBar />
      <SafeAreaView>
        <View className='flex-row justify-between p-4'>
          <TouchableOpacity onPress={() => route.back()}>
            <Feather name='arrow-left' size={25} color={"black"} />
          </TouchableOpacity>
          <Text className='text-primary400 text-lg font-semibold'>Cancelar</Text>
        </View>
      </SafeAreaView>

      <View className='p-4'>
        <Text className='text-primary400 text-3xl font-bold font-Baloo'>
          Esqueceu a password
        </Text>
        <Text className='
        font-semibold 
        text-gray-500 
        font-BalooVariable
        text-lg
        '>
          Insira o seu endereço email para recuperar a password
        </Text>
      </View>

      <View
        className='
      flex-1 
      items-center 
      w-96
      outline outline-2 outline-offset-2
      pt-20
      bg-primary100
      '

        style={{
          borderTopLeftRadius: 78,
          alignSelf: 'flex-start',
        }}
      >
        <Input style={{ width: 350 }} placeholder='E-mail' />

        <Button
          label='Login'
          style={{ width: 350 }}
          className='mt-4 bg-primary500'
          onPress={() => route.replace('Home')}
        />

        <View
          className='
        flex-row
        gap-3
        mt-3
        '
        >
          <Text
            className='
          text-lg
          font-Baloo
          text-gray-500
          '
          >
            Voltar para fazer o login
          </Text>

        </View>

        <View className='
        flex-col 
        items-center 
        justify-center
        gap-3
        mt-3
        '>
          <Text className='font-bold'>Ou</Text>

          <Button
            label='SigIn'
            style={{ width: 350 }}
            className='bg-primary300'
            onPress={() => route.push('SigIn')}
          />
        </View>

        <View className='
        items-center 
        text-center 
        justify-center
        self-center
        '>
          <Text className='font-Baloo text-lg'>
            By signing in, I agree with
            <Text className='text-primary300'> Terms of Use </Text>
            <Text> and </Text>
            <Text className='text-primary300'>Privacy Policy</Text>
          </Text>
        </View>
      </View>

    </View>
  );
}   