import React from 'react'
import { useState } from 'react'
import { Button, Modal, Pagination, Table } from 'react-bootstrap'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import delet from "../Img/delete.png"

function TableData({ tableData, deleteitem, EditItem, file }) {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div >


            <Table striped bordered hover responsive className='mt-4'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Date Time</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>color</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                {
                    tableData.length !== 0 ?
                        <tbody>
                            {
                                tableData.map((data, ind) => {
                                    return (
                                        <tr key={ind} className="data-table">
                                            <td>{ind + 1}</td>
                                            <td className='capitle' >{data.fullName}</td>
                                            <td>{data.emailAddress}</td>
                                            <td className='capitle' >{data.password}</td>
                                            <td>{data.city}</td>
                                            <td>{data.newState}</td>
                                            <td>{data.dateTime}</td>
                                            <td>{data.age}</td>
                                            
                                            <td>{data.address}</td>
                                            <td>{data.color}</td>
                                            <td className='edit' onClick={() => EditItem(data, ind)}> <BiEdit /> </td>
                                            {/* <td className='delete' onClick={() => deleteitem(ind) }> <RiDeleteBinLine /> </td> */}
                                            <td className='delete' onClick={handleShow}> <RiDeleteBinLine /> </td>
                                            <Modal className='model' show={show} onHide={handleClose}>
                                                <Modal.Body> <h4>Do you want to delete data?</h4>
                                                  <img className='img-fluid' src={delet} alt="" />
                                                
                                                 </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                    cancel
                                                    </Button>
                                                    <Button variant="primary" onClick={() => deleteitem(ind)}>
                                                        oky
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        :
                        <h1>Data Not Found</h1>



                }


            </Table>



        </div>
    )
}
export default TableData




// else if (search && !val.fullName.toLowerCase().includes(search)) {
//     console.log('not found');
//     setMassage("data not found")
//     console.log(massage)
// }    






