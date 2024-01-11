import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Input from '@components/Input';
import Button from '@components/Button';

import { Link, useRouter } from 'expo-router';

export default function SigIn() {
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
        <Text className='
        text-primary400 
        font-bold 
        font-Baloo
        text-3xl 
        '>
          Encontrar um cuidador infantil
        </Text>
        <Text className='
        font-semibold 
        text-gray-500 
        font-BalooVariable
        text-lg
        
        '>
          Preencha seus detalhes para se tornar um membro.
        </Text>
      </View>

      <View
        className='
      flex-1 
      items-center 
      w-96
      outline outline-2 outline-offset-2
      pt-10
      bg-primary100
      '

        style={{
          borderTopLeftRadius: 78,
          alignSelf: 'flex-start',
        }}
      >
        <Input style={{ width: 350 }} placeholder='Nome completo' />
        <Input style={{ width: 350 }} placeholder='E-mail' className='mt-5' />
        <Input style={{ width: 350 }} placeholder='Telefone' className='mt-5' />
        <Input style={{ width: 350 }} className='mt-5' placeholder='Password' />

        <Button label='Cadastrar' style={{ width: 350 }} className='mt-4 bg-primary500' />

        <View
          className='
        flex-row
        gap-3
        mt-3
        '
        >
          <Text>Já tem uma conta?</Text>
          <TouchableOpacity activeOpacity={0.54} onPress={() => route.push('Login')}>
            <Text className='text-primary500'>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View className='
        flex-col 
        items-center 
        justify-center
        gap-3
        mt-3
        '>
        </View>
      </View>

    </View>
  );
}   