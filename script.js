dialogue= document.getElementById("dialogue"); //éléments du dom
attaquebutton= document.getElementById("attaque");
defensebutton= document.getElementById("defense");
confirmbutton= document.getElementById("confirm");
action= document.getElementById("action");
pvmonstre1= document.getElementById("hpmonstre1");
pvmonstre2= document.getElementById("hpmonstre2");
pvmonstre3= document.getElementById("hpmonstre3");
monstre1= document.getElementById("monstre1");
monstre2= document.getElementById("monstre2");
monstre3= document.getElementById("monstre3");
monstreinfo1= document.getElementById("monstreinfo1");
monstreinfo1= document.getElementById("monstreinfo2");
monstreinfo1= document.getElementById("monstreinfo3");



hero_actif= 0; //déclaration de variables
monstre_actif= 0;
nom_actif= 0;
pv_actif= 0;
tirage= 0;
hero_vise= 0;
nom_vise= 0;
pv_vise= 0;
attaquejoueur1= 5;
attaquejoueur2= 10;
attaquejoueur3=12;
attaquejoueur4= 3;
attaquemonstre1= 5;
attaquemonstre2= 100;
attaquemonstre3= 5;
aura_defense= 0;
attaque_actif= 0;
compteurClick=0;
defense_compteur=0;

joueur1_mort= false;
joueur2_mort= false;
joueur3_mort= false;
joueur4_mort= false;

monstre1_mort= false;
monstre2_mort= false;
monstre3_mort= false;

dernier_joueur= false;
dialogueMort_monstre1= false;
dialogueMort_monstre2= false;
dialogueMort_monstre3= false;

dialogueMort_joueur1= false;
dialogueMort_joueur2= false;
dialogueMort_joueur3= false;
dialogueMort_joueur4= false;





function riposte(){ //riposte aléatoire des ennemis
  defense_vise= 0;
  if (monstre1_mort == false) { //riposte du premier monstre (s'il n'est pas mort)
      tirage= Math.floor(Math.random()*4)+1; //tirage au sort du héros qui seras visé
      if (tirage==1){
        hero_vise= document.getElementById("hero1");
        nom_vise= document.getElementById("nom_joueur1");
        pv_vise= document.getElementById("pv_joueur1");
      }
      if (tirage==2){
        hero_vise= document.getElementById("hero2");
        nom_vise= document.getElementById("nom_joueur2");
        pv_vise= document.getElementById("pv_joueur2");

      }
      if (tirage==3){
        hero_vise= document.getElementById("hero3");
        nom_vise= document.getElementById("nom_joueur3");
        pv_vise= document.getElementById("pv_joueur3");

      }
      if (tirage==4){
        hero_vise= document.getElementById("hero4");
        nom_vise= document.getElementById("nom_joueur4");
        pv_vise= document.getElementById("pv_joueur4");

      }

      dialogue.innerHTML= "Monstre1 riposte et inflige "+ attaquemonstre1 + " dégats à " + nom_vise.innerHTML+ " qui en bloque " + aura_defense;
      ;
      
      monstre1.animate([ //animation d'attaque du monstre
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
  
      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){     
        hero_vise.animate([//animation du joueur visé
        { opacity: '100%' },
        { opacity: '0%' },
        { opacity: '100%' },
      ], {
        duration: 500,
        iterations: 1
      }); }, 500);
      pv_vise.innerHTML= pv_vise.innerHTML- attaquemonstre1+ aura_defense;
    }

      if (monstre2_mort == false) { //riposte du deuxième monstre (s'il n'est pas mort)
        setTimeout(function(){
          tirage= Math.floor(Math.random()*4)+1;
          if (tirage==1){
            hero_vise= document.getElementById("hero1");
            nom_vise= document.getElementById("nom_joueur1");
            pv_vise= document.getElementById("pv_joueur1");
          }
          if (tirage==2){
            hero_vise= document.getElementById("hero2");
            nom_vise= document.getElementById("nom_joueur2");
            pv_vise= document.getElementById("pv_joueur2");

          }
          if (tirage==3){
            hero_vise= document.getElementById("hero3");
            nom_vise= document.getElementById("nom_joueur3");
            pv_vise= document.getElementById("pv_joueur3");

          }
          if (tirage==4){
            hero_vise= document.getElementById("hero4");
            nom_vise= document.getElementById("nom_joueur4");
            pv_vise= document.getElementById("pv_joueur4");

          }

          dialogue.innerHTML= "Monstre2 riposte et inflige "+ attaquemonstre2 + " dégats à " + nom_vise.innerHTML+ " qui en bloque " + aura_defense;
          ;
          
          monstre2.animate([ //animation d'attaque du monstre
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-50px)' },
            { transform: 'translateX(0px)' },
      
          ], {
            duration: 500,
            iterations: 1
          });
          setTimeout(function(){     
            hero_vise.animate([//animation du joueur visé
            { opacity: '100%' },
            { opacity: '0%' },
            { opacity: '100%' },
          ], {
            duration: 500,
            iterations: 1
          }); }, 500);
          pv_vise.innerHTML= pv_vise.innerHTML- attaquemonstre2 +aura_defense;
      }, 2000);
    }   
      if (monstre3_mort == false) { //riposte du troisième monstre (s'il n'est pas mort)
      setTimeout(function(){
      tirage= Math.floor(Math.random()*4)+1;
      if (tirage==1){
        hero_vise= document.getElementById("hero1");
        nom_vise= document.getElementById("nom_joueur1");
        pv_vise= document.getElementById("pv_joueur1");
      }
      if (tirage==2){
        hero_vise= document.getElementById("hero2");
        nom_vise= document.getElementById("nom_joueur2");
        pv_vise= document.getElementById("pv_joueur2");

      }
      if (tirage==3){
        hero_vise= document.getElementById("hero3");
        nom_vise= document.getElementById("nom_joueur3");
        pv_vise= document.getElementById("pv_joueur3");

      }
      if (tirage==4){
        hero_vise= document.getElementById("hero4");
        nom_vise= document.getElementById("nom_joueur4");
        pv_vise= document.getElementById("pv_joueur4");

      }

      dialogue.innerHTML= "Monstre3 riposte et inflige "+ attaquemonstre3 + " dégats à " + nom_vise.innerHTML + " qui en bloque " + aura_defense;
      
      monstre3.animate([ //animation d'attaque du monstre
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
  
      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){     
        hero_vise.animate([//animation du joueur visé
        { opacity: '100%' },
        { opacity: '0%' },
        { opacity: '100%' },
      ], {
        duration: 500,
        iterations: 1
      }); }, 500);
      pv_vise.innerHTML= pv_vise.innerHTML- attaquemonstre3 +aura_defense;
    }, 4000);
    }
    setTimeout(function(){
      dialogue.innerHTML= "Tour suivant"
    }, 6000); 
}


