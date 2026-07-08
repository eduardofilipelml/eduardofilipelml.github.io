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
 * Generate Professional Summary Section
 */
function generateSummarySection() {
  return `
    <section class="cv-section cv-about">
      <h3 class="cv-section-title" data-en="Professional Summary" data-pt="Resumo Profissional">Professional Summary</h3>
      <div class="about-content">
        <p class="about-description" data-en="${window.cvData.about.en}" data-pt="${window.cvData.about.pt}">${window.cvData.about.en}</p>
      </div>
    </section>
  `;
}

/**
 * Generate Skills Section
 */
function generateSkillsSection() {
  const skills = (window.cvData.skills || []).map(skill => `
    <div class="skill-group">
      <h4 class="skill-group-title" data-en="${skill.category.en}" data-pt="${skill.category.pt}">${skill.category.en}</h4>
      <div class="skill-group-tags">
        ${skill.items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="cv-section">
      <h3 class="cv-section-title" data-en="Technical Skills" data-pt="Competencias Tecnicas">Technical Skills</h3>
      <div class="skills-grid">
        ${skills}
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
        ${exp.achievements ? `
          <ul class="timeline-achievements">
            ${exp.achievements.en.map((item, index) => `<li data-en="${item}" data-pt="${exp.achievements.pt[index]}">${item}</li>`).join('')}
          </ul>
        ` : ''}
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
 * Generate Languages Section
 */
function generateLanguagesSection() {
  const languages = (window.cvData.languages || []).map(item => `
    <div class="language-item">
      <span class="language-name" data-en="${item.language.en}" data-pt="${item.language.pt}">${item.language.en}</span>
      <span class="language-level" data-en="${item.level.en}" data-pt="${item.level.pt}">${item.level.en}</span>
    </div>
  `).join('');

  return `
    <section class="cv-section">
      <h3 class="cv-section-title" data-en="Languages" data-pt="Idiomas">Languages</h3>
      <div class="languages-list">
        ${languages}
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
      ${generateSummarySection()}
      ${generateSkillsSection()}
      ${generateExperienceSection()}
      ${generateProjectsSection()}
      ${generateEducationSection()}
      ${generateLanguagesSection()}
    `;
  }
}

// Export functions for use in other modules
window.CVComponents = {
  initialize: initializeCVComponents,
  generateIntro: generateCVIntro,
  generateSummary: generateSummarySection,
  generateSkills: generateSkillsSection,
  generateExperience: generateExperienceSection,
  generateProjects: generateProjectsSection,
  generateEducation: generateEducationSection,
  generateLanguages: generateLanguagesSection
};
