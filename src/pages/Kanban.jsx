import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../component';

const Kanban = () => {
  return (
    <div>
      <div className='m-2 md:m-10 mt-20 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl'>
        <Header category='App' title='Kanban' />
        <KanbanComponent
          id="kanban"
          dataSource={kanbanData}
          cardSettings={{ contentField: 'Summary', headerField: 'Id'}}
          keyField="Status"
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => 
              <ColumnDirective key={index} {...item} />
            )}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  )
}

export default Kanban;
