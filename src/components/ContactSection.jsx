import { Instagram, Linkedin, Mail, Map, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
// import { useToast } from '../hooks/use-toast'

const ContactSection = () => {

    // const {toast} =  useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: 'Message Sent',
                description: 'Your message has been sent successfully!',
                duration: 5000,
                variant: 'success',
            })
        }, 1500);

        setIsSubmitting(false);
    }


    return (
        <section className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get in <span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or just want to say hello? Feel free to reach out!
                    I am always open to discussing new opportunities, collaborations, or just a friendly chat.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>
                            Contact Information
                        </h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a
                                        href= "mailto:devchansoria20@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        devchansoria20@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a
                                        href= "tel:+919319140524"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        +91 9319140524
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        Delhi , India
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect with me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a 
                                    target="_blank"
                                    href='https://www.linkedin.com/in/dev-chansoria-3781a4289/'>
                                    <Linkedin />
                                </a>
                                <a 
                                    target="_blank"
                                    href='https://www.instagram.com/devchansoria2004/'>
                                    <Instagram />
                                </a>
                                <a href='#'>
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'
                        onSubmit={handleSubmit}
                    >
                        <h3 className='text-2xl font-semibold mb-6'>
                            Send Me a Message
                        </h3>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='name' 
                                    className='block text-sm font-medium mb-2'
                                >
                                    Your Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name ='name'
                                    required
                                    className='w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Your Name'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' 
                                    className='block text-sm font-medium mb-2'
                                >
                                    Your Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name ='email'
                                    required
                                    className='w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder='Your Email'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' 
                                    className='block text-sm font-medium mb-2'
                                >
                                    Your Message</label>
                                <textarea
                                
                                    id='message'
                                    name ='message'
                                    required
                                    className='w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none'
                                    placeholder='Your Message'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='cosmic-button w-full flex items-center justify-center gap-2'
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection