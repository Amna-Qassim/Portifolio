import Card from '../Card';
import styles from './Projects.module.css';

const Projects = ({ projects }) => (
  <div className={styles.container}>
    {projects.map((project) => (
      <Card
        key={project.title}
        {...project}
      />
    ))}
  </div>
);

export default Projects;
