import React from 'react'
import TextInput from 'comps-root/TextInput';
/**
 * Password Textinput Field - Required
 */
export default function ExamplePassword() {
  return <TextInput htmlId='example-password' label='Password' name='password'
    placeholder='Enter Password' required type='password' 
    error='Passowrd is Required' onChange={() => { }} />
}