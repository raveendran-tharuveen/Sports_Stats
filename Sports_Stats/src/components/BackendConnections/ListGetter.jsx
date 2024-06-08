import React, { useState, useEffect } from "react"
import axios from "axios"

const ListGetter = () => {
    const [array, setArray] = useState([])
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api/users")
        console.log(response.data.users)
        setArray(response.data.users)
    }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div>
            {
                array.map((user, index) => (
                    <div key={index}>
                        <span>{user}</span>
                        <br></br>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default ListGetter