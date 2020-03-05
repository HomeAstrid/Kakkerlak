# Kakkerlak
Klein PDF systeem om kakkerlakje deftiger te publiceren

## Opgelet! Nieuwe ICTers van home astrid! 
Het is niet bedoelt een ingewikkeld systeem te maken (zowel frontend als code-wise). 
1. Zodat de scriptor (niet altijd een computer genie) het upload systeem snapt.
2. zodat volgende minder ervaren ICT-mensen er aan kunnen werken. Spijtig genoeg is niet elke ICT een informaticus of even actief in het onderhoud van de code of maakt enkel snelle fixes zonder aandacht voor kwaliteit.

Als gevolg hiervan is er voor gekozen om een zo domme mogelijke oplossing te vinden.
 1. Geen Database. Het gebruik ervan zou idd gemakkelijker zijn voor metadata (datum publicatie, ...). Maar dit is niet nodig voor onze toepassing (toch in jaar 2019-20). Dit we plaatsen alle pdf's in één map en gebruiken we de functie glob om die map uit te lezen.
 2. react pdf viewer library. code moet dus in orde zijn en zoniet moeten oplossingen op de bijhorende github repo te vinden zijn.
 3. Dood simplele PHP, een eenvoudigere, meer gedocumenteerde taal bestaat niet.
 
 
# Hoe bewerken

De front-end is in react geschreven, men moet dus npm en react voor geinstalleerd hebben. Dit kan men makkelijk opzoeken op google hoe.

in de terminal, verander uw pwd (current woking dir) naar het project root en voer het commando `npm install`.

Alle code bevindt zich in de map src. Veel code is er wel niet. Maar het gebruik van states en Props moet je wel kennen. https://reactjs.org/docs/state-and-lifecycle.html

De code bestuit uit:
 1. Een fetcher die via een url de php aanspreekt om alle pdf's te verkrijgen
 2. Conditionele rendering { conditie && component } om of te wel de pdf of alle mogelijke pdf's (links) weer te geven.
 3. Pdf viewer library om de pdf weer te geven
 
# op de server plaatsen
In de terminal (pwd= project root) voer het commando `npm run build` uit. kopier de inhoud van de build map dan naar de map kakkerlakse in de github van de website. op de ssh van de server doe dan git pull.

