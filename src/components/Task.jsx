import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheck } from 'react-icons/fa';

function Task({ task, onComplete, onFavorite }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`task-card ${task.completed ? 'completed' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      
      <div className="task-actions">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => onFavorite(task.id)}
          className={`favorite-btn ${task.isFavorite ? 'active' : ''}`}
        >
          <FaStar />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => onComplete(task.id)}
          className={`complete-btn ${task.completed ? 'active' : ''}`}
        >
          <FaCheck />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Task; 