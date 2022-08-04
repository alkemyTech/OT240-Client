import React from 'react';
import style from "./styles/testimonialBackoffice.module.scss";


export const TestimonialBackoffice = () => {

  let data = [
      {
        id: 1,
        name: "Mauricio Yapura",
        content: "contenido del testimonio 1"      
      },{
        id: 2,
        name: "Juan Perez",
        content: "contenido del testimonio 2"      
      },{
        id: 3,
        name: "María López",
        content: "contenido del testimonio 3"      
      },{
        id: 4,
        name: "Laura Gómez",
        content: "contenido del testimonio 4"
      }
  ];

  const handleEdit = (e) => {
    console.log("boton editar")
  };
  
  const handleDelete = () => {
    console.log("boton eliminar")
  }

  return (
    
    <div className={style.container}>
      <h2>Testimonios</h2>

      <table className={style.table}>        
        <thead>
            <tr className={style.tr}>                            
                <th className={style.nameHeader}>Nombre</th>           
                <th className={style.optHeader}>Opciones</th>            
            </tr>
        </thead>
        <tbody>
          {
            data.map( (registro)=>(
              <tr key={registro.id} className={style.tr}>
                  <td className={style.name}>{registro.name}</td>                                  
                  <td className={style.options}>
                      <button className={style.buttonEdit} onClick={()=>handleEdit()}>Editar</button>
                      <button className={style.buttonDelete} onClick={()=>handleDelete()}>Eliminar</button>
                  </td>
              </tr> 
              ) )
          }
        </tbody>      
      </table>     
    
    </div>

  )
}
