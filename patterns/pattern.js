/*

1) 
****
****
****
****

*/

const printPatttern1 = (n)=> {
    document.write("<h3>1)</h3>")
    for(let i = 0; i<= n; i++) {
        for(let j = 0; j<= n; j++) {
            document.write("*")
        }
        document.write("<br/>")
    }
}


/*

2) 

*
**
***
****

*/


const printPatttern2 = (n)=> {
    document.write("<h3>2)</h3>")
    for(let i = 0; i<= n; i++) {
        for(let j = 0; j<= i; j++) {
            document.write("*")
        }
        document.write("<br/>")
    }
}

/*

3) 

1
12
123
1234
12345

*/


const printPatttern3 = (n)=> {
    document.write("<h3>3)</h3>")
    for(let i = 1; i<= n; i++) {
        for(let j = 1; j<= i; j++) {
            document.write(j)
        }
        document.write("<br/>")
    }
}



/*

4) 

1
22
333
4444
55555

*/


const printPatttern4 = (n)=> {
    document.write("<h3>4)</h3>")
    for(let i = 1; i<= n; i++) {
        for(let j = 1; j<= i; j++) {
            document.write(i)
        }
        document.write("<br/>")
    }
}

/*

5) 

*****
****
***
**
*

*/


const printPatttern5 = (n)=> {
    document.write("<h3>5)</h3>")
    for(let i = 1; i<= n; i++) {
        for(let j = 1; j<= n - i + 1; j++) {
            document.write("*")
        }
        document.write("<br/>")
    }
}


/*

5) 

12345
1234
123
12
1

*/


const printPatttern6 = (n)=> {
    document.write("<h3>6)</h3>")
    for(let i = 1; i<= n; i++) {
        for(let j = 1; j<= n - i + 1; j++) {
            document.write(j)
        }
        document.write("<br/>")
    }
}


/*

7) 
    *    
   ***   
  *****  
 ******* 
*********

space = i
star =  2*n - i*2 - 1
space = i

*/


const printPatttern7 = (n, merge = false)=> {
    !merge && document.write("<h3>7)</h3>")
    for(let i = 0; i< n; i++) {
        for(let j = 0; j< n - i - 1; j++) {
            document.write("<span>0</span>");
        }

        for(let j = 0; j< (2 * i + 1); j++) {
            document.write("*");
        }

        for(let j = 0; j< n - i - 1; j++) {
            document.write("<span>0</span>");
        }
        
        
        document.write("<br/>")
    }
}

/*

8) 
    *    
   ***   
  *****  
 ******* 
*********

space = i
star =  2*n - i*2 - 1
space = i

*/


const printPatttern8 = (n,  merge = false)=> {
    !merge && document.write("<h3>8)</h3>")
    for(let i = 0; i< n; i++) {

        
        for(let j = 0; j< i; j++) {
            document.write("<span>0</span>");
        }

        for(let j = 0; j < 2 * n - (i * 2 + 1); j++) {
            document.write("*")
        }

        for(let j = 0; j< i; j++) {
            document.write("<span>0</span>");
        }
        
        
        document.write("<br/>")
    }
}
/*
9) 

    *    
   ***   
  *****  
 ******* 
*********
*********
 *******
  *****
   ***
    *

*/
const printPatttern9 = (n, merge = false)=> {
    document.write("<h3>9)</h3>")
    printPatttern7(5, merge)
    printPatttern8(5, merge)
}

/*

10)
    *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *
*/

const printPatttern10 = (n)=> {
    document.write("<h3>10)</h3>") 

    for (let i = 1; i < 2* n; i++) {
        
        const cols = i > n ? 2 * n - i : i;
        
        for (let j = 0; j < cols; j++) {
            document.write("*")
            
        }
        document.write("<br/>")
    }
}


const printPatttern11 = (n)=> {
    document.write("<h3>11)</h3>") 

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j <= i; j++) {

            document.write(j % 2 === 0 ? 1: 0)
            
        }

        document.write("<br/>")
    }
}

const printPatttern12 = (n)=> {
    document.write("<h3>12)</h3>") 

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i; j++) {
            document.write(j)
            
        }

        for (let j = 1; j <= 2* (n - i); j++) {

            document.write("<span>0</span>");
            
        }
        for (let j = 0; j < i; j++) {

            document.write(i - j);
            
        }

        // for(let j=i;j>=1;j--){
        //     document.write(j)
        // }

        document.write("<br/>")
    }
}

const printPatttern13 = (n)=> {
    document.write("<h3>13)</h3>") ;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i; j++) {
            count++;
            document.write(count);
            document.write("<span>0</span>");
            
        }

        document.write("<br/>")
    }
}


