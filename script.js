dialogue= document.getElementById("dialogue");
attaquebutton= document.getElementById("attaque");
defensebutton= document.getElementById("attaque");
confirmbutton= document.getElementById("confirm");
action= document.getElementById("action");

pvmonstre1= document.getElementById("hpmonstre1");
pvmonstre2= document.getElementById("hpmonstre2");
pvmonstre3= document.getElementById("hpmonstre3");
monstre1= document.getElementById("monstre1");
monstre2= document.getElementById("monstre2");
monstre3= document.getElementById("monstre2");


hero_actif= 0;
monstre_actif= 0;
nom_actif= 0;
pv_actif= 0;
attaquejoueur1= 5;
attaquejoueur2= 10;
attaquemonstre1= 5;
attaque_actif= 0;
i=0;

function riposte(){
        dialogue.innerHTML= "Monstre1 riposte et inflige "+ attaquemonstre1 + " dégats à " + nom_actif.innerHTML;
      
      monstre1.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
  
      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){     
        hero_actif.animate([
        { opacity: '100%' },
        { opacity: '0%' },
        { opacity: '100%' },
      ], {
        duration: 500,
        iterations: 1
      }); }, 500);
      pv_actif.innerHTML= pv_actif.innerHTML- attaquemonstre1;
      dialogue.innerHTML= "Monstre1 riposte et inflige "+ attaquemonstre1 + " dégats à " + nom1.innerHTML;
}

function attaque(){
    
  dialogue.innerHTML= nom_actif.innerHTML + " attaque et inflige "+ attaque_actif + " dégats à monstre1";

      hero_actif.animate([
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
      pvmonstre1.innerHTML= pvmonstre1.innerHTML-attaque_actif;
    }, 500);
}


confirmbutton.onclick=function(){
  hero_actif= document.getElementById("hero1");
  nom_actif= document.getElementById("nom_joueur1");
  pv_actif= document.getElementById("pv_joueur1");
  attaque_actif= attaquejoueur1; 

  action.style.visibility = "visible";
  dialogue.innerHTML="Que voulez-vous faire?";

  if (i==0){
      attaquebutton.onclick= function(){
    attaque()
    i=i+1;
    setTimeout(function(){
    dialogue.innerHTML="Passer au joueur suivant?";
    },2000)


  }  
  }
    
  confirmbutton.onclick=function(){
    i=0;
    hero_actif= document.getElementById("hero2");
    nom_actif= document.getElementById("nom_joueur2");
    pv_actif= document.getElementById("pv_joueur2");
    attaque_actif= attaquejoueur2;
    dialogue.innerHTML="Que voulez-vous faire?";
      
    }
}


    //setTimeout(function(){
    //riposte()
    //},2000)



