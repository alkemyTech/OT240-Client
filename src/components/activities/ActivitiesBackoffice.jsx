import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import fetchApi from '../../axios/axios';
import style from "./styles/activitiesBackoffice.module.scss";


export const ActivitiesBackoffice = () => {

  const navigate = useNavigate();
  const location = useLocation();  
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {    
    const getActivities = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/activities' });
        setActivities(data);
      } catch (err) {
        console.log("Error en el get");        
      }
    };
    getActivities();    
  }, []);

  const handleEdit = ({id, fields}) => {       
    navigate("editar", {
      state: {
        id,
        title: 'Editar Actividad',
        options: { method: 'put', url: `/activities/${id}` },
        from: location,
        fields
      },
    });    
  };

  const handleDelete = async(id) => {
    try {      
      await fetchApi({method: 'delete', url: `/activities/${id}`});
      alert("Actividad eliminada");
    } catch (error) {      
      alert(error.response.data.error)
    }
  };

  const handleAdd = () => {
    navigate("crear", {
      state: {
        title: 'Crear Actividad',
        options: { method: 'post', url: `/activities` },
        from: location,
        fields: { name: "", image: '', content: "" },
      },
    });
  };
  

  return (

    <div className={style.container}>
      <h2>Actividades</h2>       
      <div className={style.add}>
        <button className={style.new} onClick={()=>handleAdd()}>Nueva Actividad</button>
      </div>
      <table className={style.table}>        
        <thead>
            <tr className={style.tr}>                            
                <th className={style.nameHeader}>Nombre de la actividad</th>           
                <th className={style.optHeader}>Opciones</th>            
            </tr>
        </thead>
        <tbody>
          {            
            activities.map( ({id, name, image, content})=>(
              
              <tr key={id} className={style.tr}>
                  <td className={style.name}>{name}</td>                                  
                  <td className={style.options}>
                      <button className={style.buttonEdit} onClick={()=>handleEdit({id, fields:{name, image, content}})}>Editar</button>
                      <button className={style.buttonDelete} onClick={()=>handleDelete(id)}>Eliminar</button>
                  </td>
              </tr> 
              
              ) )
          }
        </tbody>      
      </table>   
    </div>
  )
}