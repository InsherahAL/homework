const str1='Lorem ip@sum dolor sit amet c#onsectetur a@dipisicing elit. Quaera#t @#non vero, pl@aceat, u#llam fugiat exped@#ita molesti@ae asperiores ipsam commodi dolor, totam laborum reprehenderit nisi. Quasi ipsam ea explicabo m#axime corrupti.'
const str2 = '@#uo'
let counter = 0
for (let i= 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i]==str2[j]) {
           counter++ 
        }
        
    }
    
}
console.log(counter);