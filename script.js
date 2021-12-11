dialogue= document.getElementById("dialogue"); //éléments du dom
attaquebutton= document.getElementById("attaque");
defensebutton= document.getElementById("defense");
confirmbutton= document.getElementById("confirm");
action= document.getElementById("action");
interface= document.getElementsByClassName("interface");
defaite= document.getElementsByClassName("defaite");
victoire= document.getElementsByClassName("victoire");
attaque_spe= document.getElementById("magie");

pvmonstre1= document.getElementById("hpmonstre1");
pvmonstre2= document.getElementById("hpmonstre2");
pvmonstre3= document.getElementById("hpmonstre3");

monstre1= document.getElementById("monstre1");
monstre2= document.getElementById("monstre2");
monstre3= document.getElementById("monstre3");

monstreinfo1= document.getElementById("monstreinfo1");
monstreinfo1= document.getElementById("monstreinfo2");
monstreinfo1= document.getElementById("monstreinfo3");

joueur1= document.getElementById("hero1");
nom_joueur1= document.getElementById("nom_joueur1");
pv_joueur1= document.getElementById("pv_joueur1");
mana_joueur1= document.getElementById("mana_joueur1");

joueur2= document.getElementById("hero2");
nom_joueur2= document.getElementById("nom_joueur2");
pv_joueur2= document.getElementById("pv_joueur2");
mana_joueur2= document.getElementById("mana_joueur2");

joueur3= document.getElementById("hero3");
nom_joueur3= document.getElementById("nom_joueur3");
pv_joueur3= document.getElementById("pv_joueur3");
mana_joueur3= document.getElementById("mana_joueur3");

joueur4= document.getElementById("hero4");
nom_joueur4= document.getElementById("nom_joueur4");
pv_joueur4= document.getElementById("pv_joueur4");
mana_joueur4= document.getElementById("mana_joueur4");


hero_actif= 0; //déclaration de variables
nom_actif= 0;
pv_actif= 0;
tirage= 0;

hero_vise= 0;
nom_vise= 0;
pv_vise= 0;

monstre_actif= 0;
nom_monstre_actif= 0;
attaquemonstre_actif= 0;

monstre_vise=0;
nom_monstre_vise=0;
pv_monstre_vise=0;

attaquejoueur1= 5;
attaquejoueur2= 10;
attaquejoueur3=12;
attaquejoueur4= 3;

attaquemonstre1= 5;
nom_monstre1= "Turpillon";
nom_monstre2= "Tripule"
nom_monstre3= "Trousouffle"
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



