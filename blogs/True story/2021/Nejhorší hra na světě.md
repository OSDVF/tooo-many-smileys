---
title: "Nejhorší hra na světě"
date: 2021-01-23
tags:
 - 🤔
 - Teamwork
 - Programování
 - Linux
categories:
 - True story 😑
---

Jednoho krásného dne mi zavolal kémoš a skončilo to tak, že jsem vyfasoval jeho kšeft, který se mu s sebou nechtělo tahat 🚛 na výlet do ciziny. Měla to být jen taková maličká blbost. Bude to hned, říkal. Nikam nepojedeš, říkal. Bude to home office, říkal.
<!-- more -->
Omlouvá ho trošku jen to, že nevěděl co se stane v budoucnosti. Avšak kdybych byl na jeho místě já, určitě bych nebyl tak optimistický jako on tenkrát a určitě bych neměl ty koule to někomu, jako jsem byl já, svěřit, pokud bych mu nechtěl zavařit stovky hodin života.
## Německá sranda
Měl jsem programovat bílou krabičku 🔳 s několika zdířkami na dráty. Vlastně ani ne programovat. Mělo to webové rozhraní 🌐, přes které mělo jít všechno snadno naklikat.

::: warning Optimismus ale dlouho nevydržel.
Ftip byl v tom, že to vypadalo, že to, co ta krabička umí, vůbec nesouvisí se "zadáním", které jsem dostal
:::

Tak jsem si řekl, že to aspoň trochu přiblížím tomu zadání, to bude stačit. Po hovoru s panem... nazveme ho třeba 🤓, který mě šéfovat, se ale ukázalo, že to stačit nebude.

A tak jsem psal email do německé firmy, která 🔳 vyrobila.
> <footer>Já:</footer>
> Eh.. nešlo by to přeprogramovat?
> <footer>Němci:</footer>
> <p>💲👇😏</p>
Tak jsme tu 🔳 poslali do firmy _PEAK-System Technik GmbH_, aby nám povolili hackerský režim a já z toho mohl udělat úplně jiné zařízení, než jakým ta krabička původně byla. Po pár meilech mi i řekli jaxe to programuje. Prý Linux 😅  
Toš jsem si nainstaloval [WSL](https://cs.wikipedia.org/wiki/Windows_Subsystem_for_Linux) a hledal C++ kompilátor pro SoC Freescale i.MX25.
::: tip Po týdnu jsem našel tyto dvě spásné stránky
[Tutoriál pro stáhnutí a nastavení crostool-NG](http://unisim-vp.org/site/mobile/how-to-build-cross-gcc.html)  
[Pak jsem se dočetl že vlastně musím **step 5** udělat trochu jinak](http://unisim-vp.org/site/mobile/crosstool-arm-926ejs-linux-gnueabi-how-to.html)
:::

Viděl jsem, že mám před sebou tolik práce, že to budu muset dělat přes prázdniny i na táboře přes noc. Ale jo, vyšlo to. Skoro.

## Retrospektiva
Prázdniny už nejsou. Je neděle 20.9.2020. Zítra jdu do školy. Včera jsem zapomněl, že termín přihlašování na předměty začíná 16:30, myslel jsem že je až 19:něco, takže rozvrh nevyšel úplně ideálně. Navíc jsem byl dost uňavoučký 🥱 takže jsem se omylem přihlásil na jiné cvičení, než jsem chtěl (tlačítka byly moc blizko sebe). Vděčím ale jednomu duhovnímu kamarádovi za jeho mobilní internet, jinak by se přihlášení nekonalo.

**Středa-pátek** minulého týdne byly pro mě nejhorší dny v roce. Nevím, možná je i dnešní neděle horší než ony.
Myslel jsem, že ve středu a čtvrtek budu mít na práci přesně: nic. Jen zkoušku kapely ve čtvrtek večer. V pátek taky nic, až dorost, který zrovna byl spojený se sejšnem _Bible není SPAM_.
V **úterý** se mi snažil marně dovolat pan 🤓. Když se mu to konečně podařilo, chtěl po mně, ať dodělám _Ten kšeft_. A tak jsem si k tomu na pár hodin sedl a snažil jsem se udělat program, který by měl všechny funkce, které jsem ze zadání vydedukoval. Ukázalo se že to nebude stačit.

Ve **středu** už po mně totiž chtěli ať přijedu na místo, kde moje 🔳 neboli převodník běží naostro.
Už jen to bylo velice drzé, protože v mojí pracovní smlouvě (o kterou jsem si navíc musel výslovně říct) byly věci, které by mi dovolovaly se v aktuální situaci na tu práci úplně vykašlat a dostat peníze, které mi patří.  
Nemám ale ve zvyku vařit lidem život 🍲 a tak jsem jim vyšel vstříc. Dozvěděl jsem se, že převodník je součást **velké zakázky**, která celá stojí několik desítek milionů 🤑. No ale k mojí motivaci to vůbec nic nepřidalo. Spíš jsem se tím oháněl, když jsem zrovna někomu vysvětloval, proč jsem tak rychle zdrhl z domu.

Převodník byl totiž součástí takového vojenského zařízení.

Když jsem vešel do výrobní haly, tvářil jsem se maximálně znuděně a nepřekvapeně, protože jsem pomalu přiházel na gloub tomu, co se tady děje.  
Byl to [nepotismus](https://cs.wikipedia.org/wiki/Nepotismus) na seriálové úrovni. Budu používat krycí jména. Do **velké zakázky** byly totiž zapojeny 3 firmy. Jedna to měla na starost, řekněme "Češi", druhá byla příbuzná, řekněme "Slováci" a pak tu byl 🤓, který se mezi ně smažil vetřít pomocí svého Kontaktu 😎 mezi "Čechy", aby mohl zaujmout místo "Slováků". Dozvěděl jsem se, teda, že ten degeš, který vymýšlel to strohé _zadání_, na které tu pořád nadávám, je právě "Slovák" a že se mě v podstatě smažil sabotovat 💣.

## Místo činu
Moje práce teda spočívala v tom, že jsem sedl na místo činu a zjišťoval, co by měl vlastně ten převodník reálně měla převádět.  
![Vzácný snímek interiéru místa činu. Tím kolečkem se otevírá hlaveň](/images/interiér.jpg)
🤓 věrně čekal opodál v hale a přesvědčoval papaláše, že to stihnu do pátku, kdy si pro to měl přijít zákazník. Naštěstí to neměl být úplný deadline **velké zakázky** ale jen průběžná předváděčka. Zákazníkovi do toho naštěstí v pátek něco vlezlo, takže měl přijet až v úterý, což nám zachránilo krk (někomu i více, než to - Kontakt 😎 popisoval jeho aktuální situaci jako "koule ve svěráku").   
Problémy, které jsem řešil, byly klíčové. Můj nejbližší spoluprogramátor - Kontakt 😎 - čaasto nevěděl, jak se na papíře vyjádřit, takže jsem mu často musel ukazovat seznam jedniček a nul a ptát se ho "když tam pošlou tohle, tak co mám do prkna poslat tobě"? Často, když jsem mu předváděl výsledek mé opravy, řekl za pět minut, že to chce jinak, a že mi to tak vlastně celou dobu říkal.
### Konec dne
První den jsme s prací sekli kolem 22:00 protože jsem už tak byl dost unavený a na místě činu bylo strašné vědro 🔥. Klimatizace s ukrajinskýma nápisama nefungovala. Česká prý zrovna nebyla na skladě 📦. Nebyli jsme jediní, kdo dělali problémy 😁. Jenom málo věcí si z večera pamatuju.  
Odváželi jsme ještě pár lidí domů, takže se cesta dost protáhla.
"Je to celé taková hra," říkal 🤓, "lidi do toho dávají peníze, aby pak mohli na papír napsat, že máme nějakou obranu. Reálně se nic z toho nepoužije ani kdyby tisíckrát chtěli."
Jojo, říkal jsem si, rozdíl mezi chlapci a chlapy je v ceně hraček.

Myslím, že jsem měl nějaký nedostatek minerálů, protože v autě 🤓 jsem se mu pořád snažil něco říct, ale tak úplně to nevyšlo. Bylo to jako bych to říkal ve snu a nedostával odpověď. Nevím proč, ale pamatuju si, že jsem se ho chtěl třeba zeptat, jak se jmenuje jeho žena a jestli se na to všechno nemůžu vykašlat.

Aspoň, že byl 🤓 ochotný nosit mi nepřeberné množství horké čokolády. Přeslazené 😋. Aspoň něco pozitivního. Nebo vlastně toho bylo víc.

## Druhý den
Ve čtvrtek jsem přišel do haly už brzo ráno 🌅 (všichni nadšení, že musím tak brzo odjet 🙃) s o něco sebejistějším a stejně znuděným výrazem. Všichni nás pozorovali. Naše pověst se roznesla po celé firmě "Čechů". Nejdřív jsem byl půl hodiny v takové "zvukotěsné kóji" (jen mám dobrou náladu, když to teď píšu, takže házím špatné fráze, které mají připomínat [scény z Růžového pantera z roku 2006](https://www.youtube.com/watch?v=ZXfw1y8Mbfo)).

### Fakt sranda
Pak jsem si sedl s notebookem na místo činu a vedle mě seděl tam asi o 10 cm vyšší statný chlap, který vypadal, že právě něco dodělal a prohlíží si, jestli je všechno OK (OK je v Mladé Boleslavi, ale to pochopí jen Travňáci a to jen někteří). Kouknul tam k němu takový mladší kolega a Statný mu začal vysvětlovat:

> <footer>Statný</footer>
> "Chceš vidět, jak někomu říct, že je v prdeli?"
> <footer>Mladý na to</footer>
> Hele ani ne.
> <footer>Statný</footer>
> <p>No to je škoda. Protože to se dělá takhle <span class="text-muted">(otočil se na mě)</span>:
> Bude to fungovat?</p>

Má odpověď "Samozřejmě," ho překvapila. "Fakt jo?" "Ano." Byl jsem si jistější, než že žiju. Pak se na mě snažil dělat ramena. "No a víš co stačí udělat?" "No ukažte," řekl jsem s výrazem někoho, kdo pozoruje malé dítě, jak se mu snaží polít hrad z písku vodou. Zmáčkl na mém notebooku 3 klávesy, takže napsal do mého `ssh root@20.20.53.200` terminálu 💻 něco jako <kbd>FGŘ</kbd>.

> <footer>Statný</footer>
> A teď jseš v prdeli.
> <footer>Já</footer>
> To byste toho musel udělat trochu více, aby se něco stalo.
> <footer>Statný</footer>
> Můžu to zkusit, jestli chceš.
> <footer>Já</footer>
> <p>No a co byste tím získal?</p>

Přestože jsme byli na místě činu sami, mu tato konverzace asi stačila. Odešel 🎤👋. Možná to způsobil i můj výraz psychoterapeuta, který vidí člověka znuděného prací, ve kterém ale pořád ještě tkví špetka soudnosti. Psychoterapeuta připraveného na to, aby poslal pacienta domů s tím, že dneska už stačilo.

Pak jsem si sedl na jeho místo a čekal až dojde další programátor. Jako člověk se snažil být přívětivý a dokonce se mu to i dařilo - žádná sabotáž 😉. Nechtěl bezdůvodně znepříjemnit život a práci někomu, jako jsem byl já. Prý měl hafo dětí a já jsem pro něho asi byl takové přerostlé děcko.  
Navzdory tomu ale všechno, co jsem mu pověděl, předával vedení, což mělo za následek to, že "Slováci" zmanipulovali "Čechy" svými líbivými řečmi o tom, že to zvládnou beze mě a poslali své lidi připravené mě nahradit 🚪⬅️🦶. 🤓 je ale přesvědčil, že to není tak jednoduché a že by si stejně museli projít stejnou cestou jako já.

No v diplomacii byl 🤓 dobrý.
Ještě než ke mně ten programátor sedl, abychom to společně celé testovali, přišel ještě někdo jiný.
Pamatuji si celou konverzaci.

### Nečekaný zájem
> <footer>Mladý týpek:</footer>
> Neříkej mi 'dobrý den'.
> <footer>Odpověděl jsem:</footer>
> <p>Jasné.</p>

5 minut ticha.

"Jaké je to pracovat tady?" zeptal jsem se ho. Dodnes neznám jeho jméno. Možná Tomáš nebo Lukáš.
"No víš co.. Práce v pohodě, peníze z toho jsou. Ale není to, co to bývalo."  
"Co kdysi bývalo?" snažil jsem se trochu rozvést konverzaci.
"**To vedení je na nic**. Nelíbí se mi, sami pořádně nevědí, co chcou a mluví s námi jako s materiálem. Mají v tom všem guláš. 🥣"

"Jo a ten týpek, co tu seděl před tebou, ten nebyl zrovna příjemný. Takový vysoký, ve středních letech," pokračoval jsem.  
"Co dělal?"  
"No dělal ze sebe borce, pomačkal mi pár kláves a čekal, že to tady celé vybouchne," řekl jsem a dodal i všechny podrobnosti.  
"To je debil. Fakt. Dělá tu už asi 20 let. Šel tu z vyučení."  
"Je vyučený k práci v téhle firmě 🤨?" odtušil jsem.  
"Jo 🙄."  
"No tak… Lidi jsou různí a někteří hrůzní 😁." To vždycky zachrání pozitivní naladění každého pomlouvačného rozhovoru.

Pak jsem navázal na předchozí téma: "A předtím to bylo lepší?"  
"No, no, předtím to bylo `název náhodné vojenské matrošovní firmy` a to byla hodně dobrá firma, teď jak to koupil ten… [💣🧨☠️🍗🤬], tak je to guláš"  
"To `název náhodné firmy` ještě existuje?"  
"Jo, ale jen jedno," zmínil také město, ve kterém se `náhodná firma` ještě nachází.  
"To je na prd, no sám ten guláš teďka zažívám," přiznal jsem se.
___
Po chvíli sám pokračoval: 
"Ale jsem rád, že tu jsem. Co bych jinak přes týden dělal? Seděl bych doma a nudil se u televize."  
"No já bych určitě věděl, co dělat. Chodím na `dorost`, to je taková křesťanská mládež, jsem věřící, a s kémošema z církve děláme různé výšlapy a tábory, víkendovky a tak. Je to fajn."

"Aha…." pak znovu navázal "já nejsem věřící. Ale nikomu to neberu, někdo třeba věří a má na to právo."  
"Díky 😀," usmál jsem se. To, s čím hned pokračoval mě zarazilo.

### Nevyrovnaná ztráta
> "Moje teta nedávno umřela. Celý život byla v pohodě, pomáhala lidem jako zdravotní sestra, určitě hodně z nich zachránila. Ale dostala rakovinu. Co je to za spravedlnost?

"S nemocema je to špatné, to lidi nemůžou ovlivnit. Mamka měla _taky_ rakovinu, ale dostala se z toho…"

Překvapilo mě, že takový od pohledu prakticky přemýšlející člověk (zrovna šrouboval <img src="/emotes/screwdriver.svg" height="20" /> přístrojovou desku) se nebojí konverzace o nemocech a smrti. Ale stejně jsem to nerozváděl nějak příliš:  
"No co vím, tak Bůh to tak **nechtěl**, aby lidé měli nemoce nebo umírali. Ale… znáš takový ten příběh o Adamovi a Evě?"  
"Spíš ne."  
Ale proč bych mu o tom vlastně neměl říct, že? 😉  
"No, tak oni nevěřili tomu, že Bůh pro ně má ten nejlepší život, jaký si umí představit a neposlechli ho, čímž způsobili to, že **začaly existovat nemoce** a lidi umírají. No a Bůh to tak nechtěl nechat. Nezáleží mu jen na tom, jestli zemřeme mladí nebo staří, ale chce se s náma radovat _věčně_ a v tom nám pomoct."  
"Jak říkám, nikomu to neberu no…"

"No víš jak jsi říkal, že se tvoje teta snažila _celý život pomáhat lidem_. Tak to je samozřejmě nefér, že si ničeho dobrého moc neužila 😕. Ale ne každý má tu možnost být v uvozovkách "dobrým člověkem". A tak to Bůh pojistil. To jediné, co musíme udělat proto, abychom se s Bohem mohli radovat věčně, už za nás udělal Ježíš 😎👉📈. Možná jsi slyšel o tom, že zemřel na kříži."  
Už nevím, co odpověděl. Na chvíli bylo ticho ⌛.

"Myslíš, že existuje druhý život?" ptal se odvážně.  
"Došel jsem k tomu, že jo."  
"Takže když umřu tak se můžu znova narodit třeba jako nějaké zvíře jo?" 😸
"No věřím, že existuje věčný život, nebo jakoby trochu něco jiného, než druhý život. To by jinak byla spíš reinkarnace. Dává mi to logicky smysl. Proč by Bůh chtěl, abychom se skoro donekonečna rodili znova a někdy do docela špatných životů? To by se s náma nemohl nikdy věčně radovat. Nedávalo by mi to logiku."  
"Aha… jasně." Vypadalo to, že to byl jeho první takový rozhovor v životě.

Mám okno, přesně si nepamatuju, co se dál odehrávalo, ale víc jsme toho už neřekli.

Kvůli tomuhle člověku se vyplatilo to všechno přežít. Nechtěl bych mu vzít možnost dozvědět se věci, které ho zajímají i když jsou třeba nevšední.

No a ještě to neskončilo.  
![Naprosto zhnusený výraz](/images/cat-unamused.jpg)
<center>Mourině je z toho na vrácení.</center>

## Zrada #2
"Slováci" si řekli, že chtějí další 🔳. A měli na mě moc pěkný požadavek. Aby to mělo IP adresu `10.10.53.255`. Síťaři už tuší, že to tak úplně nevyšlo. 🔳 teda pořád na síti existuje a přeposílá to, co má, ale přes SSH už se na něj nepřipojím. Možná jste jedním z těch šťastlivců, kterých jsem se ptal, jestli náhodou nemají USB➡RS232 kabel. Ten se totiž dá použít jako zadní vrátka.

Ještě to teda neskončilo, je 25.1. a na místo činu jedu znova kvůli testování. Pokračování 26.1.: tak jsem jim řekl, že já mám bohužel všechno dobře a oni mají něco špatně. Toš jsme si s 🤓 dali oběd 🧀 a jeli domů 😂.