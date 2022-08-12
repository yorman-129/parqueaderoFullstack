import axios from 'axios';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'


const url = "http://localhost:3001/api/parqueadero";


const App = () => {


  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');
  const [modalInsertar, setModalInsertar] = useState(true);
  // const [modalEditar, setModalEditar] = useState(false);



  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data);
    });
   
  }, []);

  const addEntrance = (event) => {
    event.preventDefault();
if(data.length>=30){
  alert("El parqueadero esta lleno")
}else{
    const entranceObject = {
      id: data.length + 1,
      placa: newData,
      horaIngreso: new Date().toISOString(),
      valor: 0
    }
    delete entranceObject.id;
    const response=axios.post(url, entranceObject);
    console.log(response);
    setData([...data, response.data]);
    //setData(data.concat(entranceObject));//enviamos nueva nota al estado del componente
    setNewData('');//Limpiamos el input
  }
  }
  /*peticionesGet =()=>{
      axios.get(url).then(response => {
        this.setState({data: response.data});
      }
    ).catch(error => {
      console.log(error.message);
    })}
  
  componentDidMount() {
      this.peticionesGet();
    }
  
  peticionPost = ()=>{
    delete this.state.form.id;
    axios.post(url, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionesGet();
      console.log(response)
    }
  ).catch(error => {
    console.log(error.message);
  })}
  */
  const handleChange = (event) => {
    setNewData(event.target.value);
  }

  const abrirInsertar = () => {
    setModalInsertar(!modalInsertar);
  }
  const pago = (id) => {
    console.log(data)
    axios.delete(url).then(response => {
      console.log(response);
      setData(data.filter(item => item.id !== id));
    })
  }



  return (
    <>
      <div className='App'>
        <br></br>
        <button className='btn btn-success' onClick={() => abrirInsertar()} style={{ display: 'block' }}>Ingreso Vehiculo</button>
        <br />
        <br />
        <table className='table'>
          <thead></thead>
          <th>Id</th>
          <th>Placa</th>
          <th>Hora Ingreso</th>
          <th>acciones</th>
          <tbody>
            {data.map((elemento) => (
              <tr key={elemento}>
                <td>{elemento.id}</td>
                <td>{elemento.placa}</td>
                <td>{elemento.horaIngreso}</td>
                <td><button className='btn btn-primary'>Editar</button>{" "}<button className='btn btn-danger' onClick={()=>alert('Total a pagar es:')}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <Modal isOpen={!modalInsertar} >
        <ModalHeader><h3>Realizar Ingreso</h3></ModalHeader>
        <ModalBody>
          <form>
            <label>
              Id:
            </label>
            <input className='form-control' readOnly type="text" value={data.length + 1}></input>
          </form>

          <FormGroup>
            <label>
              Placa
            </label>
            <input className='form-control' name='placa' type="text" onChange={handleChange}>
            </input>
          </FormGroup>

          <FormGroup>
            <label>
              Hora Ingreso
            </label>
            <input className='form-control' name='horaIngreso' type="text" onChange={handleChange} value={Date().toString()}>
            </input>
          </FormGroup>

          <FormGroup>
            <label>
              Valor
            </label>
            <input className='form-control' name='valor' type="text" onChange={handleChange} value='0'>
            </input>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <button className='btn btn-primary' type='submit' onClick={addEntrance}>Insertar</button>
          <button className='btn btn-danger' onClick={abrirInsertar}>Cancelar</button>
        </ModalFooter>
      </Modal>




    </>
  );
}

export default App;
