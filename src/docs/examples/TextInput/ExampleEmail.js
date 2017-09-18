import React from 'react'
import TextInput from 'comps-root/TextInput';
/**
 * Email Textinput Field - Optional
 */
export default function ExampleEmail() {
  return <TextInput htmlId='example-email' label='Email' 
  name='Email' type='email' placeholder='Enter Email' onChange={() => {}} />
}