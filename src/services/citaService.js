
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL || "https://backend-sismedic.onrender.com"}/api/citas`;

// OBTENER CITAS
export const getCitas = async () => {
  const response = await axios.get(API);
  return response.data;
};

// CREAR CITA
export const crearCita = async (data) => {
  const response = await axios.post(API, data);
  return response.data;
};

// ELIMINAR CITA
export const eliminarCita = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};

// ACTUALIZAR CITA
export const actualizarCita = async (id, data) => {
  const response = await axios.put(`${API}/${id}`, data);
  return response.data;
};
