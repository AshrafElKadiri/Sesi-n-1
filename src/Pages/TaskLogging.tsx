import React from 'react';
import Header from '../componentes/header';
import Content from '../componentes/content';

const TaskLogging: React.FC = () => {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <>
            <Header />
            <Content />
          </>
        </div>
      </div>
    );
    
}

export default TaskLogging;