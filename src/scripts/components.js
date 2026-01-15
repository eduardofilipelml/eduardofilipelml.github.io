/**
 * CV Components Generator
 * Dynamically generates HTML components for the CV sections
 */

/**
 * Generate CV Intro Section
 */
function generateCVIntro() {
  return ``;
}

/**
 * Generate About Section
 */
function generateAboutSection() {
  return `
    <section class="cv-section cv-about">
      <h3 class="cv-section-title" data-en="About Me" data-pt="Sobre Mim">About Me</h3>
      <div class="about-content">
        <p class="about-description" data-en="${window.cvData.about.en}" data-pt="${window.cvData.about.pt}">${window.cvData.about.en}</p>
      </div>
    </section>
  `;
}

/**
 * Generate Experience Section
 */
function generateExperienceSection() {
  const experiences = window.cvData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4 class="timeline-title">${exp.title}</h4>
        <span class="timeline-company">${exp.company}</span>
        <span class="timeline-period">${exp.period}</span>
        <p class="timeline-description" data-en="${exp.description.en}" data-pt="${exp.description.pt}">${exp.description.en}</p>
        <div class="timeline-tech">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="cv-section">
      <h3 class="cv-section-title" data-en="Work Experience" data-pt="Experiência Profissional">Work Experience</h3>
      <div class="timeline">
        ${experiences}
      </div>
    </section>
  `;
}

/**
 * Generate Projects Section
 */
function generateProjectsSection() {
  const projects = window.cvData.projects.map(project => {
    const hasLink = project.link && project.link !== '#';
    const cta = hasLink ? `<div class="project-cta-wrapper"><a href="${project.link}" class="project-cta" target="_blank" rel="noopener noreferrer">View Project →</a></div>` : '';
    
    return `
    <div class="project-card">
      <div class="project-header">
        <h4 class="project-title">${project.title}</h4>
        <span class="project-year">${project.status}</span>
      </div>
      <p class="project-description" data-en="${project.description.en}" data-pt="${project.description.pt}">${project.description.en}</p>
      <div class="project-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      ${cta}
    </div>
  `;
  }).join('');

  return `
    <section class="cv-section">
      <h3 class="cv-section-title" data-en="Key Projects" data-pt="Projetos Principais">Key Projects</h3>
      <div class="projects-grid">
        ${projects}
      </div>
    </section>
  `;
}

/**
 * Generate Education Section
 */
function generateEducationSection() {
  const education = window.cvData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h4 class="timeline-title" data-en="${edu.title.en}" data-pt="${edu.title.pt}">${edu.title.en}</h4>
        <span class="timeline-period">${edu.period}</span>
        <p class="timeline-description" data-en="${edu.description.en}" data-pt="${edu.description.pt}">${edu.description.en}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="cv-section">
      <h3 class="cv-section-title" data-en="Education" data-pt="Educação">Education</h3>
      <div class="timeline">
        ${education}
      </div>
    </section>
  `;
}

/**
 * Initialize CV Components
 */
function initializeCVComponents() {
  const cvSections = document.getElementById('cv-sections');
  if (cvSections) {
    cvSections.innerHTML = `
      ${generateAboutSection()}
      ${generateExperienceSection()}
      ${generateProjectsSection()}
      ${generateEducationSection()}
    `;
  }
}

// Export functions for use in other modules
window.CVComponents = {
  initialize: initializeCVComponents,
  generateIntro: generateCVIntro,
  generateAbout: generateAboutSection,
  generateExperience: generateExperienceSection,
  generateProjects: generateProjectsSection,
  generateEducation: generateEducationSection
};