function animation_degats_riposte(){
  
  dialogue.innerHTML= nom_monstre_actif+ " riposte et inflige "+ attaquemonstre_actif + " dégats à " + nom_vise.innerHTML+ " qui en bloque " + aura_defense;
      ;
      
      monstre_actif.animate([ //animation d'attaque du monstre
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
      pv_vise.innerHTML= pv_vise.innerHTML- attaquemonstre_actif+ aura_defense;
}
function aleatoire(){
  tirage= Math.floor(Math.random()*4)+1; //tirage au sort du héros qui seras visé

  if ((tirage==1)& (!joueur1_mort)){
    hero_vise= joueur1;
    nom_vise= nom_joueur1;
    pv_vise= pv_joueur1;
  }
  if ((tirage==2) & (!joueur2_mort)){
    hero_vise= joueur2;
    nom_vise= nom_joueur2;
    pv_vise= pv_joueur2;
  }
  if ((tirage==3) & (!joueur3_mort)){
    hero_vise= joueur3;
    nom_vise= nom_joueur3;
    pv_vise= pv_joueur3;
  }
  if ((tirage==4) & (!joueur4_mort)){
    hero_vise= joueur4;
    nom_vise= nom_joueur4;
    pv_vise= pv_joueur4;
  }
}
function riposte(){ //riposte aléatoire des ennemis
  defense_vise= 0;
  if (monstre1_mort == false) { //riposte du premier monstre (s'il n'est pas mort)
      monstre_actif=monstre1
      nom_monstre_actif= nom_monstre1
      attaquemonstre_actif= attaquemonstre1
      aleatoire()
      animation_degats_riposte()     
    }

  if (monstre2_mort == false) { //riposte du deuxième monstre (s'il n'est pas mort)
        setTimeout(function(){
          monstre_actif=monstre2
          nom_monstre_actif=nom_monstre2
          attaquemonstre_actif= attaquemonstre2
          aleatoire()
          animation_degats_riposte()
      }, 2000);
    }   
  
    if (monstre3_mort == false) { //riposte du troisième monstre (s'il n'est pas mort)
      setTimeout(function(){
      monstre_actif=monstre3
      nom_monstre_actif= nom_monstre3
      attaquemonstre_actif= attaquemonstre3
      aleatoire()
      animation_degats_riposte()
    }, 4000);
    }
    setTimeout(function(){
      dialogue.innerHTML= "Tour suivant"
    }, 6000); 
}

function animation_degats_attaque(){
  dialogue.innerHTML= nom_actif.innerHTML + " attaque et inflige "+ attaque_actif + " dégats à "+ nom_monstre_vise;
      
      hero_actif.animate([ //animation d'attaque du joueur
        { transform: 'translateX(0px)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0px)' },

      ], {
        duration: 500,
        iterations: 1
      });
      setTimeout(function(){ //animation du monstre visé     
        monstre_vise.animate([
        { opacity: '100%' },
        { opacity: '0%' },
        { opacity: '100%' },
      ], {
        duration: 500,
        iterations: 1
      });
      pv_monstre_vise.innerHTML= pv_monstre_vise.innerHTML-attaque_actif;
    }, 500);
}

function attaque(){//fonction attaque
  verif_mort()     
  if (!monstre1_mort){ //les joueurs attaquent d'abord le monstre 1
    nom_monstre_vise= nom_monstre1;
    pv_monstre_vise= pvmonstre1;
    monstre_vise= monstre1;
    animation_degats_attaque()
  }

  if (monstre1_mort & !monstre2_mort){ //quand le monstre 1 est mort, ils attaquent le monstre 2
    nom_monstre_vise= nom_monstre2;
    pv_monstre_vise= pvmonstre2;
    monstre_vise= monstre2;
    animation_degats_attaque()
}

  if (monstre1_mort & monstre2_mort & !monstre3_mort){ //quand le monstre 2 est mort, ils attaquent le monstre 3
    nom_monstre_vise= nom_monstre3;
    pv_monstre_vise= pvmonstre3;
    monstre_vise= monstre3;
    animation_degats_attaque()
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
if ((monstre1_mort) & (!dialogueMort_monstre1)) {
  monstre1.style.visibility = "hidden";
  dialogue.innerHTML= nom_monstre1+ "a été vaincu";
  dialogueMort_monstre1= true;
}

if ((monstre2_mort) & (!dialogueMort_monstre2)){
  monstre2.style.visibility = "hidden";
  dialogue.innerHTML= nom_monstre2 +"a été vaincu";
  dialogueMort_monstre2= true;
}

if ((monstre3_mort) & (!dialogueMort_monstre3)){
  monstre3.style.visibility = "hidden";
  dialogue.innerHTML= nom_monstre3+ "a été vaincu";
  dialogueMort_monstre3= true;
}
}, 200);
}

function verif_mort_joueurs(){
  if (pv_joueur1.innerHTML <= 0){
    joueur1_mort=true;
  }
  if (pv_joueur2.innerHTML <= 0){
    joueur2_mort=true;
  }
  if (pv_joueur3.innerHTML <= 0){
    joueur3_mort=true;
  }
  if (pv_joueur4.innerHTML <= 0){
    joueur4_mort=true;
  }

  setTimeout(function(){
    if ((joueur1_mort) & (!dialogueMort_joueur1)){
      joueur1.style.visibility = "hidden";
      dialogue.innerHTML="Jeanne a été vaincue";
      dialogueMort_joueur1= true;
    }
    if ((joueur2_mort) & (!dialogueMort_joueur2)){
      joueur2.style.visibility = "hidden";
      dialogue.innerHTML="Harry a été vaincu";
      dialogueMort_joueur2= true;
    }
    if ((joueur3_mort) & (!dialogueMort_joueur3)){
      joueur3.style.visibility = "hidden";
      dialogue.innerHTML="Conan a été vaincu";
      dialogueMort_joueur3= true;
    }
    if ((joueur4_mort) & (!dialogueMort_joueur4)){
      joueur4.style.visibility = "hidden";
      dialogue.innerHTML="Michel a été vaincu";
      dialogueMort_joueur4= true;
    }
    
  }, 200);


}

function verif_victoire(){
  if (monstre1_mort & monstre2_mort & monstre3_mort){
    myWindow = window.open("victory.html", "_blank", "width=1000, height=1000");
  }
}

function verif_defaite(){
  if (joueur1_mort & joueur2_mort & joueur3_mort & joueur4_mort){
    myWindow = window.open("defeat.html", "_blank", "width=1000, height=1000");
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
  joueur4.style.transform="scale(1,1)";
  aura_defense=0;
  dernier_joueur==false;
  action.style.visibility = "visible"; //apparition de la boîte d'actions

  if (!joueur1_mort){
    //action du joueur 1
    attaque_spe.innerHTML= "Soin"
    compteurClick=0;
    joueur1.style.transform="scale(1.5,1.5)";
    hero_actif= joueur1;
    nom_actif= nom_joueur1;
    pv_actif= pv_joueur1;
    attaque_actif= attaquejoueur1;   
    dialogue.innerHTML="Que voulez-vous faire?";
  }
  else{
    dialogue.innerHTML="Jeanne est décédée, passer au joueur suivant?";
  }

  confirmbutton.onclick= function (){//action du joueur 2
    joueur1.style.transform="scale(1,1)";
    verif_victoire()
    verif_mort()
    if (!joueur2_mort){
    joueur2.style.transform="scale(1.5,1.5)";
    attaque_spe.innerHTML= "Poison"
    compteurClick=0;
    hero_actif= joueur2;
    nom_actif= nom_joueur2;
    pv_actif= pv_joueur2;
    attaque_actif= attaquejoueur2;
    dialogue.innerHTML="Que voulez-vous faire?";
    }
    else{
      dialogue.innerHTML="Harry est décédé, passer au joueur suivant?";
    }
    
    confirmbutton.onclick=function(){ //action du joueur 3
      joueur2.style.transform="scale(1,1)";
      verif_victoire()
      verif_mort()
      if (!joueur3_mort){
      joueur3.style.transform="scale(1.5,1.5)";
      attaque_spe.innerHTML= "Grosse Attaque"
      compteurClick=0;
      hero_actif= joueur3
      nom_actif= nom_joueur3;
      pv_actif= pv_joueur3;
      attaque_actif= attaquejoueur3;
      dialogue.innerHTML="Que voulez-vous faire?";
      }
      else{
        dialogue.innerHTML="Conan est décédé, passer au joueur suivant?";
      }

      
      confirmbutton.onclick=function(){//action du joueur 4
        joueur3.style.transform="scale(1,1)";
        verif_victoire()
        verif_mort()
        if (!joueur4_mort){
        joueur4.style.transform="scale(1.5,1.5)";
        attaque_spe.innerHTML= "Aura de défense"
        dernier_joueur==true;
        compteurClick=0;
        hero_actif= joueur4;
        nom_actif= nom_joueur4;
        pv_actif= pv_joueur4;
        attaque_actif= attaquejoueur4;
        dialogue.innerHTML="Que voulez-vous faire?";
        }
        else{
          dialogue.innerHTML="Michel est décédé, passer au joueur suivant?";
        }
        
          confirmbutton.onclick=function(){
            verif_victoire()
            verif_mort()
            riposte()
            confirmbutton.onclick=function(){ //passage au tour suivant
              verif_mort_joueurs()
              verif_defaite()
              setTimeout(function(){
              tour()   
            },3000)
              
            }
          }
        }
      }
    }
  }
