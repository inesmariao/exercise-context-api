import React from 'react'
import './../styles/error-page.css';

export const ErrorPage = () => {
  return (
    <section id="not-found">
      <div id="title">Error404</div>
      <div className="circles">
        <p>404<br/>
        <small><strong>Ocurrió un ERROR página no encontrada</strong></small>
        </p>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </div>
  </section>
  )
}
