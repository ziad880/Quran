// عناصر التحكم بالمشغل
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const repeatBtn = document.getElementById('repeat');
const shuffleBtn = document.getElementById('shuffle');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const albumCover = document.getElementById('album-cover');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const totalTimeElem = document.getElementById('total-time');
const slider = document.querySelector('.song-slider-container');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // إذا لم يكن الماوس مضغوطًا، لا تفعل شيء
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة التمرير
    slider.scrollLeft = scrollLeft - walk;
});
// قائمة الأغاني
const songs = [
    { title: 'الفاتحة', file: 'doc/voice/001.mp3' },
    { title: 'البقرة', file: 'doc/voice/002.mp3' },
    { title: 'آل عمران', file: 'doc/voice/003.mp3' },
    { title: 'النساء', file: 'doc/voice/004.mp3' },
    { title: 'المائدة', file: 'doc/voice/005.mp3' },
    { title: 'الأنعام', file: 'doc/voice/006.mp3' },
    { title: 'الأعراف', file: 'doc/voice/007.mp3' },
    { title: 'الأنفال', file: 'doc/voice/008.mp3' },
    { title: 'التوبة', file: 'doc/voice/009.mp3' },
    { title: 'يونس', file: 'doc/voice/010.mp3' },
    { title: 'هود', file: 'doc/voice/011.mp3' },
    { title: 'يوسف', file: 'doc/voice/012.mp3' },
    { title: 'الرعد', file: 'doc/voice/013.mp3' },
    { title: 'إبراهيم', file: 'doc/voice/014.mp3' },
    { title: 'الحجر', file: 'doc/voice/015.mp3' },
    { title: 'النحل', file: 'doc/voice/016.mp3' },
    { title: 'الإسراء', file: 'doc/voice/017.mp3' },
    { title: 'الكهف', file: 'doc/voice/018.mp3' },
    { title: 'مريم', file: 'doc/voice/019.mp3' },
    { title: 'طه', file: 'doc/voice/020.mp3' },
    { title: 'الأنبياء', file: 'doc/voice/021.mp3' },
    { title: 'الحج', file: 'doc/voice/022.mp3' },
    { title: 'المؤمنون', file: 'doc/voice/023.mp3' },
    { title: 'النور', file: 'doc/voice/024.mp3' },
    { title: 'الفرقان', file: 'doc/voice/025.mp3' },
    { title: 'الشعراء', file: 'doc/voice/026.mp3' },
    { title: 'النمل', file: 'doc/voice/027.mp3' },
    { title: 'القصص', file: 'doc/voice/028.mp3' },
    { title: 'العنكبوت', file: 'doc/voice/029.mp3' },
    { title: 'الروم', file: 'doc/voice/030.mp3' },
    { title: 'لقمان', file: 'doc/voice/031.mp3' },
    { title: 'السجدة', file: 'doc/voice/032.mp3' },
    { title: 'الأحزاب', file: 'doc/voice/033.mp3' },
    { title: 'سبأ', file: 'doc/voice/034.mp3' },
    { title: 'فاطر', file: 'doc/voice/035.mp3' },
    { title: 'يس', file: 'doc/voice/036.mp3' },
    { title: 'الصافات', file: 'doc/voice/037.mp3' },
    { title: 'ص', file: 'doc/voice/038.mp3' },
    { title: 'الزمر', file: 'doc/voice/039.mp3' },
    { title: 'غافر', file: 'doc/voice/040.mp3' },
    { title: 'فصلت', file: 'doc/voice/041.mp3' },
    { title: 'الشورى', file: 'doc/voice/042.mp3' },
    { title: 'الزخرف', file: 'doc/voice/043.mp3' },
    { title: 'الدخان', file: 'doc/voice/044.mp3' },
    { title: 'الجاثية', file: 'doc/voice/045.mp3' },
    { title: 'الأحقاف', file: 'doc/voice/046.mp3' },
    { title: 'محمد', file: 'doc/voice/047.mp3' },
    { title: 'الفتح', file: 'doc/voice/048.mp3' },
    { title: 'الحجرات', file: 'doc/voice/049.mp3' },
    { title: 'ق', file: 'doc/voice/050.mp3' },
    { title: 'الذاريات', file: 'doc/voice/051.mp3' },
    { title: 'الطور', file: 'doc/voice/052.mp3' },
    { title: 'النجم', file: 'doc/voice/053.mp3' },
    { title: 'القمر', file: 'doc/voice/054.mp3' },
    { title: 'الرحمن', file: 'doc/voice/055.mp3' },
    { title: 'الواقعة', file: 'doc/voice/056.mp3' },
    { title: 'الحديد', file: 'doc/voice/057.mp3' },
    { title: 'المجادلة', file: 'doc/voice/058.mp3' },
    { title: 'الحشر', file: 'doc/voice/059.mp3' },
    { title: 'الممتحنة', file: 'doc/voice/060.mp3' },
    { title: 'الصف', file: 'doc/voice/061.mp3' },
    { title: 'الجمعة', file: 'doc/voice/062.mp3' },
    { title: 'المنافقون', file: 'doc/voice/063.mp3' },
    { title: 'التغابن', file: 'doc/voice/064.mp3' },
    { title: 'الطلاق', file: 'doc/voice/065.mp3' },
    { title: 'التحريم', file: 'doc/voice/066.mp3' },
    { title: 'الملك', file: 'doc/voice/067.mp3' },
    { title: 'القلم', file: 'doc/voice/068.mp3' },
    { title: 'الحاقة', file: 'doc/voice/069.mp3' },
    { title: 'المعارج', file: 'doc/voice/070.mp3' },
    { title: 'نوح', file: 'doc/voice/071.mp3' },
    { title: 'الجن', file: 'doc/voice/072.mp3' },
    { title: 'المزمل', file: 'doc/voice/073.mp3' },
    { title: 'المدثر', file: 'doc/voice/074.mp3' },
    { title: 'القيامة', file: 'doc/voice/075.mp3' },
    { title: 'الإنسان', file: 'doc/voice/076.mp3' },
    { title: 'المرسلات', file: 'doc/voice/077.mp3' },
    { title: 'النبأ', file: 'doc/voice/078.mp3' },
    { title: 'النازعات', file: 'doc/voice/079.mp3' },
    { title: 'عبس', file: 'doc/voice/080.mp3' },
    { title: 'التكوير', file: 'doc/voice/081.mp3' },
    { title: 'الإنفطار', file: 'doc/voice/082.mp3' },
    { title: 'المطففين', file: 'doc/voice/083.mp3' },
    { title: 'الإنشقاق', file: 'doc/voice/084.mp3' },
    { title: 'البروج', file: 'doc/voice/085.mp3' },
    { title: 'الطارق', file: 'doc/voice/086.mp3' },
    { title: 'الأعلى', file: 'doc/voice/087.mp3' },
    { title: 'الغاشية', file: 'doc/voice/088.mp3' },
    { title: 'الفجر', file: 'doc/voice/089.mp3' },
    { title: 'البلد', file: 'doc/voice/090.mp3' },
    { title: 'الشمس', file: 'doc/voice/091.mp3' },
    { title: 'الليل', file: 'doc/voice/092.mp3' },
    { title: 'الضحى', file: 'doc/voice/093.mp3' },
    { title: 'الشرح', file: 'doc/voice/094.mp3' },
    { title: 'التين', file: 'doc/voice/095.mp3' },
    { title: 'العلق', file: 'doc/voice/096.mp3' },
    { title: 'القدر', file: 'doc/voice/097.mp3' },
    { title: 'البينة', file: 'doc/voice/098.mp3' },
    { title: 'الزلزلة', file: 'doc/voice/099.mp3' },
    { title: 'العاديات', file: 'doc/voice/100.mp3' },
    { title: 'القارعة', file: 'doc/voice/101.mp3' },
    { title: 'التكاثر', file: 'doc/voice/102.mp3' },
    { title: 'العصر', file: 'doc/voice/103.mp3' },
    { title: 'الهمزة', file: 'doc/voice/104.mp3' },
    { title: 'الفيل', file: 'doc/voice/105.mp3' },
    { title: 'قريش', file: 'doc/voice/106.mp3' },
    { title: 'الماعون', file: 'doc/voice/107.mp3' },
    { title: 'الكوثر', file: 'doc/voice/108.mp3' },
    { title: 'الكافرون', file: 'doc/voice/109.mp3' },
    { title: 'النصر', file: 'doc/voice/110.mp3' },
    { title: 'المسد', file: 'doc/voice/111.mp3' },
    { title: 'الإخلاص', file: 'doc/voice/112.mp3' },
    { title: 'الفلق', file: 'doc/voice/113.mp3' },
    { title: 'الناس', file: 'doc/voice/114.mp3' }
];

