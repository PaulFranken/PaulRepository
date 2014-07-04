JS Eindopdracht - Battle Simulation
==============
Battle Simulation is een backbone applicatie die 16 randomized personen tegen elkaar laat vechten, waarbij er uiteindelijk 1 als de winnaar wordt verklaard.
Elk persoon heeft een voornaam, achternaam, leeftijd, experience en rang. Deze attributen worden in een forumule gestopt waarbij de persoon met de hoogste waarde zal winnen.
Het gebruikt een tournament bracket(http://www.wvmat.com/brackets/bracket9.jpg). Eerst worden de 8ste finales gesimuleerd, dan de kwart, helft en uiteindelijk de finale.

EISEN:

Opdracht moet tof zijn om te bouwen:

Zelf vind ik de opdracht zeker tof. Uitvogelen hoe ik de formule + de tournament bracket formaat af moest handelen was een hele uitdaging. Ook kan die code goed gebruikt worden in andere backbone projecten.


De opdracht geeft de student genoeg diepgang:

Er zit erg veel diepgang in de opdracht. Naast de formule en de bracket was het ook een uitdaging om het allemaal goed in elkaar te laten werken om het uiteindelijk ook nog eens goed op het scherm te tonen.


De opdracht maakt gebruik van tenminste 3 objecten, waarvan 1 een overervingsrelatie heeft met een ander object:

Er worden 3 objecten/views gebruikt:

De PersonView vult de collection met 16 models en toont deze op het scherm.
De BattleView voert de simulatie uit en toont de overgebleven kandidaten steeds weer op het scherm.
De WinnerView toont wie de winnaar is wanneer er nog maar 1 model in de collection over is.

Allemaal maken ze gebruik van Backbone.X.extend.


Bij de opdracht is het logisch om een MV* pattern toe te passen:

De scheiding van Models en views is erg belangrijk om goed gebruik te kunnen maken van collections in alle views.


Er zijn meerdere events nodig voor een goede werking van het programma:

Elke view heeft meerdere events, en vooral de formules en simulaties hebben hard hun eigen events nodig om vaker gebruikt te kunnen worden.
