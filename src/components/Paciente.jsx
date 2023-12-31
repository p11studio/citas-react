

const Paciente = () => {
  return (
    <div className=" m-3 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className=" font-normal normal-case">Spike</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className=" font-normal normal-case">Hugo Ponce</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className=" font-normal normal-case">30 de octubre de 2023</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className=" font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum qui aliquam nobis ratione odio pariatur exercitationem et quibusdam omnis provident quod, iusto ex expedita quis molestias architecto nihil fugiat perferendis.</span>
        </p>
    </div>
  )
}

export default Paciente