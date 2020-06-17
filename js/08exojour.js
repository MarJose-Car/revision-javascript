
 var jourJ = prompt('Saisissez un jour');

 var jourSuivant;

 if(jourJ === "Lundi") {
     jourSuivant = "mardi";
     alert("Demain nous serons le " + jourSuivant);
 }
 else if(jourJ === "mardi") {
     jourSuivant = "mercredi";
     alert("Demain nous serons le " + jourSuivant);
 }
 else if (jourJ === "mercredi") {
     alert("Demain nous serons le " + jourSuivant);
 }
else if (jourJ === "jeudi") {
     jourSuivant = "jeudi";
    alert("Demain nous serons le " + jourSuivant);
}
 else if (jourJ === "vendredi") {
     jourSuivant = "vendredi";
     alert("Demain nous serons le " + jourSuivant);
 }
 else if (jourJ === "samedi") {
     jourSuivant = "dimanche";
     alert("Demain nous serons le " + jourSuivant);
 }
else if (jourJ === "dimanche") {
     jourSuivant = "Lundi";
    alert("Demain nous serons le " + jourSuivant);
}
else {
    alert("Ce n'est pas un jour ça");
}

// switch(jourJ){
//     case "lundi":
//         jourSuivant = "mardi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "mardi":
//         jourSuivant = "mercredi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "mercredi":
//         jourSuivant = "jeudi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "jeudi":
//         jourSuivant = "vendredi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "vendredi":
//         jourSuivant = "vendredi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "samedi":
//         jourSuivant = "dimanche";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     case "dimanche":
//         jourSuivant = "lundi";
//         document.write("Demain nous serons " + jourSuivant);
//     break;
//     default:
//         document.write("Ce jour est n'existe pas");
// }