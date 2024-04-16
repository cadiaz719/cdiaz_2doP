const {Router, json}=require('express');
const consultas=require('../consultas');
const router=Router();

router.get('/',async(req, res)=>{
    const consulta=await consultas.getClientes();
    return res.status(200).json(consulta); 
})

router.get('/:id', async(req, res)=>{
    const {id}=req.params;
    const consulta=await consultas.getClienteByID(id);
    if (consulta.lenght===0){
        return res.status(400).json({mensaje:"Cliente no encontrado"});
    }
    return res.status(200).json(consulta);
});


router.post('/', async(req, res) => {
    const { nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra} = req.body;
    const consulta = await consultas.insertCliente(nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra);
    return res.status(200).json(consulta);

});


router.put('/', async(req,res)=>{
    const{nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra}=req.body;
    const consulta=await consultas.updateCliente(nombre, info, fechacomienzo, fechafinal, tipocampana, meta, presupuesto, estado, metrica, equipo, extra)
    if (consulta === null) {
        return res.status(400).json({ mensaje: 'cliente no encontrado'});
    }
    return res.status(200).json({ mensaje: 'cliente actualizado correctamente'});
})

module.exports=router;