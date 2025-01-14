import React from 'react'
import './Cross-training.css'
import { inertia, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter/Newsletter'
export default function Cross_training() {
  return (
     <>
          <div className='div1-CROSS_TRAINIG_1'>
             
             <div className='imge-sport-1'>
                      <div className='nav-bagckround'>WELCOM TO CROSS-TRAINIG</div>
                     <img  src='Images/cross-tranning.jpg' className='img-sport-1-2' alt='ACTIVITES' />

             </div>
             <motion.div 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:1.5}}
              viewport={{once:true }}
              className='text-container1'>
                  <h1 className='my-h1-activites-1'>SÉANCE DE SPORT ET ACTIVITÉS SPORTIVES</h1>
                  <h1 className='my-h1-activites-2'>ÉQUIPEMENT SPORTIF HAUT DE GAMME</h1>
             </motion.div>
             {/* ladiscription de activites1 */}
             <motion.div 
              initial={{opacity:1,translateX:"100%"}}  
              whileInView={{opacity:1,scale:1,translateX:0}}
              viewport={{once:true }}
              transition={{duration:4}}
             className='discription-CROSS_TRAINING-1'>
                  <span>      
                  <h1 className='text-CROSS_TRAINING-1'>CROSS TRAINING</h1>
                   <p className='paragraphe_CROSS_TRAINING_1'>
                    Le Cross training est une méthode d’entraînement et de préparation physique qui <br/>
                    combine plusieurs éléments : force physique, endurance, gymnastique, souplesse,<br/>
                    dextérité… Les pratiquants effectuent des mouvements olympiques d’haltérophilie en <br/>
                    les combinant avec des exercices au poids de corps comme les dips, les tractions ou le <br/>
                    gainage et avec des exercices de cardio comme le rameur, la course, les burpees…
                   </p>
                  </span>
                  <img src='https://i.pinimg.com/736x/37/a2/08/37a208e1a619eb4c9479cd1a31e4b700.jpg' className='img-CROSS_TRAINING-1'/>
             </motion.div>
               {/* ladiscription de activites 2 */}
              <motion.div 
                    initial={{opacity:1,translateX:"-100%"}}  
                    whileInView={{opacity:1,scale:1,translateX:0}}
                    viewport={{once:true }}
                    transition={{duration:3}}
                 className='discription-CROSS_TRAINING-2'>
                  <span>
                     <h1 className='text-CROSS_TRAININ-2'>POUR QUI ?</h1>
                     <p  className='paragraphe_CROSS_TRAINING_2'>
                     Pour toutes les personnes désireuses d’améliorer leurs performances physiques et <br/>
                     mentales afin de mieux se dépasser et se surpasser ! <br/> 
                     </p>
                  </span> 
                  <img src='https://i.pinimg.com/736x/6a/2e/f9/6a2ef92ae1d134b4ed5cbf5b95d153f2.jpg' className='img-CROSS_TRAINING-2'/> 
              </motion.div>
                 {/* ladiscription de activites 2 */}
                 <motion.div 
                    initial={{opacity:1,translateX:"100%"}}  
                    whileInView={{opacity:1,scale:1,translateX:0}}
                    viewport={{once:true }}
                    transition={{duration:3}}
                    className='discription-CROSS_TRAINING-3'>
                  <span>
                     <h1 className='text-CROSS_TRAININ-3'>POUR QUI ?</h1>
                     <p  className='paragraphe_CROSS_TRAINING_3'>
                     Pour toutes les personnes désireuses d’améliorer <br/> leurs performances physiques et <br/>
                     mentales afin de mieux se dépasser et se surpasser ! <br/> 
                     </p>
                  </span> 
                  <img src='https://i.pinimg.com/736x/6a/2e/f9/6a2ef92ae1d134b4ed5cbf5b95d153f2.jpg' className='img-CROSS_TRAINING-3'/> 
              </motion.div>
                {/* this id button de inscrire */}
              <motion.div 
               initial={{opacity:0,translateY:"200%"}}
               whileInView={{opacity:1,scale:1,translateY:0}}
               viewport={{once:true }}
               transition={{duration:3}}
              className="btn-SINSCRIRE">
                 <button className='btn-link-SINSCRIRE'><Link to="S'INSCRIRE"  style={{textDecoration:'none'}}>S'INSCRIRE</Link></button>
              </motion.div>
             <motion.div 
             initial={{opacity:0,translateY:"100%"}}
             whileInView={{opacity:1,scale:1,translateY:0}}
             viewport={{once:true }}
             transition={{duration:2}}
             className='title-DÉCOUVRE-activites'>
                   <h1 className='DÉCOUVRE-activites_3'>DÉCOUVRE NOS ACTIVITÉS</h1> 
                   <h1 className='title-choix-activites'>CHOISIS TA DISCIPLINE</h1> 
                   
             </motion.div>
             <motion.div 
               initial={{opacity:0,translateX:"-100%"}}
               whileInView={{opacity:1,scale:1,translateX:0}}
               viewport={{once:true }}
               transition={{duration:3}}
             className='img-activites'>
                 <Link to="/musculation"><img src='Images/photo1fitnas.jpg' className='img-muscilation'/></Link>
                 <Link to="/cardio-training"><img src='Images/photof2.jpg'  className='img-muscilation' /></Link>
                 <Link to="/cours_collectifs"><img src='Images/photo4.jpg' className='img-muscilation' /></Link>
                 <Link to="/Activities"><img src='Images/activites.jpg'  className='img-muscilation' /></Link>     
             </motion.div>
             <motion.div  
              initial={{opacity:0,translateX:"100%"}}
              whileInView={{opacity:1,translateX:0}}
              viewport={{once:true }}
              transition={{duration:3}}
             className="compent-newleste">
                       <Newsletter/>
                       
              </motion.div>
      </div>  
     
     </>
  )
}
