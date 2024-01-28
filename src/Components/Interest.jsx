import React from "react";

export const Interest = ({ label, skills }) => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section-title">{label}</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="skill__container bd-grid">
            {skills.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <div className="skill__levels bd-grid">
            {skills.map((skill) => (
              <SkillWithLevel key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ label, url, className }) => (
  <a href={url} target="_blank" rel="noreferrer" className="skill__link">
    <i className={`bx ${className} skill__icon`}></i> {label}
  </a>
);

const SkillWithLevel = ({ level, index }) => (
  
    <div className="d-flex align-items-center mb-3">
      <div className="skill__level"  >
        <div className="progress">
          <div
            className="progress-bar"
            id={`myProgressBar-${index}`}
            role="progressbar"
            style={{ width: `${level}%` }}
            aria-valuenow={level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );


