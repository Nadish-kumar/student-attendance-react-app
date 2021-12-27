import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Attendance = () => {
   
    const [visible, setvisible] = useState([])
    useEffect(async () => {
    try {
        let userdata = await fetch(`http://localhost:3001/attendance?userId=${params.id}`);
    let data = await userdata.json();
     setvisible(data)
    } catch (error) {
        console.log(error);
    }
    }, [])

    let params= useParams()
    return (
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Student</h6>
            <Link to={`/add-attendance/${params.id}`}><button class="btn btn-primary mt-3">Add Attendance</button>
            </Link>
        </div>
        
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Date</th>
                        
                        </tr>
                    </thead>

                    <tbody>
                        {
                            visible.map((object) => {
                                return  <tr>
                                <td>{object.status}</td>
                                <td>{object.date}</td>
                                </tr>
                            })
                        }
                       
                    
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Attendance
