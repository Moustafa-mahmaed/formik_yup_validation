import React, { Component } from 'react'
import { Text, View  } from 'react-native'
import {Formik} from "formik";
 import { Button  } from 'react-native-elements'

import Input  from './src/componets/input'

import * as Yup  from "yup";

const api =user =>{
 new Promise((resolve, reject) => {
   setTimeout(() => {
     if(user.email == "asd@yahoo.com")
      {

      reject({email:"email already used"})
      } 
     else{
       resolve()
     }
   }, 3000);
    
  })
  
}

 class App extends Component {
_handleSubmit = async (values,bag ) =>{

  try{
await api(values);
alert("welcome")
  }catch(error){
bag.setSubmitting(false)
bag.setErrors(error)
  }
// alert(JSON.stringify(values))
}
    render() {
        return (
            <View style={{ alignItems: 'center',
             justifyContent: 'center',
             backgroundColor: "#eee",
             flex: 1}}>
                <Formik 
                initialValues={{ email: '', password: ''  ,confirmPassword:''}}
               validationSchema={
                 Yup.object().shape({
                   email :Yup.string().email("غير مسموح بالاميل ")
                   .required("خانه الاميل ضروريه") ,
                  password :Yup.string().min(6).required(),
                  confirmPassword:Yup.string()
                  .oneOf([Yup.ref('password')], 'confirm password must matched').required()
                 })
               }
                onSubmit={this._handleSubmit}
                render={
                  ({values ,handleSubmit ,setFieldValue ,errors
                   ,touched ,setFieldTouched ,isValid ,isSubmitting })=>(
                    <React.Fragment>
                    
                <Input label="email"
                 autoCapitalize="none" 
                 value={values.email}
                 onChange={setFieldValue}
                  onTouch={setFieldTouched}
                 name="email"
                 error={touched.email && errors.email}
                  />
               
               
                <Input label="password"
                 autoCapitalize="none"
                  secureTextEntry
                   value={values.password} 
                   onChange={setFieldValue}
                   onTouch={setFieldTouched}
                 name="password" 
                 error={touched.password && errors.password }
                 
                 />
              
              
                <Input label="confirm password" 
                 autoCapitalize="none" 
                 secureTextEntry
                  value={values.confirmPassword} 
                  onChange={setFieldValue}
                 name="confirmPassword"
                  onTouch={setFieldTouched}
                 error={ touched.confirmPassword && errors.confirmPassword}

                 />



                <Button title="submit"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                 />

                    </React.Fragment>
                  )
                }
                
                />

            </View>
        )
    }
}
export default  App
