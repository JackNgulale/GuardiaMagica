import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Input from '@components/Input';
import Button from '@components/Button';

import { Link, useRouter } from 'expo-router';
export default function Login() {
  const route = useRouter();
  return (
    <View className='flex-1 bg-slate-100'>
      <StatusBar />
      <SafeAreaView>
        <View className='flex-row justify-between p-4'>
          <TouchableOpacity onPress={() => route.back()}>
            <Feather name='arrow-left' size={25} color={"black"} />
          </TouchableOpacity>
          <Text className='text-primary400 text-lg font-semibold'>Skip</Text>
        </View>
      </SafeAreaView>

      <View className='p-4'>
        <Text 
        className='
        text-primary400 
        text-3xl 
        font-Baloo
        '
        >
          Bem Vindo de Volta
        </Text>
        <Text className='
        font-semibold 
        text-gray-500 
        font-BalooVariable
        text-lg
        '
        >Entre com a sua conta</Text>
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
        <Input style={{ width: 350 }} className='mt-5' placeholder='Password' />

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
          <Text>Esqueceu a sua Password?</Text>
          <TouchableOpacity activeOpacity={0.54} onPress={() => route.push('ForgetPassword')}>
            <Text className='text-primary500'>Recupere aqui</Text>
          </TouchableOpacity>
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
            label='Criar Conta'
            style={{ width: 350 }}
            className='bg-green-500'
            onPress={() => route.push('SigIn')}
          />
        </View>
      </View>

    </View>
  );
}   