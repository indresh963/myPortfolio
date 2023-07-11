import { useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(null);
  const toast = useRef(null);
  const [status, setStatus] = useState(null);
  const initialValues = {
    name: '',
    email: '',
    message: '',
    subject: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    message: Yup.string().required("Required"),
    subject: Yup.string().required('Required'),
  })

  const service_id = process.env.REACT_APP_SERVICE_ID
  const template_id = process.env.REACT_APP_TEMPLATE_ID
  const public_key = process.env.REACT_APP_PUBLIC_KEY
  console.log({service_id,template_id,public_key});
  const onSubmit = (value,onSubmitProps) => {
    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then(() => {
        setStatus("Email sent successfully");
      })
      .catch(() => {
        setStatus("Email couldn't be sent");
      })
      .finally(()=>{
        toast.current.classList.add('show');
        setTimeout(()=>{
        toast.current.classList.remove('show');
        },3000)
        onSubmitProps.resetForm();
      });
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return (
    <section id='contact'>
      <div className='container-fluid mb-3'>
        <div className='row justify-content-center'>
          <div className='col-10'>
            <h4>Contact Me</h4>
            <div className=' mt-5 gap-3 row justify-content-center align-items-center'>
              <div className='col-md-5 col-10' data-aos='fade-right'>
                <h2 className='mb-2'>Feel free to reach out and text me anytime! I'm always here ot chat.</h2>
                <h5>Looking forward to connecting with you! <span className='fs-3'>&#9996;</span></h5>
                <div className='location p-2 bg-light rounded d-inline-block mt-2'>
                  <p className='mb-0'>Based in <strong>Uttar Pradesh India</strong></p>
                </div>
                <img src={require('../Assets/pic.jpg')} className='img-fluid mt-2' alt='connecting' />
              </div>
              <div className='col-md-5 col-11' data-aos='fade-left'>
                <form ref={form} onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3 p-3  text-muted fw-bold'>
                  <span className='greeting'>Send me a message &#x1F680;</span>
                  <div>
                    <div className='form-floating'>
                      <input {...formik.getFieldProps('name')} type='text' className='form-control' name='name' placeholder='name' id='name' />
                      <label className='form-label z-0' htmlFor='name'>Name</label>
                    </div>
                    <div className='error'>
                      {
                        (formik.errors.name && formik.touched.name) && formik.errors.name
                      }
                    </div>
                  </div>
                  <div>
                    <div className='form-floating'>
                      <input {...formik.getFieldProps('email')} type='email' className='form-control' name='email' placeholder='Email' id='email' />
                      <label className='form-label z-0' htmlFor='email'>Email</label>
                    </div>
                    <div className='error'>
                      {
                        (formik.errors.email && formik.touched.email) && formik.errors.email
                      }
                    </div>
                  </div>
                  <div>
                    <div className='form-floating'>
                      <input {...formik.getFieldProps('subject')} type='text' className='form-control' name='subject' placeholder='subject' id='subject' />
                      <label className='form-label z-0' htmlFor='subject'>subject</label>
                    </div>
                    <div className='error'>
                      {
                        (formik.errors.subject && formik.touched.subject) && formik.errors.subject
                      }
                    </div>
                  </div>
                  <div>
                    <label className='form-label' htmlFor='message'>Write your message below</label>
                    <textarea {...formik.getFieldProps('message')} className='form-control' id='message' name='message' rows={4} />
                    <div className='error'>
                      {
                        (formik.errors.message && formik.touched.message) && formik.errors.message
                      }
                    </div>
                  </div>
                  <button type='submit' className='main-btn'>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={toast} className="toast position-fixed mt-4 top-0 start-50 translate-middle-x z-2 ">
        <div className="toast-header">
          <strong className="me-auto text-primary">Email Confirmation</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div className="toast-body">
          <p className='text-success'>{status}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact