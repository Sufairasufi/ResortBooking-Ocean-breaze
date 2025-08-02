import React, { useEffect, useState } from 'react'
import './Service.css'


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect (() => {
        const fetchUser = async ()=> {
            try {
                const response = await fetch('/Data/Service.json')
                const data = await response.json()
                console.log(data)
                setServices(data)
            }catch(error) {
                console.error(error)
            }
        }
        fetchUser()
    },[])
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-img" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service