let songIndex = 0;
let isRepeating = false;
let isShuffling = false;

// تحميل الأغنية
function loadSong(song) {
    title.innerText = song.title;  // تحديث عنوان الأغنية فقط
    audio.src = song.file;
    audio.load();  // تحميل الصوت فقط للأغنية الحالية
}

// تشغيل الأغنية
function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// إيقاف الأغنية
function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// الأغنية السابقة
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// الأغنية التالية
function nextSong() {
    songIndex = isShuffling ? getRandomSongIndex() : (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// شريط التقدم
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // تحديث الوقت الحالي والوقت الإجمالي
    currentTimeElem.innerText = formatTime(currentTime);
    totalTimeElem.innerText = formatTime(duration);
}

// تعيين التقدم
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// تبديل تشغيل متكرر
function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('active', isRepeating);
    if (isRepeating) {
        isShuffling = false;
        shuffleBtn.classList.remove('active');
    }
}

// تبديل التبديل التلقائي
function toggleShuffle() {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle('active', isShuffling);
    if (isShuffling) {
        isRepeating = false;
        repeatBtn.classList.remove('active');
    }
}

// تشغيل أغنية عشوائية
function getRandomSongIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === songIndex);
    return randomIndex;
}

function shuffleSong() {
    songIndex = getRandomSongIndex();
    loadSong(songs[songIndex]);
    playSong();
}