function attaque(){ //fonction attaque    
  if (!monstre1_mort){ //les joueurs attaquent d'abord le monstre 1
      dialogue.innerHTML= nom_actif.innerHTML + " attaque et inflige "+ attaque_actif + " dégats à monstre1";

      hero_actif.animate([ //animation d'attaque du joueur
        { transform: 'translateX(0px)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0px)' },

      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){ //animation du monstre visé     
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
  if (monstre1_mort & !monstre2_mort){ //quand le monstre 1 est mort, ils attaquent le monstre 2
    dialogue.innerHTML= nom_actif.innerHTML + " attaque et inflige "+ attaque_actif + " dégats à monstre2";

    hero_actif.animate([ //animation d'attaque du joueur
      { transform: 'translateX(0px)' },
      { transform: 'translateX(50px)' },
      { transform: 'translateX(0px)' },

    ], {
      duration: 500,
      iterations: 1
    });
    setTimeout(function(){ //animation du monstre visé     
      monstre2.animate([
      { opacity: '100%' },
      { opacity: '0%' },
      { opacity: '100%' },
    ], {
      duration: 500,
      iterations: 1
    });
    pvmonstre2.innerHTML= pvmonstre2.innerHTML-attaque_actif;
  }, 500);
}
  if (monstre1_mort & monstre2_mort & !monstre3_mort){ //quand le monstre 2 est mort, ils attaquent le monstre 3
    dialogue.innerHTML= nom_actif.innerHTML + " attaque et inflige "+ attaque_actif + " dégats à monstre3";

    hero_actif.animate([ //animation d'attaque du joueur
      { transform: 'translateX(0px)' },
      { transform: 'translateX(50px)' },
      { transform: 'translateX(0px)' },

    ], {
      duration: 500,
      iterations: 1
    });
    setTimeout(function(){ //animation du monstre visé     
      monstre3.animate([
      { opacity: '100%' },
      { opacity: '0%' },
      { opacity: '100%' },
    ], {
      duration: 500,
      iterations: 1
    });
    pvmonstre3.innerHTML= pvmonstre3.innerHTML-attaque_actif;
  }, 500);
verif_mort()
}
}

function defense(){
  dialogue.innerHTML= nom_actif.innerHTML + " utilise défense, toute l'équipe contrera 2 points de dégats à la prochaine riposte"; //ajouter effet visuel
  aura_defense=2;
  defense_compteur=1;
}

function verif_mort(){ //fonction qui vérifie la mort des monstres
if (pvmonstre1.innerHTML<=0){
  monstre1_mort=true;
}
if (pvmonstre2.innerHTML<=0){ 
  monstre2_mort=true;
}
if (pvmonstre3.innerHTML<=0){
  monstre3_mort=true;
}
setTimeout(function(){
if ((monstre1_mort) && (!dialogueMort_monstre1)) {
  monstre1.style.visibility = "hidden";
  dialogue.innerHTML="Monstre 1 a été vaincu";
  dialogueMort_monstre1= true;
}

if ((monstre2_mort) && (!dialogueMort_monstre2)){
  monstre2.style.visibility = "hidden";
  dialogue.innerHTML="Monstre 2 a été vaincu";
  dialogueMort_monstre2= true;
}

if ((monstre3_mort) && (!dialogueMort_monstre3)){
  monstre3.style.visibility = "hidden";
  dialogue.innerHTML="Monstre 3 a été vaincu";
  dialogueMort_monstre3= true;
}
}, 200);
}

function verif_mort_joueurs(){
  if (document.getElementById("pv_joueur1").innerHTML <= 0){
    joueur1_mort=true;
  }
  if (document.getElementById("pv_joueur2").innerHTML <= 0){
    joueur2_mort=true;
  }
  if (document.getElementById("pv_joueur3").innerHTML <= 0){
    joueur3_mort=true;
  }
  if (document.getElementById("pv_joueur4").innerHTML <= 0){
    joueur4_mort=true;
  }

  setTimeout(function(){
    if ((joueur1_mort) && (!dialogueMort_joueur1)){
      document.getElementById("hero1").style.visibility = "hidden";
      dialogue.innerHTML="Jeanne a été vaincue";
      dialogueMort_joueur1= true;
    }
    if ((joueur2_mort) && (!dialogueMort_joueur2)){
      document.getElementById("hero2").style.visibility = "hidden";
      dialogue.innerHTML="Harry a été vaincu";
      dialogueMort_joueur2= true;
    }
    if ((joueur3_mort) && (!dialogueMort_joueur3)){
      document.getElementById("hero3").style.visibility = "hidden";
      dialogue.innerHTML="Conan a été vaincu";
      dialogueMort_joueur3= true;
    }
    if ((joueur4_mort) && (!dialogueMort_joueur4)){
      document.getElementById("hero4").style.visibility = "hidden";
      dialogue.innerHTML="Michel a été vaincu";
      dialogueMort_joueur4= true;
    }
    
  }, 200);


}

function verif_victoire(){

  if (monstre1_mort & monstre2_mort & monstre3_mort){

  }

}

attaquebutton.onclick= function(){ 
  if (compteurClick==0){//permet qu'un joueur ne puisse utiliser qu'une seule action
  attaque()
  compteurClick=compteurClick+1;
  setTimeout(function(){
  dialogue.innerHTML="Passer au joueur suivant?";
  },2000)
  }  
}

defensebutton.onclick= function(){ 
  if (compteurClick==0){//permet qu'un joueur ne puisse utiliser qu'une seule action
    if (defense_compteur==0){
      defense()
      compteurClick=compteurClick+1;
      setTimeout(function(){
      dialogue.innerHTML="Passer au joueur suivant?";
  },2000)
  }
  else{
      dialogue.innerHTML="Un autre joueur a utilisé défense ce tour-ci, utilisez une autre action";
    }
    }    
}

confirmbutton.onclick= function tour(){ //déroulement d'un tour
  
  verif_mort_joueurs()
  aura_defense=0;
  dernier_joueur==false;
  action.style.visibility = "visible"; //apparition de la boîte d'actions

  if (!joueur1_mort){
    //action du joueur 1
    compteurClick=0;
    hero_actif= document.getElementById("hero1");
    nom_actif= document.getElementById("nom_joueur1");
    pv_actif= document.getElementById("pv_joueur1");
    attaque_actif= attaquejoueur1; 
  }
  else{
    dialogue.innerHTML="Jeanne est décédée, passer au joueur suivant?";
  }

  

  setTimeout(function(){
  dialogue.innerHTML="Que voulez-vous faire?";
    },2000)



  confirmbutton.onclick= function (){//action du joueur 2
    
    verif_mort()
    if (!joueur2_mort){
    compteurClick=0;
    hero_actif= document.getElementById("hero2");
    nom_actif= document.getElementById("nom_joueur2");
    pv_actif= document.getElementById("pv_joueur2");
    attaque_actif= attaquejoueur2;
    dialogue.innerHTML="Que voulez-vous faire?";
    }
    else{
      dialogue.innerHTML="Harry est décédé, passer au joueur suivant?";
    }
    
    confirmbutton.onclick=function(){ //action du joueur 3
     
      verif_mort()
      if (!joueur3_mort){
      compteurClick=0;
      hero_actif= document.getElementById("hero3");
      nom_actif= document.getElementById("nom_joueur3");
      pv_actif= document.getElementById("pv_joueur3");
      attaque_actif= attaquejoueur3;
      dialogue.innerHTML="Que voulez-vous faire?";
      }
      else{
        dialogue.innerHTML="Conan est décédé, passer au joueur suivant?";
      }

      
      confirmbutton.onclick=function(){//action du joueur 4
        
        verif_mort()
        if (!joueur4_mort){
        dernier_joueur==true;
        compteurClick=0;
        hero_actif= document.getElementById("hero4");
        nom_actif= document.getElementById("nom_joueur4");
        pv_actif= document.getElementById("pv_joueur4");
        attaque_actif= attaquejoueur4;
        dialogue.innerHTML="Que voulez-vous faire?";
        }
        else{
          dialogue.innerHTML="Michel est décédé, passer au joueur suivant?";
        }
        
          confirmbutton.onclick=function(){
            verif_mort()
            riposte()
            confirmbutton.onclick=function(){ //passage au tour suivant
              tour()
            }
          }
        }
      }
    }
  }
