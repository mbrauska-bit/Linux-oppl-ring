
function kjor(knapp) {
    let terminal = knapp.parentElement;
    let input = terminal.querySelector(".kommando-input");
    let resultat = terminal.querySelector(".resultat");
    let cmd = input.value.trim();
    let svar = "";

    if (cmd == "pwd") svar = "/home/mark";
    else if (cmd == "ls") svar = "Bilder Dokumenter Nedlastinger";
    else if (cmd == "ls -l") svar = "drwxr-xr-x 2 mark mark 4096 Dokumenter";
    else if (cmd == "whoami") svar = "mark";
    else if (cmd == "cd Dokumenter") svar = "Du er nå i /home/mark/Dokumenter";
    else if (cmd == "cd skole") svar = "Du er nå i /home/mark/skole";
    else if (cmd == "cd ..") svar = "Du gikk ett nivå opp";
    else if (cmd == "cd ~") svar = "Du er nå i /home/mark";
    else if (cmd == "mkdir skole") svar = "Mappen skole er opprettet";
    else if (cmd == "touch notater.txt") svar = "Filen notater.txt er opprettet";
    else if (cmd == "clear") svar = "";
    else svar = "Ukjent kommando";

    resultat.innerText = svar;
    input.value = "";
}
