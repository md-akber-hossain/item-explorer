import { getItems, getProjects } from '@taghub/api';
import React, { useEffect, useState } from 'react';
import Items from './Items';



const Dashboard = () => {

  const [allProjects, setAllprojects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [items, setItems] = useState([]);

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  }

  const getAllProjects = async () => {
    const projects = await getProjects();
    setAllprojects(projects);
    setSelectedProject(projects[0].uuid);
  }

  const getAllItems = async () => {
    const items = await getItems(selectedProject);
    setItems(items);
  }

  useEffect(() => {
    getAllProjects();
  }, [])

  useEffect(() => {
    getAllItems();
  }, [selectedProject])

  return (
    <>
      <div className="dash-top-content">
        <h2>Item List</h2>
        <select value={selectedProject} onChange={handleProjectChange} name="projects" >
          {allProjects.map((project) => {
            return(
              <option key={project.uuid} value={project.uuid}>{project.name}</option>
            )
          })}
        </select>
      </div>
        { items.length && <Items items={items} uuid={selectedProject} projectType={allProjects.find(p => p.uuid === selectedProject).projectType}/>}
    </>
  )
}

export default Dashboard