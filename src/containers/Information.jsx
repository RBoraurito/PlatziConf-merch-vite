import React from 'react'
import '@/styles/components/Information.css'

const Information = () => (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" name="name" id="" placeholder="Nombre completo" />
            <input type="email" name="email" id="" placeholder="Correo eletrónico" />
            <input type="text" name="address" id="" placeholder="Dirección" />
            <input type="text" name="apto" id="" placeholder="Apto" />
            <input type="text" name="city" id="" placeholder="Ciudad" />
            <input type="text" name="country" id="" placeholder="País" />
            <input type="text" name="state" id="" placeholder="Estado" />
            <input type="text" name="zip" id="" placeholder="Código postal" />
            <input type="text" name="phone" id="" placeholder="Telófono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
            Pagar
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )

export default Information
