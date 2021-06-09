import axios from 'axios';

export default class ProductService {

    getProductsSmall() {
        return axios.get('data/products-small.json')
            .then(res => res.data.data);
    }

    getProducts() {
        return axios.get('data/products.json')
            .then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('data/products-orders-small.json')
            .then(res => res.data.data);
    }

    buscarPaciente = async(nombre)=>{

        const p = await axios.get(`http://localhost:4000/api/pacientes?nombre=${nombre}`)
        return p.data.respuesta
               
    }

    buscarPacienteSeleccionado = async(_id)=>{
        const p = await axios.get(`http://localhost:4000/api/pacientes?_id=${_id}`)
        return p.data
    }

}