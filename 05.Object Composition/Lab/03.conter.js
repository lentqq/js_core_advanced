let counter = (() => {
     let count = 0;
     return () => {
         console.log(++count);
     }
 }
)();
counter();
counter();
counter();
counter();
counter();