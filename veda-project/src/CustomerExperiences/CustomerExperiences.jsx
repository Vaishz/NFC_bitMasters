import React from "react";
import "./CustomerExp.css"; 
function CustomerExperiences() {
  const customers = [
    {
      id: 1,
      name: "Cuss1",
      quote: "My Experience with Veda Redefined was miraculous",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor1.png",
    },
    {
      id: 2,
      name: "Cuss2",
      quote: "Veda Redefined products changed my life!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor2.png",
    },
    {
      id: 3,
      name: "Cuss3",
      quote: "Incredible results with Veda Redefined!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor3.png",
    },
    {
      id: 4,
      name: "Cuss4",
      quote: "Highly recommend Veda Redefined's products!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor4.png",
    },
    {
      id: 5,
      name: "Cuss5",
      quote: "Amazing experience with Veda Redefined",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor5.png",
    },
    {
      id: 6,
      name: "Cuss6",
      quote: "Veda Redefined's products are outstanding!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor6.png",
    },
    {
      id: 7,
      name: "Cuss7",
      quote: "Transformed my health with Veda Redefined",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor7.png",
    },
    {
      id: 8,
      name: "Cuss8",
      quote: "Couldn't be happier with Veda Redefined",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor8.png",
    },
    {
      id: 9,
      name: "Cuss9",
      quote: "Amazing service and products from Veda Redefined",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor9.png",
    },
    {
      id: 10,
      name: "Cuss10",
      quote: "Impressed with Veda Redefined's quality",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eius laborum fugit quae amet dignissimos impedit ad ut! Ea, corrupti. Harum beatae ipsa illum est explicabo dolor",
      image: "Images/doctor10.png",
    },
  ];

  return (
    <div className="cust-scroll-container">
      {customers.map((customer) => (
        <div className="cust-card-container" key={customer.id}>
          <div className="cust-card">
            <div className="cust-card-img-container">
              <img src={customer.image} alt={customer.name} />
            </div>
            <div className="cust-details">
              <h3>Name: {customer.name}</h3>
              <h1>"{customer.quote}"</h1>
              <h2>{customer.description}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerExperiences;
