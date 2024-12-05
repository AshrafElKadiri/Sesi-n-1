import React from 'react';
import Header from '../componentes/header';
import Content from '../componentes/content';

const TaskLogging: React.FC = () => {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <>
            <Header title ="Registro de tareas"/>
            <Content/>
            <br />
            <Header title ="Perfil"/>
            <br />
            <Header title ="Preferencias"/>
            <br />
            <Header title ="Chat"/>
            
          </>
        </div>
      </div>
    );
    
}

export default TaskLogging;