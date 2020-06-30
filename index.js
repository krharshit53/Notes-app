const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'Add a Note',
    builder: {
          title:{
               describe:'Note Title',
               demandOption:true,
               type:'string',
          },
          body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
       },

          
    },
    handler:function(argv)
    {
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a Note',
    buolder:{
         title:{
             describe:'Note Title',
             demandOption:true,
             type:'string',
         }
    },
    handler:function(argv)
    {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'Listing all Note',
    handler:function()
    {
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'Read a Note',
    builder:{
         title:{
             describe:'Read a Note',
             demandOption:true,
             type:'string'
         }
    },
    handler:function(argv)
    {
          notes.readNote(argv.title);
    }
})
yargs.parse();

