import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'worktable',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuidv4(),
          userAssigned: null
        },
        {
          description: '',
          name: 'second task',
          id: uuidv4(),
          userAssigned: null
        },
        {
          description: '',
          name: 'third task',
          id: uuidv4(),
          userAssigned: null
        },
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'important task',
          id: uuidv4(),
          userAssigned: null
        },
        {
          description: '',
          name: 'not very important task',
          id: uuidv4(),
          userAssigned: null
        },
      ]
    }
  ]
}