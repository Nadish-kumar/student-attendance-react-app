import React from 'react'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Form = () => {
  let navigate = useNavigate()
    let params = useParams()
    const formik = useFormik({
        initialValues: {
          status: 'Present',
          date :'',
          userId :  parseInt(params.id)
        },
        onSubmit: async (values) => {
        await fetch("http://localhost:3001/attendance",{
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
              "content-type" : "application/json"
            }
          })
      
         navigate(`/report/${params.id}`)
        },
      });
    return (
        <>
        
        <div className='d-sm=flex align-items-center justify-content-between mb-4'>
            <h1 className='h3 mb-0 text-gray-800'>Add Attendance</h1>
        </div>
       <form onSubmit={formik.handleSubmit}>
       <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>Status</label>
                    <select className='form-control'
                    name='status'
                     onChange={formik.handleChange}
                     value={formik.values.status}
                    >
                         <option value='present'>Present</option>
                         <option value='absent'>Absent</option>
                    </select>
                     </div>
                     <div className='col-lg-6'>
                         <label>Date</label>
                         <input className='form-control' type='date'
                         name='date'
                          onChange={formik.handleChange}
                          value={formik.values.date}
                         ></input>
                         </div>
                  <div className='col-lg-3'>
                <input  type='submit' className='btn btn-primary mt-3'></input>
                  </div>
            </div>

        </div>
       </form>
        </>
    )
}

export default Form
