import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function MyComponent() {
  const [value, setValue] = useState('')
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['link'],
    ],
  }
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'link',
  ]
useEffect(()=>{
  console.log(value)
},[value])
  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      ></ReactQuill>
    </div>
  )
}

export default MyComponent
