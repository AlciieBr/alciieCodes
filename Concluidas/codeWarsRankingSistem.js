function User (rank = -8, progress = 0) {
     let ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
     this.rank = rank;
     this.progress = progress;
     this.incProgress = (incProgress) => {
       let deltaRank = ranks.indexOf(this.rank);
       let deltaProg = ranks.indexOf(incProgress);
       if (deltaProg == -1) {
         throw new Error;
       };
       let delta = deltaProg - deltaRank;
       if (ranks.indexOf(this.rank) === 15) {
         return;
       }
       if (delta > 0) {
         this.progress += parseInt(10 * delta * delta);
       }
       if (delta === 0) {
         this.progress += parseInt(3);
       }
       if (delta < 0) {
         this.progress += parseInt(1);
       }
       while (this.progress >= 100 && this.rank < 8) {
         this.progress -= parseInt(100);
         let nextRank = ranks.indexOf(this.rank) + 1;
         this.rank = ranks[nextRank];
         if (this.rank === 8) {
           this.progress = 0;
         }
       }
     };
   }
   

let Alciie = new User();

Alciie.incProgress(3)
console.log(Alciie.rank)
console.log(Alciie.progress)