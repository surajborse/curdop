import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import Select from 'react-select';

function RegistrationForm({ handleChange, formInputData, handleSubmit, handleUpdate, toggle }) {


    const options = [
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Rajastan', label: 'Rajastan' },
    ];

    return (
        <Row className='justify-content-center'>
            <Col lg={10}>
                <form className='form'>
                    <Row >
                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Name</label> <br />
                                <input type="text" onChange={handleChange} value={formInputData.fullName} required name="fullName" className='input' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Email</label> <br />
                                <input type="text" onChange={handleChange} value={formInputData.emailAddress} required name="emailAddress" className='input' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Password</label><br />
                                <input type="password" onChange={handleChange} value={formInputData.password} required name="password" className='input' />
                            </div>
                        </Col>

                        

                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">State</label><br />
                                <select width="100" onChange={handleChange} className='input'
                                    value={formInputData.newState} name="newState" id="">
                                    <option value={null}>Please Select State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Rajstan">Rajstan</option>
                                    <option value="Bihar">Bihar</option>
                                </select>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">City</label><br />
                                <select width="100" onChange={handleChange} className='input'
                                    value={formInputData.city} name="city" id="">
                                    <option value={null}>Please Select City</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Ahamedabad">Ahamedabad</option>
                                    <option value="Dhule">Dhule</option>
                                    <option value="Nashik">Nashik</option>
                                </select>
                            </div>
                        </Col>


                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Date And Time</label><br />
                                <input type="datetime-local" onChange={handleChange}
                                    value={formInputData.dateTime} name="dateTime" id="" className='input' />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Age</label><br />
                                <input type="number" onChange={handleChange} value={formInputData.age} name="age" className='input' />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Address</label><br />
                                <textarea onChange={handleChange} value={formInputData.address} name="address" className='input'></textarea>
                            </div>
                        </Col>


                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Profile Image</label><br />
                                <input type="File" name="" id="" className='input' onChange={handleChange} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="input-box">
                                <label htmlFor="">Color</label><br />
                                <input type="color" onChange={handleChange} value={formInputData.color} name="color" className='input color' />
                            </div>
                        </Col>


                        <Col lg={6}>
                            <div className=" ">
                                <label htmlFor="">Status</label><br />
                                <div class="check-box mt-2">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </Col>

                        {/* <Col lg={4}>
                    <div className="input-box">
                    <Select
                       defaultValue={"Gujarat"}
                       options={options}
                       name = "city"
                        onChange={handleChange}
                        value={formInputData.city}      />
                    </div>
                </Col> */}


                        <Row className='justify-content-center'>
                            <Col lg={4}>
                                <div className="input-box  ">
                                    {
                                        toggle ?
                                            <button onClick={handleUpdate}>Update</button>
                                            :
                                            <button onClick={handleSubmit}>Add</button>
                                    }

                                </div>
                            </Col>
                        </Row>

                    </Row>
                </form>
            </Col>
        </Row>


    )
}

export default RegistrationForm