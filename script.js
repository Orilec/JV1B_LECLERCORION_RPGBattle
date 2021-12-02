dialogue= document.getElementById("dialogue"); //éléments du dom interactifs
attaquebutton= document.getElementById("attaque");
defensebutton= document.getElementById("defense");
confirmbutton= document.getElementById("confirm");
action= document.getElementById("action");

pvmonstre1= document.getElementById("hpmonstre1");//éléments visuels du dom
pvmonstre2= document.getElementById("hpmonstre2");
pvmonstre3= document.getElementById("hpmonstre3");
monstre1= document.getElementById("monstre1");
monstre2= document.getElementById("monstre2");
monstre3= document.getElementById("monstre2");


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
attaquemonstre2= 10;
attaquemonstre3= 5;
attaque_actif= 0;
compteurClick=0;


function riposte(){ //riposte aléatoire des ennemis
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

      dialogue.innerHTML= "Monstre1 riposte et inflige "+ attaquemonstre1 + " dégats à " + nom_vise.innerHTML;
      
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
      pv_vise.innerHTML= pv_vise.innerHTML- attaquemonstre1;
}

function attaque(){ //fonction attaque    
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

attaquebutton.onclick= function(){ //permet qu'un joueur ne puisse utiliser qu'une seule action
if (compteurClick==0){
attaque()
compteurClick=compteurClick+1;
setTimeout(function(){
dialogue.innerHTML="Passer au joueur suivant?";
},2000)
}  
}

confirmbutton.onclick= function tour(){ //déroulement d'un tour
  //action du joueur 1
  compteurClick=0; 
  hero_actif= document.getElementById("hero1");
  nom_actif= document.getElementById("nom_joueur1");
  pv_actif= document.getElementById("pv_joueur1");
  attaque_actif= attaquejoueur1; 
  
  action.style.visibility = "visible"; //apparition de la boîte d'actions
  dialogue.innerHTML="Que voulez-vous faire?";

  confirmbutton.onclick=function (){
    //action du joueur 2
    compteurClick=0;
    hero_actif= document.getElementById("hero2");
    nom_actif= document.getElementById("nom_joueur2");
    pv_actif= document.getElementById("pv_joueur2");
    attaque_actif= attaquejoueur2;
    dialogue.innerHTML="Que voulez-vous faire?";
    
    confirmbutton.onclick=function(){
      //action du joueur 3
      compteurClick=0;
      hero_actif= document.getElementById("hero3");
      nom_actif= document.getElementById("nom_joueur3");
      pv_actif= document.getElementById("pv_joueur3");
      attaque_actif= attaquejoueur3;
      dialogue.innerHTML="Que voulez-vous faire?";
      
      confirmbutton.onclick=function(){
        //action du joueur 4
        compteurClick=0;
        hero_actif= document.getElementById("hero4");
        nom_actif= document.getElementById("nom_joueur4");
        pv_actif= document.getElementById("pv_joueur4");
        attaque_actif= attaquejoueur4;
        dialogue.innerHTML="Que voulez-vous faire?";
        setTimeout(function(){ //riposte
          action.style.visibility = "hidden";
          riposte()
          },2000)

          confirmbutton.onclick=function(){
            //passage au tour suivant
            tour()
          }
 
        }
        
      }
    }
  }






