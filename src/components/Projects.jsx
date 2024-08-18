import React from 'react'
import websiteImg1 from '../assets/e-book.png';
import websiteImg2 from '../assets/travel-ease.png';
import websiteImg3 from '../assets/Fruit Store.png';
import websiteImg4 from '../assets/JBL-Headphones.png';
import websiteImg5 from '../assets/yummy-restaurant.png';
import websiteImg6 from '../assets/Weather-app.png';
import websiteImg7 from '../assets/KaziNazrul.png';
import websiteImg8 from '../assets/RandomFox.png';
import websiteImg9 from '../assets/RandomFacts.png';
import websiteImg10 from '../assets/ShoppingCart.png';
import websiteImg11 from '../assets/ToDoApp.png';
import websiteImg12 from '../assets/UserManagement.png';
import websiteImg13 from '../assets/MentorStudent.png';
import websiteImg14 from '../assets/PasswordReset.png';
import websiteImg15 from '../assets/URLShorteningApp.png';
import websiteImg16 from '../assets/IMS.png'

function Projects() {

    const config = {
        projects : [
        {
            id: 1,
            image : websiteImg1,
            desc : "E-Book Website, Built with HTML, CSS, JS",
            link : "https://e-book-website.netlify.app/"
        },
        {
            id: 2,
            image : websiteImg2,
            desc : "Travel Booking Website, Built with HTML, CSS, JS",
            link : "https://travel-ease-website.netlify.app/"
        },
        {
            id: 3,
            image : websiteImg3,
            desc : "Fruit Store Website, Built with HTML, CSS, JS",
            link : "https://fruit-store-online.netlify.app/"
        },
        {
            id: 4,
            image : websiteImg4,
            desc : "JBL Headphones Website, Built with HTML, CSS, JS",
            link : "https://jbl-website.netlify.app/"
        },
        {
            id: 5,
            image : websiteImg5,
            desc : "Restaurant Website, Built with HTML, CSS, JS",
            link : "https://yummy-restaurant-website.netlify.app/"
        },
        {
            id: 6,
            image : websiteImg6,
            desc : "Weather Check Website, Built with HTML, CSS, JS",
            link : "https://weathercheck-application.netlify.app/"
        },
        {
            id: 7,
            image : websiteImg7,
            desc : "Kazi Nazrul Islam - History, Built with HTML, CSS, Bootstrap",
            link : "https://kazi-nazrul-islam-website.netlify.app/"
        },
        {
            id: 8,
            image : websiteImg8,
            desc : "Random Fox Image Generator, Built with HTML, CSS, Bootstrap ,JS",
            link : "https://random-fox-images-generator.netlify.app/"
        },
        {
            id: 9,
            image : websiteImg9,
            desc : "Random Facts Generator, Built with HTML, CSS, JS",
            link : "https://random-useless-facts.netlify.app/"
        },
        {
            id: 10,
            image : websiteImg10,
            desc : "Shopping Cart, Built with React.js, Bootstrap",
            link : "https://shoping-cart-demo.netlify.app/"
        },
        {
            id: 11,
            image : websiteImg11,
            desc : "Todo App, Built with React.js, Bootstrap",
            link : "https://demo-todo-application.netlify.app/"
        },
        {
            id: 12,
            image : websiteImg12,
            desc : "User Management Application, Built with MERN stack",
            link : "https://fullstack-demo-user-management.netlify.app/"
        },
        {
            id: 13,
            image : websiteImg13,
            desc : "Mentor Student Management Application, Built with MERN stack",
            link : "https://mentor-student-demo.netlify.app/"
        },
        {
            id: 14,
            image : websiteImg14,
            desc : "Password Reset Application, Built with MERN stack",
            link : "https://demo-password-reset.netlify.app/"
        },
        {
            id: 15,
            image : websiteImg15,
            desc : "URL Shortening Application, Built with MERN stack",
            link : "https://demo-url-shortener-application.netlify.app/"
        },
        {
            id: 16,
            image : websiteImg16,
            desc : "Inventory Management System, Built with MERN stack",
            link : "https://progoods-inventory-management.netlify.app/"
        },
    ]}

  return (
    <section id='Projects' className='flex flex-col py-10 px-5 justify-content bg-secondary text-white'>
        <div className='w-full'>
            <div className='flex flex-col px-4 md:px-12'>
                <h1 className='text-4xl border-b-2 mb-5 w-[125px]'>Projects</h1>
                {/* <p className='mb-4'>These Are some of my projects, built with HTML CSS JS</p> */}
            </div>  
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row justify-evenly flex-wrap px-4 md:px-10 gap-5'>
                {config.projects.map ((project, index) => (
                    <div className='relative' key={index}>
                    <img src={project.image} alt="e-book" className='h-[200px] w-[340px]'/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.desc}</p>
                        <div className='flex justify-center'>
                        <a href={project.link} target='_blank' className='btn'>View Project</a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
           
        </div>
    </section>
  )
}

export default Projects