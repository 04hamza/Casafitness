import React from 'react'
import './Cours_collectifs.css'
import './Cross-training.css'
import { inertia, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter/Newsletter'
export default function Cours_collectifs() {
  return (
     <>
          <div className='div1-collictife'>
             
             <div className='imge-sport-1'>
                      <div className='nav-bagckround'>WELCOM COURS COLLECTIFS</div>
                     <img  src='https://i.pinimg.com/736x/b9/01/fc/b901fc7a7b816758e2d48798968f7931.jpg' className='img-sport-1-2' alt='ACTIVITES' />
                     <div className='text-Activites_1'><span>COURS COLLECTIFS</span></div>
             </div>
             <motion.div 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:1.5}}
              className='text-container1'>
                  <h1 className='my-h1-COLLECTIFS-1'>COURS COLLECTIFS</h1>
                  <h1 className='my-h1-COLLECTIFS-2'>BOUGEZ, BRÛLEZ ET TRANSPIREZ</h1>
             </motion.div>
             {/* ladiscription de activites1 */}
             <motion.div 
              initial={{opacity:1,translateX:"100%"}}  
              whileInView={{opacity:1,scale:1,translateX:0}}
              transition={{duration:4}}
             className='discription-activites-1'>
                  <span>      
                  <h1 className='text-COLLECTIFS-1'>COURS COLLECTIFS</h1>
                   <p className='paragraph_discription_1_colluctife'>
                     
                     Les cours collectifs de Fitness Park regroupent plusieurs formats d’activités et<br/>
                     différentes méthodes d’exercices. Chacun d’entre eux permet d’atteindre des objectifs<br/>
                     différents. Dépense calorique, perte de poids, musculation, force, endurance, tonicité du<br/>
                     corps… Tu trouveras toujours un cours qui permet de répondre à ton besoin. En plus, <br/>
                     chez Fitness Park, les cours collectifs sont disponibles toute la journée ! Tu peux<br/>
                     t’entraîner à n’importe quelle heure ! En complément des cours animés par un coach,<br/>
                     Fitness Park met à la disposition de tous ses adhérents des cours collectifs en « libre- <br/>
                     service » sur écran géant. Nos clubs sont équipés de salles dédiées pour la <br/>
                     rétroprojection de tes cours préférés dans une ambiance unique qui t’incitera à te <br/>
                     dépasser. Plus de plaisir pour plus de résultats avec Fitness Park.
                   </p>
                  </span>
                  <img src='https://i.pinimg.com/736x/72/d8/75/72d875625b870f6ce55c31573afe4bed.jpg' className='img-colluctife-1'/>
             </motion.div>
               {/* ladiscription de activites 2 */}
              <motion.div 
                    initial={{opacity:1,translateX:"-100%"}}  
                    whileInView={{opacity:1,scale:1,translateX:0}}
                    transition={{duration:3}}
                 className='discription-activites-2'>
                  <span>
                     <h1 className='text-Nos-colluctife-2'>LES INSTALLATIONS</h1>
                     <p className='paragraphe_discription_colluctife_2'>
                      Dans les salles de sport Fitness Park, tu trouveras des installations haut de gamme <br/>
                      et les meilleurs équipements du marché : TechnoGym, Hammer Strenght, Cybex, <br/> 
                      Yanga Sports Water, Sismo Fitness. En exemple, découvre les installations du club <br/>
                      de Paris 12 et de Paris 18.<br/><br/><br/>
                      Nos installations sont adaptées pour que tu atteignes tes objectifs. <br/>
                      C’est pourquoi nos clubs sont équipés de matériel de qualité dernière génération <br/>
                      pour te permettre de te surpasser à chaque séance.
                     </p>
                  </span> 
                  <img src='https://i.pinimg.com/736x/a1/85/d0/a185d0b8ce1257ec4b3dc91a247e7e1e.jpg' className='img-colluctife-2'/> 
              </motion.div>
              <motion.div 
                  initial={{opacity:1,scale:1,translateX:"100%"}}
                  whileInView={{opacity:1,scale:1,translateX:0}}
                  transition={{duration:3}}
                  className='discription-muscilation-3'>
                     <span>
                        <h1 className='POUR_QUOI_colluctif_3'>POUR QUOI ?</h1> 
                                     
                           <p className='paragraph_dicription_colluctife_3'>
                                 Pour te motiver, pour travailler en groupe, pour suivre un coach, pour pratiquer de<br/>
                                 manière ludique et pour compléter ta séance de musculation. Tu as forcément une<br/>
                                 bonne raison de suivre les cours collectifs chez Fitness Park ! Découvre en exemple, les <br/>                                                                        
                                 cours collectifs du club de Paris 18 et de Paris 12. <br/>
                            </p>  
                        </span>
                           <img src='https://i.pinimg.com/736x/79/bb/6d/79bb6d10dbf91503384ad05f8cf0b7be.jpg' className='img3-colluctife_3'/>
               </motion.div>
                {/* this id button de inscrire */}
              <motion.div 
               initial={{opacity:0,translateY:"200%"}}
               whileInView={{opacity:1,scale:1,translateY:0}}
               transition={{duration:3}}
              className="btn-SINSCRIRE">
                 <button className='btn-link-SINSCRIRE'><Link to="S'INSCRIRE"  style={{textDecoration:'none'}}>S'INSCRIRE</Link></button>
              </motion.div>
             <motion.div 
             initial={{opacity:0,translateY:"100%"}}
             whileInView={{opacity:1,scale:1,translateY:0}}
             transition={{duration:2}}
             className='title-DÉCOUVRE-activites'>
                   <h1 className='DÉCOUVRE-collictife_3'>DÉCOUVRE NOS ACTIVITÉS</h1> 
                   <h1 className='title-choix-activites'>CHOISIS TA DISCIPLINE</h1> 
             </motion.div>
             <motion.div 
               initial={{opacity:0,translateX:"-100%"}}
               whileInView={{opacity:1,scale:1,translateX:0}}
               transition={{duration:3}}
             className='img-activites'>
                   <Link to="/musculation"><img src='Images/photo1fitnas.jpg' className='img-muscilation'/></Link>
                   <Link to="/Activities"><img src='Images/activites.jpg'  className='img-muscilation' /></Link>
                   <Link to="/cardio-training"><img src='Images/photof2.jpg'  className='img-muscilation' /></Link>
                   <Link to="/cross-training"><img src='Images/photof3.jpg' className='img-muscilation' /></Link>
             </motion.div>
             <motion.div  
              initial={{opacity:0,translateX:"100%"}}
              whileInView={{opacity:1,translateX:0}}
              transition={{duration:3}}
             className="compent-newleste">
                       <Newsletter/>
                       
              </motion.div>
      </div>  
     
     </>
  )
}
