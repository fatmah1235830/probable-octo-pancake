const yargs = require('yargs');
const todo = require('./todo');

const argv = yargs
  .command('add', 'Add a new TODO item', {
    description: 'The task description',
    demandOption: true,
    type: 'string',
  })
  .command('list', 'List all TODO items')
  .command('remove', 'Remove a completed TODO item', {
    description: 'The index of the completed task',
    demandOption: true,
    type: 'number',
  })
  .help()
  .alias('h', 'help')
  .argv;

const { command, description } = argv;

switch (command) {
  case 'add':
    todo.add(description);
    break;
  case 'list':
    todo.list();
    break;
  case 'remove':
    todo.remove(argv.remove);
    break;
  default:
    console.log('Unknown command');
}
