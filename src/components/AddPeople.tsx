import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { IPerson } from '../App';

interface IProps {
  peoples: IPerson[];
  setPeoples: Dispatch<SetStateAction<IPerson[]>>;

}

const AddPeople: FC<IProps> = ({peoples, setPeoples}) => {
  const [fullName, setFullName] = useState<string>("")
  const [age, setAge] = useState<string | number>("")
  const [url, setUrl] = useState<string>("")
  const [bio, setBio] = useState<string>("")

  const handleResetState = ():void => {
    setFullName("")
    setAge("")
    setUrl("")
    setBio("")
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>):void => {
    event.preventDefault()
    if (!fullName) {
      return alert("Please enter a fullname")
    }
    if (!age) {
      return alert("Please enter a age")
    }
    if (!url) {
      return alert("Please enter a url")
    }

    setPeoples([...peoples,{
      id: peoples.length + 1,
      fullName,
      age:(+age),
      url,
      bio,
    }])
    handleResetState()
  }
  return (
    <div className='col-md-6 col-lg-6 mx-auto'>
      <form autoComplete='off' className='mt-3' onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          className='form-control mb-2'
          name='fullName'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='نام و نام خانوادگی'

        />
        <input
          type="number"
          className='form-control mb-2'
          name='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='سن'
        />
        <input
          type="text"
          className='form-control mb-2'
          name='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='تصویر پروفایل'
        />
        <textarea
          className='form-control mb-2'
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows={7}
          placeholder="بیوگرافی"
        />
        <button type='submit' className='btn btn-success'>
          افزودن به لیست
        </button>
      </form>
    </div>
  )
}

export default AddPeople
