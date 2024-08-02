
words = ['abruptly',
'absurd',
'abyss',
'affix',
'askew',
'avenue',
'awkward',
'axiom',
'azure',
'bagpipes',
'bandwagon',
'banjo',
'bayou',
'beekeeper',
'bikini',
'blitz',
'blizzard',
'boggle',
'bookworm',
'boxcar',
'boxful',
'buckaroo',
'buffalo',
'buffoon',
'buxom',
'buzzard',
'buzzing',
'buzzwords',
'caliph',
'cobweb',
'cockiness',
'croquet',
'crypt',
'curacao',
'cycle',
'daiquiri',
'dirndl',
'disavow',
'dizzying',
'duplex',
'dwarves',
'embezzle',
'equip',
'espionage',
'euouae',
'exodus',
'faking',
'fishhook',
'fixable',
'fjord',
'flapjack',
'flopping',
'fluffiness',
'flyby',
'foxglove',
'frazzled',
'frizzled',
'fuchsia',
'funny',
'gabby',
'galaxy',
'galvanize',
'gazebo',
'giaour',
'gizmo',
'glowworm',
'glyph',
'gnarly',
'gnostic',
'gossip',
'grogginess',
'haiku',
'haphazard',
'hyphen',
'iatrogenic',
'icebox',
'injury',
'ivory',
'ivy',
'jackpot',
'jaundice',
'jawbreaker',
'jaywalk',
'jazziest',
'jazzy',
'jelly',
'jigsaw',
'jinx',
'jiujitsu',
'jockey',
'jogging',
'joking',
'jovial',
'joyful',
'juicy',
'jukebox',
'jumbo',
'kayak',
'kazoo',
'keyhole',
'khaki',
'kilobyte',
'kiosk',
'kitsch',
'kiwifruit',
'klutz',
'knapsack',
'larynx',
'lengths',
'lucky',
'luxury',
'lymph',
'marquis',
'matrix',
'megahertz',
'microwave',
'mnemonic',
'mystify',
'naphtha',
'nightclub',
'nowadays',
'numbskull',
'nymph',
'onyx',
'ovary',
'oxidize',
'oxygen',
'pajama',
'peekaboo',
'phlegm',
'pixel',
'pizazz',
'pneumonia',
'polka',
'pshaw',
'psyche',
'puppy',
'puzzling',
'quartz',
'queue',
'quips',
'quixotic',
'quiz',
'quizzes',
'quorum',
'razzmatazz',
'rhubarb',
'rhythm',
'rickshaw',
'schnapps',
'scratch',
'shiv',
'snazzy',
'sphinx',
'spritz',
'squawk',
'staff',
'strength',
'strengths',
'stretch',
'stronghold',
'stymied',
'subway',
'swivel',
'syndrome',
'thriftless',
'thumbscrew',
'topaz',
'transcript',
'transgress',
'transplant',
'triphthong',
'twelfth',
'twelfths',
'unknown',
'unworthy',
'unzip',
'uptown',
'vaporize',
'vixen',
'vodka',
'voodoo',
'vortex',
'voyeurism',
'walkway',
'waltz',
'wave',
'wavy',
'waxy',
'wellspring',
'wheezy',
'whiskey',
'whizzing',
'whomever',
'wimpy',
'witchcraft',
'wizard',
'woozy',
'wristwatch',
'wyvern',
'xylophone',
'yachtsman',
'yippee',
'yoked',
'youthful',
'yummy',
'zephyr',
'zigzag',
'zigzagging',
'zilch',
'zipper',
'zodiac',
'zombie']

let btn = document.querySelector('button')

function play(){
    let disp = document.querySelector('h1');
    let index = Math.floor(Math.random() * words.length);
    let OgWord = words[index];
    let chosen = OgWord.split('');
    let input = document.querySelector('input');
    let i = 0; let z = 0;
    let counter = document.getElementById('counter');
    let endscreen = document.getElementById('endscreen');
    let splash = document.querySelector('span');
    let exposition = document.getElementById('exp');

    console.log(OgWord);
    endscreen.style.visibility = 'hidden';
    counter.innerText = 'Mistakes : 0';

    for (let x in chosen){
        chosen.splice(x, 1, '_');
    }

    disp.innerText = chosen.join('');

    input.addEventListener('keyup', function(event){
           

         if (event.key === 'Enter'){
            console.log(i)
            
            if(i < 5){
                for (let x in OgWord.split('')){
                    if (input.value === OgWord.split('')[x]){
                        chosen.splice(x, 1, input.value);
                        disp.innerText = chosen.join(''); 
                    } else{
                        z++
                    }
                }
            }
            
            else{
                endscreen.style.visibility = 'visible';
                splash.style.color = 'red';
                splash.innerText = 'You Lost';
                exposition.innerText = 'The word was ' + OgWord 
            } 

            input.value = '';

            if (z === OgWord.split('').length){
                i++;
                counter.innerText = 'Mistakes : ' + String(i);
                z = 0;
            } else{
                z = 0;
            }         

            if (chosen.join('') === OgWord){
                endscreen.style.visibility = 'visible';
                splash.style.color = 'green';
                splash.innerText = 'You Won';
                exposition.innerText = 'The word was ' + OgWord 
            }
        }    
    })
}

play()

btn.addEventListener('click', function(){
    location.reload()
})