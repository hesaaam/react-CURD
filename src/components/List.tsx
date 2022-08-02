import React, { FC, SetStateAction, Dispatch } from 'react';
import { IPerson } from '../App';
import { AiOutlineUserDelete } from "react-icons/ai";
import Edit from './Edit';




interface IProps {

  peoples: IPerson[];
  setPeoples: Dispatch<SetStateAction<IPerson[]>>;
}
const List: FC<IProps> = ({ peoples, setPeoples }) => {

  const handleDeletePeople = (id: number): void => {
    const persons: IPerson[] = [...peoples]
    const filteredPeoples = persons.filter(person => person.id !== id)
    setPeoples(filteredPeoples);
    // const idx = persons.findIndex(p => p.id === id);
    // persons.splice(idx, 1);
    // setPeoples(persons);
  };
  const renderList: JSX.Element[] = peoples.map((people) => (
    <div key={people.id} className='col-12 col-lg-6 mb-3'>
      <div className='card'>
        <div className='card-body d-flex align-items-center'>
          <img className='img-fluid rounded img-thumbnail' width={100} height={100} src={people.url} alt={people.fullName} />
          <div className='me-3'>
            <p><span className='h2'>{people.fullName}</span> <span className='badge bg-primary me-3'>{people.age} سال</span></p>
            <p className="text-muted">{people.bio}</p>
          </div>
        </div>
        <div className='operation_btns'>
          <Edit person={people} peoples={peoples}
            setPeoples={setPeoples} />
          <AiOutlineUserDelete className='text-danger m-1'
            size={30} onClick={() => handleDeletePeople(people.id)} />
        </div>
      </div>
    </div>
  ))


  return (
    <div className='row' >
      {renderList}
    </div >
  )
}

export default List
