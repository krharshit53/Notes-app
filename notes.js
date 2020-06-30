const fs=require('fs');
const chalk=require('chalk');
const saveNote=function(notes)
{
    const dataJason=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJason);
}

const loadNotes=function()
{
     
           try{
                const bufferData=fs.readFileSync('notes.json');
                const data=bufferData.toString();
                const notes=JSON.parse(data);
                return notes;

           }
           catch(e)
           {
              return [];
           }   
}
const getNotes=function()
{
   return '....your note'
}

const addNote=function(title,body)
{
      const notes=loadNotes();
      const duplicateNote=notes.filter(note => { return note.title===title});
      if(duplicateNote.length>0)
      {
        return console.log(chalk.red('Note is already Taken'));
      }

      notes.push({
          title,
          body
      })
      console.log(chalk.green('Note is Added'))
      saveNote(notes);  
}

const removeNote=function(title)
{
     const notes=loadNotes();
     const duplicateNotes=notes.filter((note)=>{return note.title!==title});
     if(duplicateNotes.length<notes.length)
     {
         console.log(chalk.green('Note is Removed'));
         saveNote(duplicateNotes);
     }
     else
     {
         console.log(chalk.red('Note is not Present'));
     }
}
const listNotes=function()
{
    console.log(chalk.inverse('Your Notes are:'));
    const notes=loadNotes();
    notes.forEach(note => {console.log(note.title)});
}
const readNote=function(title)
{
        const notes=loadNotes();
        const note=notes.find((note)=>{ return note.title===title});
        if(note)
        {
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        }
        else
        {
            console.log(chalk.red('Note is not Present'));
        }
}


module.exports={
    addNote,removeNote,listNotes,readNote
}