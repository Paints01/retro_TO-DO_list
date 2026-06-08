// ==========================================
// 1. MUSIC PLAYLIST JUKEBOX LOGIC
// ==========================================

const musicBtn = document.getElementById('music-toggle-btn');
const bgMusic = document.getElementById('bg-music');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const playlist=[
    { title: "TRACK 01", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "TRACK 02", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "TRACK 03", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
];

let currentTrackIndex=0;
let isPlaying=false;

function loadTrack(index){
    bgMusic.src=playlist[index].url;
    
    if(isPlaying){
        musicBtn.innerText = `${playlist[index].title}: ON`;
    } else {
        musicBtn.innerText = `${playlist[index].title}: OFF`;
    }
}

loadTrack(currentTrackIndex);

musicBtn.addEventListener('click', function(){

        if(isPlaying==false){
            bgMusic.play();
            isPlaying=true;
            musicBtn.innerText = `${playlist[currentTrackIndex].title}: ON`;
        }else{
            bgMusic.pause();
            isPlaying=false;
            musicBtn.innerText = `${playlist[currentTrackIndex].title}: OFF`;
        }
});

nextBtn.addEventListener('click',function(){
    currentTrackIndex++;
    
    if(currentTrackIndex>=playlist.length){
        currentTrackIndex=0;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) bgMusic.play();
});

prevBtn.addEventListener('click',function(){
    currentTrackIndex--;
    
    if(currentTrackIndex<0){
        currentTrackIndex=playlist.length-1;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) bgMusic.play();
});


// ==========================================
// 2. TO-DO LIST LOGIC
// ==========================================
const todoInput=document.getElementById('todo-input');
const addBtn=document.getElementById('add-btn');
const todoList=document.getElementById('todo-list');

function addTask(){
    const taskText=todoInput.value.trim();

    if (taskText===""){
        alert("You must type a task first!");
        return;
    }

    const li=document.createElement('li');
    const span=document.createElement('span');
    const checkBtn=document.createElement('button');
    const deleteBtn=document.createElement('button');

    span.innerText=taskText;
    deleteBtn.innerText='X';
    deleteBtn.className='delete-btn';
    checkBtn.innerText = '✓'; 
    checkBtn.className = 'check-btn';

    checkBtn.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);


    todoList.appendChild(li);

    todoInput.value="";

}

// ==========================================
// 3. EVENT LISTENERS (Triggers)
// ==========================================
addBtn.addEventListener('click',addTask);
todoInput.addEventListener('keypress', function(event){
    if(event.key==='Enter'){
        addTask();
    }
});

todoList.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const rowToDelete=event.target.partnerElement;
        rowToDelete.remove();
    }

})
