import React from 'react'
import "./Activities.css"
import { inertia, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter/Newsletter'

export default function Activities() {
  return (
    <>
       <div className='div1-activites'>
             
               <div className='imge-sport-1'>
                        <div className='nav-bagckround'>WELCOM TO  ACTIVITÉS</div>
                       <img  src='https://i.pinimg.com/736x/fc/7e/bb/fc7ebb95551f3174687de726036c4965.jpg' className='img-sport-1-2' alt='ACTIVITES' />
                       <div className='text-Activites'><span>ACTIVITÉS</span></div>
               </div>
               <motion.div 
                initial={{opacity:0,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1.5}}
                className='text-container1'>
                    <h1 className='my-h1-activites-1'>SÉANCE DE SPORT ET ACTIVITÉS SPORTIVES</h1>
                    <h1 className='my-h1-activites-2'>ÉQUIPEMENT SPORTIF HAUT DE GAMME</h1>
               </motion.div>
               {/* ladiscription de activites1 */}
               <motion.div 
                initial={{opacity:1,translateX:"100%"}}  
                whileInView={{opacity:1,scale:1,translateX:0}}
                transition={{duration:4}}
               className='discription-activites-1'>
                    <span>      
                    <h1 className='text-Nos-activites-1'>NOS ACTIVITÉS</h1><br/>
                     <p>
                      Les activités sportives apportent beaucoup de bienfaits pour <br/>
                      l’organisme. Pratiquer un exercice physique quotidien permet de <br/>
                      rallonger l’espérance de vie, sans oublier l’effet immédiat du sport qui <br/>
                      permet de libérer de l’endorphine dans le corps et procure la sensation <br/>
                      de bien-être. Outre la santé, les motivations qui nous poussent à  <br/>
                      s’inscrire dans un club de sport sont multiples et peuvent évoluer au <br/>
                      fur et à mesure de notre implication dans les programmes <br/>
                      d’entrainement : remise en forme, prise de masse, perte de poids, <br/>
                      endurance, rééducation…
                     </p>
                    </span>
                    <img src='https://i.pinimg.com/736x/f8/c1/dc/f8c1dc9fe7fdb85698ece9b9b884a0a1.jpg' className='img-activites-1'/>
               </motion.div>
                 {/* ladiscription de activites 2 */}
                <motion.div 
                      initial={{opacity:1,translateX:"-100%"}}  
                      whileInView={{opacity:1,scale:1,translateX:0}}
                      transition={{duration:3}}
                   className='discription-activites-2'>
                    <span>
                       <h1 className='text-Nos-activites-2'>LES INSTALLATIONS</h1><br/>
                       <p>
                        Dans les salles de sport Fitness Park, tu trouveras des installations haut de gamme <br/>
                        et les meilleurs équipements du marché : TechnoGym, Hammer Strenght, Cybex, <br/> 
                        Yanga Sports Water, Sismo Fitness. En exemple, découvre les installations du club <br/>
                        de Paris 12 et de Paris 18.<br/><br/><br/>
                        Nos installations sont adaptées pour que tu atteignes tes objectifs. <br/>
                        C’est pourquoi nos clubs sont équipés de matériel de qualité dernière génération <br/>
                        pour te permettre de te surpasser à chaque séance.
                       </p>
                    </span> 
                    <img src='https://i.pinimg.com/736x/c9/67/c7/c967c7e2c2f9123606ba50d54128f2d6.jpg' className='img-activites-2'/> 
                </motion.div>
                  {/* this id button de inscrire */}
                <motion.div 
                 initial={{opacity:0,translateY:"200%"}}
                 whileInView={{opacity:1,scale:1,translateY:0}}
                 transition={{duration:3}}
                className="btn-SINSCRIRE">
                   <button className='btn-link-SINSCRIRE'><Link to="S'INSCRIRE" className='link'  style={{textDecoration:'none'}}>S'INSCRIRE</Link></button>
                </motion.div>
               <motion.div 
               initial={{opacity:0,translateY:"100%"}}
               whileInView={{opacity:1,scale:1,translateY:0}}
               transition={{duration:2}}
               className='title-DÉCOUVRE-activites'>
                     <h1 className='title-DÉCOUVRE-activites-1'>DÉCOUVRE NOS ACTIVITÉS</h1> 
                     <h1 className='title-choix-activites'>CHOISIS TA DISCIPLINE</h1> 
                     
               </motion.div>
               <motion.div 
                 initial={{opacity:0,translateX:"-100%"}}
                 whileInView={{opacity:1,scale:1,translateX:0}}
                 transition={{duration:3}}
               className='img-activites'>
                     <Link to="/musculation"><img src='Images/photo1fitnas.jpg' className='img-muscilation'/></Link>
                     <Link to="/cardio-training"><img src='Images/photof2.jpg'  className='img-muscilation' /></Link>
                     <Link to="/cross-training"><img src='Images/photof3.jpg' className='img-muscilation' /></Link>
                     <Link to="/cours_collectifs"><img src='Images/photo4.jpg' className='img-muscilation' /></Link>
               </motion.div>
               <motion.div  
                initial={{opacity:0,translateX:"100%"}}
                whileInView={{opacity:1,translateX:0}}
                transition={{duration:3}}
               className="compent-newleste">
                <Newsletter className="newslettemotion"/>    
                 </motion.div>
        </div>  
       
    </>
                                  
  )
}
