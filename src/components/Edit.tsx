import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { FaUserEdit } from "react-icons/fa"
import { IPerson } from '../App';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

interface IProps {
  peoples: IPerson[];
  setPeoples: Dispatch<SetStateAction<IPerson[]>>;
  person: IPerson;

}

const Edit: FC<IProps> = ({ person,peoples,setPeoples }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>(person.fullName);
  const [age, setAge] = useState<string | number>(person.age);
  const [url, setUrl] = useState<string>(person.url);
  const [bio, setBio] = useState<string | undefined>(person.bio);


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
    const newpersons = [...peoples]

    let idx:number = newpersons.findIndex(p => p.id === person.id);
    newpersons.splice(idx, 1, {...person,url,fullName,bio,age:+age})
    setPeoples(newpersons)
    setIsShowModal(!isShowModal)
    
  }

  return (
    <>
      <FaUserEdit className='text-primary m-1' size={30} onClick={() => {
        setIsShowModal(!isShowModal)
      }} />

      <MDBModal tabIndex='-1' show={isShowModal} setShow={setIsShowModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{person.fullName}</MDBModalTitle>

            </MDBModalHeader>
            <MDBModalBody>
              <form autoComplete='off' className='mt-3'
               onSubmit={(e)=>handleSubmit(e)} >
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
                  ویرایش شخص
                </button>
                <button type='button' className='btn btn-danger me-2' onClick={() => {
                  setIsShowModal(!isShowModal)
                }}>
                  بستن
                </button>
              </form>
            </MDBModalBody>
            <MDBModalFooter>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



    </>

  )
}

export default Edit
