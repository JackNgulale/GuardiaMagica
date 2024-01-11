import React, { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
}

const ForwardedButton = forwardRef((props: ButtonProps, ref: React.Ref<TouchableOpacity>) => {
    return (
        <TouchableOpacity
            ref={ref}
            className="
            p-4
            rounded-md
            items-center
            "
            {...props}
        >
            <Text className='font-bold text-slate-50 text-lg'>{props.label}</Text>
        </TouchableOpacity>
    );
});

export default ForwardedButton;
