import React from "react";
import WorkCaseIcon from '../../assets/icons/profile/work-case-svgrepo-com 1.svg'
import '../../components-css/Profile/ExperienceCSS.css'



function Product({ products = [] }) {
  
  if (products.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center',margin:'20px',fontStyle: 'italic', color: '#858585' }}>
          <p>Product hasn't been set</p>
        </div>
    );
  }
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="experience-item">
          <div className="title-and-icon justify-item-center" >
            <img src={WorkCaseIcon} alt="Work Case Icon" className="work-case-icon" />
            <h6>
              {product.title}
            </h6>
            
          </div>
          <div className="details">
            <p>
              {new Date(product.date).toLocaleString('default', { day:'numeric', month: 'long', year: 'numeric' })} 
            </p>
            <p>
              {product.description}
            </p>

          </div>
        </div>
      ))}
    </>
  );
}

export default Product;