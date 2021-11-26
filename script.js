attaquebutton= document.getElementById("attaque");
pvmonstre1= document.getElementById("hpmonstre1")
monstre1= document.getElementById("monstre1");
hero1= document.getElementById("hero1")
dialogue= document.getElementById("dialogue")
nom1= document.getElementById("nom_joueur1")
pvjoueur1= document.getElementById("pv_joueur1")
attaquejoueur1= 5;
attaquemonstre1= 5;

attaquebutton.onclick= function(){
    dialogue.innerHTML= nom1.innerHTML + " attaque et inflige "+ attaquejoueur1 + " dégats à monstre1";

    hero1.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(50px)' },
      { transform: 'translateX(0px)' },

    ], {
      duration: 500,
      iterations: 1
    });
    setTimeout(function(){     
      monstre1.animate([
      { opacity: '100%' },
      { opacity: '0%' },
      { opacity: '100%' },
    ], {
      duration: 500,
      iterations: 1
    });
    pvmonstre1.innerHTML= pvmonstre1.innerHTML-attaquejoueur1;
  }, 500);
    
    
    setTimeout(function(){
      
      dialogue.innerHTML= "Monstre1 riposte et inflige "+ attaquemonstre1 + " dégats à " + nom1.innerHTML;
      
      monstre1.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
  
      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){     
        hero1.animate([
        { opacity: '100%' },
        { opacity: '0%' },
        { opacity: '100%' },
      ], {
        duration: 500,
        iterations: 1
      }); }, 500);
      pvjoueur1.innerHTML= pvjoueur1.innerHTML- attaquemonstre1;
    }, 2000);
    
   

}