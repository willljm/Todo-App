import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Dashboard() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'favorites') return task.isFavorite;
    return true;
  });

  return (
    <div className="dashboard">
      <div className="filter-buttons">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          Todas
        </motion.button>
        {/* Botones similares para otros filtros */}
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          968: { slidesPerView: 3 }
        }}
      >
        <AnimatePresence>
          {filteredTasks.map(task => (
            <SwiperSlide key={task.id}>
              <Task 
                task={task}
                onComplete={handleComplete}
                onFavorite={handleFavorite}
              />
            </SwiperSlide>
          ))}
        </AnimatePresence>
      </Swiper>
    </div>
  );
}

export default Dashboard; 