import React, { useState, type JSX } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaNodeJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiTypescript, SiAngular, SiMongodb, SiExpress, SiVite } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Projects.module.css'

type Project = {
	title: string
	description: string
	tech: string
	github?: string
	demo?: string
	icons?: JSX.Element[]
	image: string
	screenshots: string[]
}

const projects: Project[] = [
	{
		title: 'Training Adventure',
		image: '/create-character.jpg',
		screenshots: [
			'/hero.jpg',
			'/classes.jpg',
			'/create-character.jpg',
			'/profile.jpg'
		],
		description:
			'A gamified fitness web app where users create a character, complete workouts, earn XP and level up. Built with Angular, MongoDB and Node.js.',
		tech: 'Angular, TypeScript, Node.js, MongoDB, Express',
		github: 'https://github.com/wanderingkitty/traningsaventyr2.0',
		demo: 'https://traningsaventyr2-0.onrender.com/',
		icons: [<SiAngular />, <SiTypescript />, <FaNodeJs />, <SiMongodb />]
	},
	{
    title: 'Chappy-chat',
    image: '/chappy.png',
    screenshots: [
		'/chat1.png',
		'/chat2.png',
		'/chat3.png'

    ],
    description: 'This is a Chat API build with MERN stack (MongoDB, Express, React, Node.js) and icludes authentication with JWT(JSON Web Tokens) and validation using Joi. Chappy-chat is application where users can send and recieve messages in channels or directly to other users(DMs). The API provides endpoints for user authentication, managing channels, and sending messages in both open and locked channels. The application allows for guest access to open channels and secured communication for logged-in users.',
    tech: 'JavaScript, HTML, CSS',
    github: 'https://github.com/wanderingkitty/Chappy-chat',
    demo: 'https://chappy-chat.onrender.com/',
  icons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />]
},
{
    title: 'Pokedexity',
    image: '/pokeball.jpg',
    screenshots: [
        '/pokemon.png'
    ],
    description: 'Interactive web application designed as part of a school assignment. It utilizes the latest web technologies to create an engaging and intuitive user experience for Pokémon enthusiasts. The application offers features such as viewing Pokémon details, managing a personal team of Pokémon, and saving a list of reserved Pokémon for future reference.',
    tech: 'JavaScript, HTML, CSS',
    github: 'https://github.com/wanderingkitty/Pokedexity',
    demo: 'https://wanderingkitty.github.io/Pokedexity/',
    icons: [<DiJavascript key="js" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />]
},
{
    title: 'GoGhibli',
    image: '/totoro.jpg',
    screenshots: [
    ],
    description: 'GoGhibli is a school project built with React, TypeScript, and Vite that lets users search Studio Ghibli movies through a public API.',
    tech: 'JavaScript, HTML, CSS',
    github: 'https://github.com/wanderingkitty/GoGhibli',
icons: [
  <FaReact key="react" />,
  <SiTypescript key="ts" />,
  <SiVite key="vite" />,
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />
]

},
{
    title: 'HangBot',
    image: '/main.png',
    screenshots: [
        '/playBot.png'
    ],
    description: 'It happaned to be our firts Java-Script school assignment. As a group of a three aspiring students who just started our journey on a big uncharted land of Java-Script.',
    tech: 'JavaScript, HTML, CSS',
    github: 'https://github.com/wanderingkitty/BionicCriminals',
    demo: 'https://wanderingkitty.github.io/BionicCriminals/',
    icons: [<DiJavascript key="js" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />]
},
]

export default function Projects() {
	const [activeProject, setActiveProject] = useState<Project | null>(null)

	return (
		<section className={styles.section}>
			<h2 className={styles.heading}>Projects</h2>
			<div className={styles.grid}>
				{projects.map((project, i) => (
					<motion.div
						key={i}
						className={styles.card}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.2 }}
						onClick={() => setActiveProject(project)}
					>
						<div className={styles.imageWrapper}>
							<img src={project.image} alt={project.title} className={styles.thumb} />
						</div>
						<div className={styles.info}>
							<h3>{project.title}</h3>
							<p>{project.tech}</p>
							<div className={styles.icons}>
								{project.icons?.map((icon, idx) => (
									<span key={idx}>{icon}</span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{activeProject && (
					<motion.div
						className={styles.backdrop}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveProject(null)}
					>
						<motion.div
							className={styles.modal}
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.95, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()}
						>
							<h3>{activeProject.title}</h3>
							<p>{activeProject.description}</p>
							<Swiper
								modules={[Navigation, Pagination]}
								navigation
								pagination={{ clickable: true }}
								spaceBetween={20}
								slidesPerView={1}
								className={styles.swiper}
							>
								{activeProject.screenshots.map((src, index) => (
									<SwiperSlide key={index}>
										<img
											src={src}
											alt={`Screenshot ${index + 1}`}
											className={styles.screenshot}
										/>
									</SwiperSlide>
								))}
							</Swiper>
							<div className={styles.links}>
								{activeProject.github && (
									<a href={activeProject.github} target="_blank" rel="noreferrer">
										<FaGithub /> GitHub
									</a>
								)}
								{activeProject.demo && (
									<a href={activeProject.demo} target="_blank" rel="noreferrer">
										<FaExternalLinkAlt /> Live Demo
									</a>
								)}
							</div>
							<button className={styles.closeBtn} onClick={() => setActiveProject(null)}>Close</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}
