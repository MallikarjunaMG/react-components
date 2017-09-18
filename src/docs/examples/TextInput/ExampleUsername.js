import React from 'react'
import TextInput from 'comps-root/TextInput';
/**
 * Username Textinput Field - Required
 */
export default function ExampleUsername() {
  return <TextInput htmlId='example-username' label='Username' 
  name='username' required placeholder='Enter Username' 
  error='User is Required' onChange={() => {}} />
}