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
          paddingVertical:10,
          backgroundColor: isPrimary? 'blue' : 'white',
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius: 5,
          ...style
      }}
      activeOpacity={0.9}
      onPress={handleOnPress}
      >
          <Text style={{
              textAlign:'center',
              color: isPrimary? 'white' : 'black',
              fontSize:18
          }}>{labelText}</Text>
      </TouchableOpacity>
    )
}

export default FormButton