
const Formulario = () => {
  return (
    
    <div className="md:w-1/2 lg:w-2/5 bg-gray-300 min-h-screen">
        <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className=" text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className=" text-indigo-600 font-bold">Administralos</span>
        </p>
        <form className=" bg-white shadow-md rounded-lg py-10 px-5">
          <div className=" mb-5">
            <label htmlFor="mascota" className=" block text-gray-700 uppercase font-bold">
              Nombre Mascota
            </label>
            <input 
                  id="mascota"  
                  type="text"
                  placeholder="Nombre de la mascota"
                  className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            />
          </div>
          
          <div className=" mb-5">
            <label htmlFor="propietario" className=" block text-gray-700 uppercase font-bold">
              Nombre del Propietario
            </label>
            <input 
                  id="propietario"  
                  type="text"
                  placeholder="Nombre del propietario"
                  className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </div>
        </form>
    </div>
  )
}

export default Formulario

