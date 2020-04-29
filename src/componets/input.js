import React, { Component } from 'react'
import { Text, View } from 'react-native'

 import { Input  } from 'react-native-elements'

 class FormInput extends Component {
_handleChange =(value)=>{
this.props.onChange(this.props.name ,value)
}

_handleTouch =(value)=>{
this.props.onTouch(this.props.name )
}

    render() {
const {label ,error , ...rest}  =this.props;
        return (
            <View style={{width:"90%" , alignSelf: 'center',}} >
  
<Input
{...rest}
onChangeText={this._handleChange}
onBlur={this._handleTouch}

label={label}
  placeholder={label}
  errorStyle={{ color: 'red' }}
  errorMessage={error }
/>

            </View>
        )
    }
}
export default  FormInput
