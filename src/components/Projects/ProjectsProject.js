import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import SwiperCore, { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Autoplay, A11y]);

function ProjectsProject(props) {
	const {
		projectData: {
			title,
			previewPhotos,
			links,
			about,
			technologies,
		}
	} = props;

	const toggleLinks = evt => {
		const wrapper = evt.target
			.closest('.projects-project-links')
			.querySelector('.projects-project-links__wrapper');

		wrapper.classList.toggle('projects-project-links__wrapper--active'); 
		
	};
	

  return (
		<div className="projects-project">
			<div className="projects-project__images">
				{
					previewPhotos.length > 1 ? (
						<Swiper
							loop={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: true
							}}
							spaceBetween={50}
							slidesPerView={1}
							className="projects-project__image"
						>
							{
								previewPhotos.map((link, id) => (
									<SwiperSlide key={id.toString()}>
										<LazyLoadImage
											alt={title}
											src={link}
											width={480}
											height={390}
											className="projects-project__image"
										/>
									</SwiperSlide>
								))
							}
						</Swiper>
					) : (
						<LazyLoadImage
							alt={title}
							src={previewPhotos[0]}
							width={480}
							height={390}
							className="projects-project__image"
						/>
					)
				}
			</div>

			<div className="projects-project__info">
				<div className="projects-project__holder">
					<h2 className="projects-project__title">{title}</h2>
					
					<ul className="projects-project-links">
						<li className="projects-project-links__toggle">
							<button 
								className="projects-project-links__button"
								onClick={toggleLinks}
							>
								ссылки
							</button>
							<ul className="projects-project-links__wrapper">
								{
									links.map((linkItem, id) => (
										<li key={id.toString()} className="projects-project-links__item">
											<a 
												href={linkItem.link}
												target="_blank"
												rel="noreferrer"
												className="link projects-project-links__link"
											>
												{linkItem.name}
											</a>
										</li>
									))
								}
							</ul>
						</li>
					</ul>
				
				</div>

				<p className="projects-project__about">{about}</p>

				<div className="projects-project-technologies projects-project__technologies">
					<h3 className="technologies">Технологии</h3>
					<ul className="projects-project-technologies__list">
						{
							technologies.map((techology, id) => (
								<li 
									className="projects-project-technologies__technology"
									key={id.toString()}
								>
									{techology}
								</li>
							))
						}
					</ul>
				</div>					
			</div>
		</div>
  );
}

export default ProjectsProject;
