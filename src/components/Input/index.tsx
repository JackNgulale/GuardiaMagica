import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  name?: string;
}

const Input: React.ForwardRefRenderFunction<TextInput,InputProps> = ({ name, ...rest }) => {
  return (
    <View>
      <TextInput
       className='
       bg-slate-100
       p-4
       rounded-md
       
       '
        {...rest}
      />
    </View>
  );
};

export default Input;
