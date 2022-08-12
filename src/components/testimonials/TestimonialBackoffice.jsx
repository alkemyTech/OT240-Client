import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import fetchApi from '../../axios/axios';
import style from "./styles/testimonialBackoffice.module.scss";


export const TestimonialBackoffice = () => {

  const navigate = useNavigate();
  const location = useLocation();  
  const [testimonials, setTestimonials] = React.useState([]);

  React.useEffect(() => {    
    const getTestimonials = async () => {
      try {
        const { data } = await fetchApi({ method: 'get', url: '/testimonials' });
        setTestimonials(data);
      } catch (err) {
        console.log("Error en el get");        
      }  
    };
    getTestimonials();    
  }, []);
  

  const handleEdit = ({id, fields}) => {       
    navigate("editar", {
      state: {
        id,
        title: 'Editar Testimonio',
        options: { method: 'put', url: `/testimonials/${id}` },
        from: location,
        fields
      },
    });    
  };
  
  const handleDelete = async(id) => {
    try {      
      await fetchApi({method: 'delete', url: `/testimonials/${id}`});
      alert("Testimonio eliminada");
    } catch (error) {      
      alert(error.response.data.error)
    }
  };

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
            testimonials.map( ({id, name, image, content})=>(
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
