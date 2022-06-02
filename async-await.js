// Aqui lo nuevo sería el try, async, es la versión más resumida de las promesas.

const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    
    },
    
    {
        id: 2,
        nombre: 'Linda'
    
    },
    
    {
        id: 3,
        nombre: 'Karen'
    
    },
    ];
    
    const salarios = [
        {
            id: 1,
            salario: 1000
        
        },
        
        {
            id: 2,
            salario: 1500
        
        },
 ];

 const getEmpleado = ( id )  => {

     return new Promise( (resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;
        ( empleado )  // Esta es una versión resumida de if else, incluso el return que pasó de estar abajo a arriba en return new promise
          ?  resolve ( empleado )               
          :  reject (`No existe empleado con id ${ id } `);
        
    });
         
}
const getSalario = ( id ) => {

    return new Promise( (resolve, reject ) => {
        
        const salario = salarios.find(s => s.id === id)?.salario;
        ( salario )
        ? resolve ( salario )
        : reject (`No existe salario con el ${ id }`);
    });
}

const getInfoUsuario = async( id ) => {

try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${ empleado } es de ${ salario }`
}   catch (error) {
        return error;
}

}
const id = 5;

getInfoUsuario ( id )
    .then( msg => console.log(msg) )
    .catch( err => console.log( err ) ); 