const printPatttern14 = (n)=> {
    document.write("<h3>14)</h3>") ;
    let c = 64;

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i; j++) {
            document.write(String.fromCharCode(c + j));
            
        }

        document.write("<br/>")
    }
}

const printPatttern15 = (n)=> {
    document.write("<h3>15)</h3>") ;

    let c = 65;

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n - i; j++) {
            document.write(String.fromCharCode(c + j));
            
        }

        document.write("<br/>")
    }
}

const printPatttern16 = (n)=> {
    document.write("<h3>16)</h3>") ;
    
    let c = 65;

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j <= i; j++) {
            document.write(String.fromCharCode(c + i));
            
        }

        document.write("<br/>")
    }
}

const printPatttern17 = (n)=> {
    document.write("<h3>17)</h3>") ;
    
    let c = 65;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j <= n-i; j++) {
            document.write("<span>0</span>");
            
        }
        
        for (let j = 0; j < i* 2 + 1; j++) {
            let code =  j > (i* 2 + 1) / 2 ? (i* 2) - j  + c : c + j;
            document.write(String.fromCharCode(code));
            
        }

        for (let j = 0; j <= n-i; j++) {
            document.write("<span>0</span>");
        }

        document.write("<br/>")
    }
}

const printPatttern18 = (n)=> {
    document.write("<h3>18)</h3>") ;
    
    let c = 65;

    for (let i = 0; i <= n; i++) {

        for (let j = i; j >= 0; j--) {
            document.write(String.fromCharCode(c+ (n -j)));  
        }
        
        document.write("<br/>")
    }
}


// const printPatttern19 = (n)=> {
//     document.write("<h3>19)</h3>") ;
    
//     let ss = 2 * n - 2;

//     for (let i = 0; i < 2 * n; i++) {
        
//         const cols = i >= n ? i - n + 1 : n - i;

//         for (let j = 0; j < cols; j++) {
//             document.write("*");
            
//         }

//         let space = i >= n ? ss : 2 * i;

//         for (let j = 0; j < space; j++) {
//             document.write("<span>0</span>");
//         }

//         /*
//         i=5=>8 ==> 2n-2
//         i=6=> 6 ==> 
//         i=7=> 4
//         i=8=> 2
//         i=9=0
//         */

//         for (let j = 0; j < cols; j++) {
//             document.write("*");
            
//         }

//         if(i >= n)  ss -=2;
        
//         document.write("<br/>")
//     }
// }

const printPatttern19 = (n)=> {
    document.write("<h3>19)</h3>") ;

    for (let i = 1; i <= 2 * n; i++) {
        
        const cols = i > n ? i - n : n - i + 1;

        for (let j = 0; j < cols; j++) {
            document.write("*");
            
        }

        let space = i > n ? 2*n - ((i - n) *2) : 2 * i - 2;

        for (let j = 0; j < space; j++) {
            document.write("<span>0</span>");
        }

        for (let j = 0; j < cols; j++) {
            document.write("*");
            
        }
        
        document.write("<br/>")
    }
}

const printPatttern20 = (n)=> {
    document.write("<h3>20)</h3>") ;

    for (let i = 1; i < 2 * n; i++) {
        
        const cols = i > n ? 2 * n - i : i;

        for (let j = 1; j <= cols; j++) {
            document.write("*");
            
        }

        let space = i > n ?  2 * i - 2* n: 2 * n - 2 * i;

        for (let j = 0; j < space; j++) {
            document.write("<span>0</span>");
        }

        for (let j = 1; j <= cols; j++) {
            document.write("*");
            
        }
        
        document.write("<br/>")
    }
}


const printPatttern21 = (n)=> {
    document.write("<h3>21)</h3>") ;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {
            if(i === 1 || i === n || j=== 1 || j ===n ) document.write("*");
            else  document.write("<span>0</span>");
           
            
        }

        document.write("<br/>")
    }
}


const printPatttern22 = (n)=> {
    document.write("<h3>22)</h3>") ;

    for (let i = 0; i < 2 * n - 1; i++) {

        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j;
            let right = (2*n - 2)- j;
            let bottom = (2*n - 2)- i;

            const min = n - Math.min(Math.min(top, bottom), Math.min(left , right));
            document.write(min)
           
        }

        document.write("<br/>")
    }
}



window.scrollTo("0", "100%");

printPatttern1(5);
printPatttern2(5)
printPatttern3(5)
printPatttern4(5)
printPatttern5(5)
printPatttern6(5)
printPatttern7(5)
printPatttern8(5)
printPatttern9(5, true)

printPatttern10(5)
printPatttern11(5)
printPatttern12(5)
printPatttern13(5)
printPatttern14(5)
printPatttern15(5)
printPatttern16(5)
printPatttern17(5)
printPatttern18(4)
printPatttern19(4)
printPatttern20(4)
printPatttern21(4)
printPatttern22(4)