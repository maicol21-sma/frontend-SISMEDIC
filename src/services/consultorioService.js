import axios from "axios";

const API = `${import.meta.env.VITE_API_URL || "https://backend-sismedic.onrender.com"}/api/consultorios`;

// OBTENER
export const getConsultorios = async () => {

  const response = await axios.get(API);

  return response.data;
};


// CREAR
export const crearConsultorio = async (consultorio) => {

  const response = await axios.post(
    API,
    consultorio
  );

  return response.data;
};


// ACTUALIZAR
export const actualizarConsultorio = async (
  id,
  consultorio
) => {

  const response = await axios.put(
    `${API}/${id}`,
    consultorio
  );

  return response.data;
};


// ELIMINAR
export const eliminarConsultorio = async (id) => {

  const response = await axios.delete(
    `${API}/${id}`
  );

  return response.data;
};