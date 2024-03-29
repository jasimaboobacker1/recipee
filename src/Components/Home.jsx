import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { Additem } from '../Services/AllAPI';
import './Home.css'


function Home() {

 const [items, setItems] = useState([]);
 const [valuee,setvaluee] = useState({
  recipename:'',
  recipe:''
 })
  const [searchQuery, setSearchQuery] = useState('');
 
 
  const handleAdd = async (e) => {
    console.log(valuee);
    const res= await Additem(valuee)

  }

 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 useEffect(()=>{
  fetch('http://localhost:4000/recipies')
  .then(response => response.json())
  .then(items=>setItems(items))
  // console.log(valuee);
  console.log(searchQuery);
 },[])

 
  return (
    <>
     <div style={{ width: '100%', height: '800px' }} className='bg-light d-flex flex-column align-items-center'>
     <div style={{ width: '100%', height: '800px' }} className='d-flex align-items-center  flex-column p-5'>
        <div className="heading">
          <h1 className='text-dark'>RECIPE MASTER</h1>
        </div>
        <div className='d-flex p-3 align-items-center justify-content-between shadow rounded p-3' style={{ width: '400px' }}>
          <h4>Add Your Recipe</h4>
        <Link to={'Add'}>
        <Button variant="warning" onClick={handleShow}>
          Add
        </Button>
        </Link>
        </div>
        <div className='bg-light shadow mt-5 d-flex flex-column justify-content-center p-3 align-items-center' style={{ width: "auto", height: "auto" }}>
          <input
              style={{width:"100%"}}
              className='rounded shadow m-3'
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          <table style={{ width: '400px' }}>
            <thead>
              <tr>
                <th className='p-2'>RECIPIES</th>
                <th className='p-2'></th>
              </tr>
            </thead>
            <tbody>
    {items
      .filter((item) => {
        return searchQuery.toLowerCase() === '' ? item :
          item.recipename.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .map((item) => (
        <tr key={item.id}>
          <td className='p-2'>{item.recipename}</td>
          <td className='p-2'>
            <Link to='view'>
              <button className='btn btn-warning'>View</button>
            </Link>
          </td>
        </tr>
      ))}
  </tbody>
  
          </table>
         
          
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex flex-column'><h5>Add Recipee</h5>
          <input
    type="text"
    placeholder='Recipe Name'
    valuee={valuee.recipename}
    onChange={e => setvaluee({ ...valuee, recipename: e.target.valuee })}
  />
  
  <textarea
    className='mt-2'
    placeholder='Your Recipe'
    valuee={valuee.recipe}
    onChange={e => setvaluee({ ...valuee, recipe: e.target.valuee })}
    cols="30"
    rows="10"
  ></textarea>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={handleAdd}>
              ADD
            </Button>
           
          </Modal.Footer>
        </Modal>
        </div>
     </div>
     
     
    </div></>
  )
}

export default Home