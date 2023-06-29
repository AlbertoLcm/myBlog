import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
});

export function Suscription() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container__section">
      <section className="section__form">
        <div>
          <h2>Suscribete para nuevo contenido.</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div>
                <label htmlFor="email">Correo electrónico:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Suscribete
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
}
