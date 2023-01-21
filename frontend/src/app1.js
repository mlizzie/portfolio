//import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'
import {SiTelegram} from 'react-icons/si'




function App() {
  return (
    <main>
    <div className='px-8 md:px-20 lg:px-40'>
    <Navbar />

     <section id='home' className='min-h-screen text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/avatar.png' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Nikita Koryakov</h1>
        <h3 className='text-xl md:text-2xl'>DevOps Engineer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Enthusiastic and motivated self-learning about information technology. Focused on cloud computing, devsecops, and web development. Now I am looking for more experience in my field. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <a href={`https://www.linkedin.com/in/nikita-koryakov-196b13244/`}> <AiFillLinkedin /> </a>
          <a href={`https://github.com/mlizzie`}><AiFillGithub /> </a>
          <a href={`https://t.me/nikita_koryakov`}><SiTelegram /> </a>
        </div>
    </section>
    <section id='service' >
      <h1 className='text-xl font-medium'>Kubernetes</h1>
      <p className='mt-1 text-md'>This website is deployed in kubernetes in the Google cloud.</p>

      <div className='mt-4 flex flex-col md:flex-row gap-8'>
        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='service.png' className='w-80' alt='gambar' />
          <h2 className='text-xl'>Service</h2>
          <p className='text-gray-500'>Frontend is an Nginx web server that serves static React files.</p>
          <p className='text-gray-500'>Backend is a web application written in Java that processes requests from the frontend.</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>React</li>
            <li>Java Spring boot</li>
            <li>npm, maven</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='docker.png' className='w-80' alt='gambar' />
          <h2 className='text-xl'>Docker Containers</h2>
          <p className='text-gray-500'>At this stage, docker images were created and uploaded to DockerHub.</p>
          <p className='text-xl'>Tools I Use</p>
          <ul>
            <li>DockerHub</li>
            <li>Docker</li>
          </ul>
        </div>

        <div className='w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1'>
          <img src='kubernetes.png' className='w-80' alt='gambar' />
          <h2 className='text-xl'>Kubernetes</h2>
          <p className='text-gray-500'>The containers will be managed by Kubernetes</p>
          <p className='text-xl '>Tools I Use</p>
          <ul>
            <li>Cloud Google</li>
            <li>Helm</li>
            <li>Kubernetes</li>
          </ul>
        </div>

      </div>

    </section>

    <section id='pipeline' className='mt-10 '>
      <h1 className='text-xl font-medium'>CI/CD</h1>
      <p className='mt-1 text-md'>Here are some projects that I have managed.</p>
    </section>
    <Content/>


    <section id='Portfolio' className='mt-10 '>
      <h1 className='text-xl font-medium'>Portfolio</h1>
      <p className='mt-1 text-md'>Here are some of the certifications I have.</p>
      
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>

        <div className='w-full md:w-2/6 shadow-md rounded '>
          <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
            <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
          </div>
          <div className='p-4'>
            <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
            <p className=''>Dicoding Indonesia</p>
            <p className='text-sm text-gray-500'>May 2023</p>
          </div>
        </div>
      </div>

    </section>
    
    
    </div>
    <section id="footer" className='footer w-fullmt-5 rounded bg-black py-8 top-0 left-0   '>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>
        <p>Wanna talk anything?</p>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>n987085904@yandex.ru</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillEnvironment />
            <p>Moscow</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>+7 (987)-085-90-94</p>
          </li>
        </ul>

        <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
          <a href={`https://www.linkedin.com/in/nikita-koryakov-196b13244/`}> <AiFillLinkedin /> </a>
          <a href={`https://github.com/mlizzie`}><AiFillGithub /> </a>
          <a href={`https://t.me/nikita_koryakov`}><SiTelegram /> </a>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

        <p className="text-center text-sm text-gray-300 sm:text-center">
          © 2023
          <a href="https://t.me/nikita_koryakov"> Nikita   Koryakov</a>. All Rights Reserved.
        </p>

      </div>
      
    </section>

    </main>
    
  );
}


class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:8080/projects",
            type: "GET",
            dataType: 'json',
            ContentType: 'application/json',
            
            success: function (data) {

                this.setState({data: data});
            }.bind(this),
            error: function (jqXHR) {
                console.log(jqXHR);
            }.bind(this)
        })
    }
    render() {
        return (
            <table>
                <tbody>{this.state.data.map(function (item, key) {
                return (
                    <tr key={key}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                    </tr>
                )
            })}</tbody>
            </table>

<section id='Portfolio' className='mt-10 '>
<h1 className='text-xl font-medium'>Portfolio</h1>
<p className='mt-1 text-md'>Here are some of the certifications I have.</p>

<div className='flex flex-col md:flex-row gap-8 mt-4'>
  <div className='w-full md:w-2/6 shadow-md rounded '>
    <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
      <img src='https://source.unsplash.com/random' layout="fill" objectFit="cover"/>
    </div>
    <div className='p-4'>
      <h1 className='text-xl font-medium'>Dasar Pemrograman Javascript</h1>
      <p className=''>Dicoding Indonesia</p>
      <p className='text-sm text-gray-500'>May 2023</p>
    </div>
  </div>
  </div>
  </div>
  
  </section>
        )
    }
}


export default App;
