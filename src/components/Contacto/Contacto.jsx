import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs, { sendForm } from '@emailjs/browser';
import "./Contacto.css";


export const Contacto = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5fr4gkj', 'template_2pxxjci', form.current, 'qRvXJe7NgzSYpmMde')
            .then((result) => {
                console.log(result.text);
                console.log('Formulario Enviado');

            }, (error) => {
                console.log(error.text);
            });
    };

    return (<section className="contact container section" id='contacto'>
        <h2 className="section__title">Contactarme</h2>



        <div className="contact__container grid">
            <div className="contact__i">
                <h3 className="contact__title">¡Hablemos de todo!</h3>
                <p className="contact__details">
                    ¿No te gustan los formularios? Envíame un correo electrónico. 👋</p>
            </div>


            <Formik initialValues={{ nombre: '', correo: '', mensaje: '', }} validate={(valores) => {
                let errores = {};
                //Validacion Nombre
                if (!valores.nombre) {
                    errores.nombre = 'por favor ingrese un nombre'
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                }
                //Validacion Correo
                if (!valores.correo) {
                    errores.correo = 'por favor ingrese un correo'
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                    errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                }
                if (!valores.mensaje) {
                    errores.mensaje = 'por favor ingrese un mensaje'
                }
                return errores;
            }}
                onSubmit={(valores, { resetForm, sendEmail }) => {

                    resetForm();
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 3000);


                }}
            >
                {({ errors }) => (
                    <Form action=""
                        ref={form}
                        className="contact__form"
                        onSubmit={sendEmail}>

                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <Field
                                    type="text"
                                    id='nombre'
                                    name='nombre'
                                    className="contact__form-input"
                                    placeholder='Ejemplo de nombre: Carlos'


                                />
                                <ErrorMessage name='nombre' component={() => (
                                    <div className='error'>{errors.nombre}</div>
                                )} />

                            </div>

                            <div className="contact__form-div">
                                <Field type="email"
                                    name='correo' id='correo'
                                    className="contact__form-input"
                                    placeholder='Ejemplo correo: correo@correo.com'


                                />
                                <ErrorMessage name='correo' component={() => (
                                    <div className='error'>{errors.correo}</div>
                                )} />

                            </div>

                        </div>
                        <div className="contact__form-div contact__form-area">
                            <Field type="text"
                                as="textarea"
                                name="mensaje"
                                id="mensaje"
                                cols="30"
                                rows="10"
                                className='contact__form-input'
                                laceholder='Ejemplo de Mensaje: Hola, un gusto. . .'

                            >

                            </Field>
                            <ErrorMessage name='mensaje' component={() => (
                                <div className='error'>{errors.mensaje}</div>
                            )} />
                        </div>
                        <button className='btn'>Enviar mensaje</button>
                        {formularioEnviado && <p className='exito'> Formulario enviado con exito ! 😀 </p>}

                    </Form>
                )}

            </Formik>
        </div>


    </section>
    )
}

export default Contacto