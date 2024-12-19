import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { es } from 'date-fns/locale';

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const Calendario = ({ tareas }) => {
  const eventos = tareas.map(tarea => ({
    title: tarea.titulo,
    start: new Date(`${tarea.fecha}T${tarea.hora}`),
    end: new Date(`${tarea.fecha}T${tarea.hora}`),
    desc: tarea.descripcion
  }));

  return (
    <div className="bg-white dark:bg-[#121212] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="text-gray-900 dark:text-white">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ 
            backgroundColor: '#1E1E1E',
            color: 'white',
            padding: '20px',
            borderRadius: '12px'
          }}
        />
      </div>
    </div>
  );
}; 