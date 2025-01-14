import React from 'react'
import './cardio-training.css'
import "./Activities.css"
import { inertia, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Newsletter from '../Newsletter/Newsletter'

export default function Cardio_training() {
  return (
    <>
       <div className='container-TRAINING'>
             
               <div className='imge-sport-1'>
                        <div className='nav-bagckround'>WELCOM TO CARDIO TRAINING</div>
                       <img  src='https://i.pinimg.com/736x/fd/2e/71/fd2e71ac37b87b02448eab1157785e00.jpg' className='img-sport-1-2' alt='ACTIVITES' />
                       <div className='text-TRAINING'><span>CARDIO TRAINING</span></div>
               </div>
               <motion.div

                initial={{opacity:0,scale:0}}
                viewport={{once:true }}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1.5}}
                className='text-container1'>
                    <h1 className='my-h1-TRAINING-1'>CARDIO TRAINING</h1>
                    <h1 className='my-h1-TRAINING-2'>RESPIREZ, SOUFFLEZ ET SCULPTEZ</h1>
               </motion.div>
               {/* ladiscription de activites1 */}
               <motion.div 
                initial={{opacity:1,translateX:"100%"}}  
                whileInView={{opacity:1,scale:1,translateX:0}}
                viewport={{once:true }}
                transition={{duration:4}}
               className='discription-activites-1'>
                    <span>      
                    <h1 className='text-Nos-TRAINING-1'>CARDIO TRAINING</h1>
                     <p className='discription_parahraf_1_TRAINING'>
                     L’entraînement cardio vasculaire est une discipline qui permet aux pratiquants de <br/>
                     travailler leur endurance et d’améliorer leurs performances cardiaques. Pour y parvenir, <br/>
                     il est nécessaire de répartir l’effort physique sur la durée et d’opter pour une intensité <br/>
                     d’exercice plutôt moyenne afin d’être capable de tenir le rythme. Tapis, vélos, <br/>
                     elliptiques, rameurs, corde à sauter… Fitness Park met à la disposition de ses adhérents  <br/>
                     tout le matériel nécessaire pour les exercices cardio vasculaires : découvre les <br/>
                     équipements du club de Paris 12 et de Paris 18. Le cardio training est également<br/>
                     intéressant pour les sportifs qui sont en période de sèche ou les personnes désirant <br/>
                     perdre du poids car il permet d’augmenter les dépenses caloriques journalières.
                     </p>
                    </span>
                    <img src='https://i.pinimg.com/736x/f2/61/1f/f2611f5925245cd5d0fa5b2ffd7f7258.jpg' className='img-1-TRAINING'/>
               </motion.div>
                 {/* ladiscription de activites 2 */}
                <motion.div 
                      initial={{opacity:1,translateX:"-100%"}}  
                      whileInView={{opacity:1,scale:1,translateX:0}}
                      viewport={{once:true }}
                      transition={{duration:3}}
                   className='discription-activites-2'>
                    <span>
                       <h1 className='titre_Pour_Qui_TRAINING_2'>POUR QUI ?</h1>
                       <p className='paragraphe_discription_TRAINING_2'>
                       Pour les novices qui souhaitent se mettre au sport, pour ceux qui veulent reprendre <br/>
                       une activité sportive ou encore pour les sportifs avérés qui souhaitent accroître leur<br/> 
                       niveau d’endurance. Dans chacune des grandes villes de France, tu pourras <br/>
                       retrouver un espace cardio-training au sein des clubs Fitness Park : Paris,<br/>
                       Strasbourg, Rennes, Bordeaux, Lyon ou encore Nantes par exemple.<br/><br/><br/>
                       Le cardio-training s’adapte à tes besoins et à ton niveau d’endurance. Tu vas à ton<br/>
                       rythme et augmente l’intensité et/ou la durée au fil des entraînements. Ta <br/>
                       respiration se régule, tes muscles se développent et ton corps se transforme.
                       </p>
                    </span> 
                    <img src='https://i.pinimg.com/736x/64/97/79/649779d05e7fcbd8652f7c85ee39f449.jpg' className='img-TRAINING-2'/> 
                </motion.div>
                   <motion.div 
                      initial={{opacity:1,scale:1,translateX:"100%"}}
                      whileInView={{opacity:1,scale:1,translateX:0}}
                      viewport={{once:true }}
                      transition={{duration:3}}
                      className='discription-muscilation-3'>
                        <span>
                            <h1 className='POUR_QUOI_3_TRAINING'>POUR QUOI ?</h1>   
                              <p className='paragraph_dicription_3_TRAINING'>
                              Avant tout pour travailler et développer ton endurance, tes performances cardiaques et<br/>
                              ainsi améliorer ta condition physique.<br/>
                              Le cardio training t’aidera également à :<br/>
                                                                                                          
                                <li>Perdre du poids : Tu brûles de nombreuses calories, diminues ta masse graisseuse</li>,<br/>
                                augmentes ta masse musculaire. Ton indice de masse corporelle (IMC) se rééquilibrera.<br/>
                                <li>Tonifier ton corps : ta silhouette se sculpte au fur et à mesure des efforts et des</li><br/>
                                exercices.<br/>
                                <li>Améliorer ta coordination, ton équilibre et tes réflexes.</li><br/>
                                <li>Prévenir les maladies cardio-vasculaires</li><br/>
                                <li>Te préparer à des exercices plus intenses.</li>
                              </p>  
                         </span>
                           <img src='https://i.pinimg.com/736x/3d/86/1a/3d861a1d86620d0cf3662525811f5dab.jpg' className='img3-TRAINING'/>
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
                     <h1 className='titre_decouvre'>DÉCOUVRE NOS ACTIVITÉS</h1> 
                     <h1 className='title-choix-activites'>CHOISIS TA DISCIPLINE</h1> 
                     
               </motion.div>
               <motion.div 
                 initial={{opacity:0,translateX:"-100%"}}
                 whileInView={{opacity:1,scale:1,translateX:0}}
                 viewport={{once:true }}
                 transition={{duration:3}}
               className='img-activites'>
                     <Link to="/musculation"><img src='Images/photo1fitnas.jpg' className='img-muscilation'/></Link>
                      <Link to="/Activities"><img src='Images/activites.jpg' className='img-muscilation'/></Link>
                     <Link to="/cross-training"><img src='Images/photof3.jpg' className='img-muscilation' /></Link>
                    <Link to="/cours_collectifs"><img src='Images/photo4.jpg' className='img-muscilation' /></Link>
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
