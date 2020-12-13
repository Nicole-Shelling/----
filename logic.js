let isFirstCard=1
let numOfFirts; /*  координата первой из открытых плашек*/
let map=[]; /* матрица, в которую рандомно записаны цифры, которые сопоставляются с картинками */
let back="url('https://usercontent1.hubstatic.com/624822.png')";
let countOfCard=0;

function Pict(x){
switch(map[x]){
    case 1 : return 'https://www.ejin.ru/wp-content/uploads/2019/05/407444-svetik.jpg';
    case 2 : return 'https://цветыдмитров.рф/img/17732186_1920.jpg';
    case 3 : return 'https://cs6.pikabu.ru/post_img/big/2015/01/26/5/1422252732_658681920.jpg';
    case 4 : return 'https://on-desktop.com/wps/2019Animals___Cats_Little_blue-eyed_kitten_in_a_basket_with_yarn_133432_.jpg';
    case 5 : return 'https://i.pinimg.com/originals/2f/12/d4/2f12d4d848f85885240ed044dfd378e6.jpg';
    case 6 : return 'https://cdn.fishki.net/upload/post/201509/27/1676876/5_3.jpg';
}


}

function changeBg(x) { /* что происходит, когда ты нажимаешь на ячейку*/
    if(map[x]!==0){
    let blocks=document.querySelectorAll(".block");   
    blocks[x].style.backgroundImage=`url(${Pict(x)})`;
    function check() 
{
    if(isFirstCard){
        isFirstCard=0;
        numOfFirts=x;
    }
    else{
        let a=blocks[x].style.backgroundImage+'';
        let b=blocks[numOfFirts].style.backgroundImage+'';
        if(a===b)
        {
         isFirstCard=1;
         badPlayer=1;
         map[x]=0;
         map[numOfFirts]=0;
         countOfCard+=2;
        if(countOfCard===12){
            let blo=document.querySelector('img').style.opacity=1; 
        }
        }
        else{
        blocks[x].style.backgroundImage=back;
        blocks[numOfFirts].style.backgroundImage=back;
        isFirstCard=1;        
        }
    }
}
setTimeout(check,1000);}
};




function count(num){ /* Вспомогательный метод для получения, какая ячейка n-ая по счету среди свободных */
    let b=-1;
    let currentElement=0;
    while(b!==num){
        if(map[currentElement]===0){
            b++;
        }
        currentElement++;
    }
    return currentElement-1;
}
function random(){ /* метод для распределения картинок по ячейкам */
    let list=[1,1,2,2,3,3,4,4,5,5,6,6]
    for(let i=0;i<12;i++){
        map[i]=0;
    }
    for(let i=0;i<12;i++){
    let a=count(getRandomInt(0,12-i)); 
    map[a]=list[i];   
    }
}
function getRandomInt(min, max) { /* метод для получения рандомного значения в заданном промежутке*/
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
