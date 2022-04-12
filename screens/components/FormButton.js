import React from 'react'
import {view, Text, TouchableOpacity} from 'react-native'
const FormButton = ({
    labelText = '',
    handleOnPress = '',
    style,
    isPrimary = true,
    ...more
}) => {
  return (
      <TouchableOpacity 
      style={{
          backgroundColor: isPrimary? 'blue' : 'white',
          padding:10,
          paddingLeft:14,
          paddingRight:14,
          borderRadius: 20,
          ...style
      }}
      activeOpacity={0.9}
      onPress={handleOnPress}
      >
          <Text style={{
              textAlign:'center',
              color: isPrimary? 'white' : 'black',
              fontSize:14
          }}>{labelText}</Text>
      </TouchableOpacity>
    )
}

export default FormButton