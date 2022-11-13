import React, { useEffect, useState } from 'react'
import { Container, } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import RegistrationForm from '../RegistrationForm'
import TableData from '../TableData'

const getLocalItems = () => {
    let data = localStorage.getItem('tableData');
    if (data) {
        return JSON.parse(localStorage.getItem('tableData'));
    } else {
        return [];
    }
}

function Home() {

    const [apidata, setApidata] = useState([])
    const [array, setArray] = useState([])
    const [ID, setID] = useState([])

    const [tableData, setTableData] = useState(getLocalItems())
    const [formInputData, setformInputData] = useState(
        {
            fullName: '',
            emailAddress: '',
            password: '',
            city: '',
            newState : '',
            dateTime : '',
            age : '',
            address : '',
            color : '',

        }
    );


    const [toggle, setTogggle] = useState(false)

    useEffect(() => {
        const temp = JSON.stringify(tableData)
        localStorage.setItem("tableData", temp)
        setArray(tableData)
    }, [tableData, toggle])


    const handleChange = (event) => {
        const { value, name } = event.target

        setformInputData(() => {
            return {
                ...formInputData,
                [name]: value
            }
        })
    }

    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


    const handleSubmit = (event) => {

        const { fullName, emailAddress, password, city, newState , dateTime, age , address , color} = formInputData

        event.preventDefault();
        if ( fullName === "")
             {
            toast.error("Please Enter Name", {
                autoClose: 2000,
            });

        }
        else if (fullName.length >= 15){
            toast.error("Please Enter valid name max-length 15 character", {
                autoClose: 2000,
            });
        } else if (emailAddress === ""){
            toast.error("Please Enter Email", {
                autoClose: 2000,
            });
        }else if (!emailAddress.includes("@")) {
            toast.error("Please Enter Valid Email", {
                autoClose: 2000,
            });
        } else if (password=== ""){
            toast.error("Please Enter password", {
                autoClose: 2000,
            });
        }else if (password.length <= 8){
            toast.error("Please Enter strong Password", {
                autoClose: 2000,
            });

        }
        else if (city === ""){
            toast.error("Please Select City", {
                autoClose: 2000,
            });
            
        }
        else if (newState === ""){
            toast.error("Please Select state", {
                autoClose: 2000,
            });
        }
        else if (dateTime === ""){
            toast.error("Please Select Date && Time", {
                autoClose: 2000,
            });
        }
        else if (age === ""){
            toast.error("Please Enter Age", {
                autoClose: 2000,
            });
       
        }else if (address === ""){
            toast.error("Please Enter Address", {
                autoClose: 2000,
            });
        }
        else if (address.length >= 500 ){
            toast.error("Please Enter valid Address max-length 500 character", {
                autoClose: 2000,
            });
        }
        else if (color==="" ){
            toast.error("Please choos Color", {
                autoClose: 2000,
            });
        }
        else {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            // save data after clear input ==
            toast.success("Thank You Data Save", {
                autoClose: 1500,
            });
            
            const emptyInput = { fullName: '', emailAddress: '', password: '', city: '', newState : '' ,dateTime :'' , age : '' , address : '' , color : '',  }
            setformInputData(emptyInput);
        }
    }





    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log(formInputData, array);
        array[ID].fullName = formInputData.fullName
        array[ID].emailAddress = formInputData.emailAddress
        array[ID].password = formInputData.password
        array[ID].city = formInputData.city
        array[ID].newState = formInputData.newState
        array[ID].dateTime = formInputData.dateTime
        array[ID].age = formInputData.age
        array[ID].address = formInputData.address
        array[ID].color = formInputData.color
        // let updatedArray = array
        // console.log(JSON.stringify(array));
        localStorage.setItem("tableData", JSON.stringify(array))
        setTogggle(false)
        setformInputData(
            {
                fullName: '',
                emailAddress: '',
                password: '',
                city: '',
                newState : '',
                dateTime : '',
                age : '',
                address : '',
                color : '',
            }
        )
    }


    // console.log(tableData)

    const deleteitem = (id) => {
        // console.log(id, "Hello")
        const updateitems = tableData.filter((data, ind) => {
            return ind !== id;
        })
        setTableData(updateitems)
    }

    const EditItem = (data, i) => {
        // console.log(i);
        setformInputData({
            fullName: data.fullName,
            emailAddress: data.emailAddress,
            password: data.password,
            city: data.city,
            newState : data.newState,
            dateTime: data.dateTime,
            age : data.age,
            address: data.address,
            color: data.color


        })
        setTogggle(true)
        setID(i)
    }

    return (
            <>
            <Container>
                <RegistrationForm handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleUpdate={handleUpdate} toggle={toggle} />
                <TableData tableData={tableData} deleteitem={deleteitem} EditItem={EditItem} setTableData={setTableData} />
            </Container>
            <ToastContainer />
            </>
            

        
    )
}


export default Home