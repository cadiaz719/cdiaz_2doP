const conexion=require('./conexion');

const getClientes=async ()=>{
    const [consulta]=await conexion.
    execute('select * from campanas');
    return consulta;
}


const getClienteByID=async(id)=>{
    const[consulta]=await conexion.execute('SELECT * FROM campanas WHERE id=?',[id]);
    return consulta;
}


const insertCliente= async (nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra) => {
    const [consulta]= await conexion.execute('INSERT INTO campanas(nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra)  VALUES (?,?,?)'
        [nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra]);
    return consulta;
    
}



const updateCliente=async(nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra)=>{
    const myClient=await getClienteByID(id);
    if (myClient.length===0){
        return null;
    }
    const [consulta]=await conexion.execute('UPDATE campanas SET nombre=?, info=?, fechacomienzo=?, fechafinal=?, tipocampana=?, meta=?, presupuesto=?, estado=?, metrica=?, equipo=?, extra=?;',
    [nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra]);
    return consulta;
}


module.exports={ getClientes, getClienteByID, insertCliente, updateCliente}