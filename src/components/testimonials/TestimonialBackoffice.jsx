import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestimonial } from '../../redux/actions/testimonial.action';

export const TestimonialBackoffice = () => {

  const navigate = useNavigate();
  const location = useLocation();  
  //const [testimonials, setTestimonials] = React.useState([]);
  const dispatch = useDispatch();
  const { entries, loading, error } = useSelector((state) => state.testimonial);

  React.useEffect(() => {    
    dispatch(fetchTestimonial({ url: '/testimonials' }));      
  }, [dispatch]);  

  const handleEdit = (fields) => {       
    const { name, content, image, id } = fields;
    navigate("editar", {
      state: {
        id,
        title: 'Editar Testimonio',
        fields: { name, content, image },
        options: { method: 'put', url: `/testimonials/${id}` },
        from: location,
      },
    });    
  };
  
  const handleDelete = async(fields) => {
    const confirmDelete = window.confirm(
      `Desea borrar el testimonio "${fields.name}"?\nEsta operación no puede deshacerse!`
    );
    if (confirmDelete) {
      dispatch(fetchTestimonial({ url: `/testimonials/${fields.id}`, method: 'delete' }));
    }
  };
  const handleAdd = () => {
    navigate("crear", {
      state: {
        title: 'Crear Testimonio',
        options: { method: 'post', url: `/testimonials` },
        from: location,
        fields: { name: "", image: '', content: "" },
      },
    });
  };

  return (
    <Table
      title='Testimonios'
      tableHeader={['Titulo', 'Contenido']}
      tableRowsData={entries}
      tableRowsProperties={['name', 'content']}
      buttons={[
        { title: 'Editar', handler: handleEdit, className: 'white' },
        { title: 'Eliminar', handler: handleDelete, className: 'orange' },
      ]}
      loading={loading}
      addBtnHandler={handleAdd}
    />
    

  )
}
