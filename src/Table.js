import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Table = () => {
    const [visible, setvisible] = useState([])
    useEffect(async () => {
     try {
        let studentdata= await fetch("https://619479a19b1e780017ca1f90.mockapi.io/students");
        let studentlist = await studentdata.json()
         setvisible(studentlist)
    } catch (error) {
        console.log(error);
    }
    }, [])
    return (
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Student List</h6>
           <button class="btn btn-primary mt-3">Create Report</button>
          
        </div>
        
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Income</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            visible.map((obj) => {
                                return <tr>
                                    <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.avatar}</td>
                                <td>
                                    <Link to={`/report/${obj.id}`}>
                                    <button className="btn btn-primary">View</button>
                                    </Link>
                                    
                                    </td>
                                
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

export default Table
