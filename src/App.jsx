import { useForm } from "react-hook-form"

function App() {
const {register, handleSubmit} = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register("nombre",{required:true})}/>
      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("correo")}/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" {...register("password")}/>
      <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
      <input type="password" {...register("confirmarPassword")}/>
      <label htmlFor="fecha">Fecha de nacimiento</label>
      <input type="date" {...register("fecha")}/>
      <label htmlFor="pais">Pais</label>
      <select name="pais" id="pais" {...register("pais")}>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
      </select>
      <label htmlFor="file">foto de perfil</label>
      <input type="file" id="file" {...register("file")}/>
      <label htmlFor="terminos">Aceptar términos y condiciones</label>
      <input type="checkbox" id="terminos" {...register("terminos")}/>
      <button type="submit">enviar</button>
    </form>

  )
}

export default App