// التعامل مع انتهاء الأغنية
audio.addEventListener('ended', () => {
    if (isRepeating) {
        playSong();
    } else {
        nextSong();
    }
});

// تنسيق الوقت
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// تحديث شريط التقدم عند تشغيل الأغنية
audio.addEventListener('timeupdate', updateProgress);

// تعيين التقدم عند النقر على شريط التقدم
progressContainer.addEventListener('click', setProgress);

// تعيين وظائف الأزرار
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
repeatBtn.addEventListener('click', toggleRepeat);
shuffleBtn.addEventListener('click', toggleShuffle);

// تحميل الأغنية الأولى عند التحميل
loadSong(songs[songIndex]);
// تعيين الصورة واسم الفنان مرة واحدة
albumCover.src = 'doc/alafasy.png'; // الصورة المشتركة
artist.innerText = 'مشاري العفاسي ';   // الفنان المشترك

// التعامل مع عناصر الأغاني
const songButtons = document.querySelectorAll('.song-item');

songButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-song-index'), 10);
        if (!isNaN(index)) {
            songIndex = index; // تعيين مؤشر الأغنية الحالية
            loadSong(songs[songIndex]);
            playSong();
        }
    });
});
// التعامل مع السحب في شريط الأغاني على الأجهزة التي تعمل باللمس
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // إذا لم يكن الماوس مضغوطًا، لا تفعل شيء
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة التمرير
    slider.scrollLeft = scrollLeft - walk;
});

// إضافة الأحداث لللمس على الأجهزة المحمولة
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return; // إذا لم يكن اللمس مستمرًا، لا تفعل شيء
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة التمرير
    slider.scrollLeft = scrollLeft - walk;
});
