import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox =({text,link,btnText}) =>(
    <div className='info-box'>
     <p className='font-medium sm:text-xl text-center'>{text}</p> 
      <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
      </Link>
    </div>
)


const renderContent ={
    1:(
    <h1 className='sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5'> Hi I am <span className='font-semibold'>Manobalan</span> 👋
    <br />
    A Software Engineer and an Entrepreneur from India
    </h1>
     ),
     2:(
       <InfoBox 
       text='Tossed with many projects ad picked up many skills along the way'
       link='/about'
       btnText='Learn more'
       />
     ),
     3:(
         <InfoBox 
       text='Lead multiple projects to success over years. Curious in problem solving and Ideating Tech for good!! Wnna Know about the Impact?'
       link='/projects'
       btnText='Visit my portfolio'
       />
     ),
     4:(
         <InfoBox 
       text='Need a project done or looking a skilled DEV and a LEADER I am just a few key strokes away'
       link='/Contact'
       btnText='Lets talk'
       />
     ),
        
    
}

const HomeInfo =({currentStage}) =>{
    return renderContent[currentStage] || null;
}
export default HomeInfo;