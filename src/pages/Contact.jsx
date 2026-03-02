import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () =>{
    const formRef = useRef(null);
    const [form,setForm]=useState({name:'' , email: '' , message: ''})
    const [isLoading , setIsLoading]=useState(false);
    
    const handleChange =(e) =>{
          setForm({...form, [e.target.name]:e.target.value})
    };
    const handleFocus = (e) =>{
      e.preventDefault();
      setIsLoading(true);

      emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name:form.name,
          to_name:"Manobalan",
          from_email: form.email,
          to_email:'contact@anchortrics.ac',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() =>{
        setIsLoading(false);

      }).catch((error) =>{
        setIsLoading(false);
        console.log(error);
      })
    };
    const handleBlur = () =>{};
    const handleSubmit = () =>{};
    return(
        <section className='relative flex lg:flex flex-col
        max-container'>
           <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>Get in Touch</h1>
            <form
             className='w-full flex flex-col gap-7 mt-14'
             onSubmit={handleSubmit}
            >
                <label className='text-black font-semibold'>
                    Name
                   <input 
                     type='text'
                     name='name'
                     className='input'
                     placeholder='Enter your name'
                     required
                     value={form.name}
                     onChange={handleChange}
                     onFocus={handleFocus}
                     onBlur={handleFocus}
                   />
                </label>
                 <label className='text-black font-semibold'>
                    Email
                   <input 
                     type='email'
                     name='email'
                     className='input'
                     placeholder='Enter your email'
                     required
                     value={form.email}
                     onChange={handleChange}
                     onFocus={handleFocus}
                     onBlur={handleFocus}
                   />
                </label>
                 <label className='text-black font-semibold'>
                    Message
                   <textarea 
                     type='text'
                     name='input'
                     className='input'
                     placeholder='Let me know how I can help you?'
                     required
                     value={form.message}
                     onChange={handleChange}
                     onFocus={handleFocus}
                     onBlur={handleFocus}
                   />
                </label>
                <button
                  type='submit'
                  className='btn'
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                disabled={isLoading}
                >
                    {isLoading ? 'Sending... ': 'Send Message'}
                </button>
            </form>
           </div>
        </section>
    )
}
export default Contact;