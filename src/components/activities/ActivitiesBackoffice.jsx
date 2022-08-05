import React from 'react';
import style from "./styles/activitiesBackoffice.module.scss";


export const ActivitiesBackoffice = () => {

  let data = [
      {
        id: 1,
        name: "Talleres de lectura",
        content: "contenido de la actividad 1"      
      },{
        id: 2,
        name: "Programas educativos nivel primaria",
        content: "contenido de la actividad 2"              
      },{
        id: 3,
        name: "Programas educativos nivel Secundario",
        content: "contenido de la actividad 3"          
      },{
        id: 4,
        name: "Clases de Ajedrez",
        content: "contenido de la actividad 4"            
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
      <h2>Actividades</h2>

      <table className={style.table}>        
        <thead>
            <tr className={style.tr}>                            
                <th className={style.nameHeader}>Nombre de la actividad</th>           
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