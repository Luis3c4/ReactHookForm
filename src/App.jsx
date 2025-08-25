import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(errors);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        {...register("nombre", {
          required: {
            value: true,
            message: "El nombre es obligatorio",
          },
          minLength: {
            value: 2,
            message: "El nombre debe tener mas de dos caracteres",
          },
          maxLength: {
            value: 20,
            message: "El nombre debe tener menos de 20 caracteres",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}

      <label htmlFor="correo">Correo</label>
      <input
        type="email"
        {...register("correo", {
          required: {
            value: true,
            message: "El correo es obligatorio",
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "El correo no es válido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}

      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "La contraseña es obligatoria",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe tener al menos 6 caracteres",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <label htmlFor="confirmarPassword">Confirmar Contraseña</label>
      <input
        type="password"
        {...register("confirmarPassword", {
          required: {
            value: true,
            message: "La confirmación de contraseña es obligatoria",
          },
          validate: (value) =>
            value === watch("password") || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirmarPassword && (
        <span>{errors.confirmarPassword.message}</span>
      )}
      <label htmlFor="fecha">Fecha de nacimiento</label>
      <input
        type="date"
        {...register("fecha", {
          required: {
            value: true,
            message: "La fecha de nacimiento es obligatoria",
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad =
              fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            return edad >= 18 || "Debes ser mayor de edad";
          },
        })}
      />
      {errors.fecha && <span>{errors.fecha.message}</span>}

      <label htmlFor="pais">Pais</label>
      <select name="pais" id="pais" {...register("pais")}>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
      </select>
      {watch("pais") === "argentina" && (
        <>
          <input
            type="text"
            placeholder="provincia"
            {...register("provincia", {
              required: {
                value: true,
                message: "La provincia es obligatoria",
              },
            })}
          />
          {errors.provincia && <span>{errors.provincia.message}</span>}
        </>
      )}
      <label htmlFor="file">foto de perfil</label>
      <input type="file" id="file" {...register("file")} />
      <label htmlFor="terminos">Aceptar términos y condiciones</label>
      <input type="checkbox" id="terminos" {...register("terminos")} />
      <button type="submit">enviar</button>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}

export default App;
