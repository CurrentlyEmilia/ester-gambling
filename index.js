const XorShift = require('xorshift');

document.getElementById('spin-button').addEventListener('click', function() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const resultMessage = document.getElementById('result-message');

    resultMessage.textContent = "";

    const symbols = ['7', 'BAR', '🍒', '💎', '1', '2', '3', '4', '5', '6'];

    function spinReel(reel, delay, spins) {
        return new Promise(resolve => {
            let currentSpin = 0;

            function spin() {
                currentSpin++;
                reel.style.transform = `translateY(-60px)`;
                setTimeout(() => {
                    reel.appendChild(reel.firstElementChild);
                    reel.style.transform = 'translateY(0)';

                    if (currentSpin < spins) {
                        setTimeout(spin, delay);
                    } else {
                        for (let i = 0; i < reel.children.length; i++) {
                            reel.children[i].textContent = symbols[Math.floor(miau.random() * symbols.length)];
                        }
                        resolve(reel.children[1].textContent);
                    }
                }, 100);
            }

            spin();
        });
    }

    function playJackpotSound() {
      winfxSound.play();  // Play win effect
      setTimeout(() => {
          coinsSound.play();  // Play coins sound
      }, 500); // Delay to ensure win effect sound is played first
    }  

    async function spinAllReels() {
        const result1 = await spinReel(reel1, 100, 10);
        const result2 = await spinReel(reel2, 100, 10);
        const result3 = await spinReel(reel3, 100, 10);

        const isJackpot = checkJackpot(result1, result2, result3);
        if (isJackpot) {
            resultMessage.textContent = "777 big win";
            playJackpotSound()
        } else {
            resultMessage.textContent = "you're just fucking horrible, aren't you!?";
        }
    }

    function checkJackpot(r1, r2, r3) {
      const jackpots = [
          ['BAR', 'BAR', '🍒'],
          ['BAR', '🍒', 'BAR'],
          ['🍒', 'BAR', '🍒'],
          ['🍒', '🍒', 'BAR'],
          ['🍒', '🍒', '🍒'],
          ['7', '7', '7'],
          ['BAR', 'BAR', 'BAR'],
          ['1', '1', '1'],
          ['2', '2', '2'],
          ['3', '3', '3'],
          ['4', '4', '4'],
          ['5', '5', '5'],
          ['6', '6', '6'],
          ['💎', '💎', '💎']
      ];

        for (let i = 0; i < jackpots.length; i++) {
          const spinythingy = jackpots[i];
          if (spinythingy[0] === r1 && spinythingy[1] === r2 && spinythingy[2] === r3) {
              return true;
          }
      }
      return false;
  }
    spinAllReels();
});
