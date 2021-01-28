---
title: "Recenze programovacích jazyků"
date: '2021-01-27 18:43'
tags:
 - Programování
categories:
 - Blahodárná prokrastinace
---

S programováním jsem začal někdy v 6. třídě díky kroužku na základce. Chtěl jsem jít na gympl, ale byl jsem od-přesvědčen okolím, což se nakonec vyplatilo 👍️.
<!-- more -->
Říkal jsem si, že se lidi často ptají na to, s jakým jazykem začít, nebo pokud už programují, jestli má smysl se nějaký jazyk učit. Tak tady je moje odpověď. Recenze jazyků z pohledu praktičnosti (🕑 = 💰 a 🕑 = 🤯 + 💔)
## Desktop, Mobil
### Céčko
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓🤓
:::
Naučíte se ho pravděpodobně na střední. To, co v něm programujete je přesně to, co stroj vykonává. Když něco chcete skopírovat, tak prostě vezmete kus paměti a kopnete ho jinam 🦶. No a když to bude na místo, kde už předtím něco bylo, tak bude sranda 😛. Jazyk neposkytuje vůbec žádné věci typu "tohle existuje, abyste nemuseli psát zdlouhavě tohle". V jeho dokumentaci je těžké se vyznat, ale zato je hodně přesná a kompletní. Názvy proměnných a funkcí bývají zkratkové a chaotické už i ve standartních knihovnách, takže když uvidíte na první pohled `strrchr(str, ch)` tak nevíte, že to znamená nalezení posledního znaku `ch` v řetězci `str`. Btw řetězce jsou tam null-terminated, což vám trochu zhorší práci s nima. Nesmíte při svém hackování stringů zapomenout dát na konec `\0`.  
Někteří lidi se Céčko smaží "vylepšit" pomocí naprosto čitelných `#define`. No... eh... jak bych to jen popsal...

> <footer><a href="https://stackoverflow.com/questions/400951/does-c-have-a-foreach-loop-construct">StackOverflow</a></footer>
> As you probably already know, there's no "foreach"-style loop in C.
> Although there are already tons of great macros provided here to work around this, maybe you'll find this macro useful:
>
> ```c
> // "length" is the length of the array.   
> #define each(item, array, length) \
> (typeof(*(array)) *p = (array), (item) = *p; p < &((array)[length]); p++, (item) = *p)
> ```
> ...which can be used with for (as in for each (...)).

<img src="https://i.kym-cdn.com/entries/icons/mobile/000/035/155/Screen_Shot_2020-09-03_at_1.37.58_PM.jpg" class="round" />

A pak jsou tu definice ukazatelů na funkce, které vypadají asi jako `int (*funkce)()` - jako když říkáte, že "jste si mysleli, že jsem si myslel, že jste si mysleli, úplně víte o čem mluvím". Ale existuje i překladač z [C-hatmatilkovštiny do angličtiny](https://cdecl.org/?q=int+%28*%28*foo%29%28void+%29%29%5B3%5D).

Pokud chcete něco extrémně rychlého (než to napíšete, trvá to samozřejmě dlouho 😌), nebo chcete provádět kouzelnické triky s pamětí, tak tohle je jasná volba.

### C++
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓🤓
:::
Řeší všechny věci, které vás štvaly na C. Než se ale naučíte používat jeho nejnovější verzi (C++20), tak vás budou štvát jiné věci 🙃. Třeba to, že genericita je jen compile-time <small class="text-primary" title="Vždycky musíte znát přesně datový typ toho, s čím pracujete. Nebo použijete slova jako 'auto' nebo 'decltype', které umí typ vydedukovat za vás. Ale musí ho mít jak vydedukovat. Taky je celkem o ničem to, že všechny deklarace templates musíte psát do hlavičkových souborů, které se nedají referencovat cyklicky, takže se pak divíte, když najdete direktivu #include uprostřed něčího souboru.">[?]</small> a pak mají datové typy název jako `std::array<std::char_traits<char>::int_type`. Nebo dokonce

> <footer><a href="https://stackoverflow.com/questions/49219685/c-templates-dealing-with-long-class-names/49219742">StackOverflow</a></footer>
> <p>Whaat is the manner in which the following <em>header template declaration</em> should be rendered readable?</p>
>
> ```cpp    
> template<class A>
> SomeLibrary::LongNameClass<SomeLibrary::LongNameClass2,SomeLibrary::LongNameClass3>
> unreadable_function(SomeLibrary::LongNameClass<SomeLibrary::...> input1, ... input2, ... omg){
>         SomeLibrary::SomeFunction<SomeLibrary::LongNameClass<SomeLibrary::...
>         etc.
> }
> ```

Ale pak, když objevíte _reference ❤️_, **range based for loop 🥰** nebo **_smart pointers_ 🤩** nebo dokonce **_LAMBDA EXPRESSIONS_ 🐱‍💻**, tak si
1. Budete připadat jako v nějakém jazyce s automatickou správou paměti
2. Budete připadat jako král, když napíšete
```cpp
threads.push_back(std::move(std::thread([&] {
    std::cout << "Jsem vlákno číslo " << std::this_thread::get_id;
})
```
3. Zjistíte, že musíte dodržovat [pravidlo tří](https://en.wikipedia.org/wiki/Rule_of_three_(C%2B%2B_programming)) jinak vás automatická správa paměti pošle do kam si sami nevidíte
4. Že vám to trvalo napsat vlastně 3x delší dobu, ale kód je aspoň hustější, pěknější a kratší.

#### Arduino
![Arduino Uno R3 SMD](https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg) <!-- {width=300px} -->
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
Je to malé, levné, a když to koupíte v Číně (a tam nejlépe potom i všechny další elektrosrandy), tak ještě 10x levnější. Stonks 💹  
Arduino používá C++ s nějakýma extra věcma navíc, které způsobí, že se o některé věci nemusíte starat ale způsobí to taky extrémní zpomalení.
::: details Technické PROČ
V C a C++ totiž každý objekt, který vytvoříte pomocí `malloc()` nebo `new` musíte pak smazat pomocí `free()` nebo `delete`. Alokace paměti je procesorově náročná. Proto většina lidí nepoužívá typ `String`, která svou paměť neustále **maže a vytváří znova při každé změně**, ale raději Céčkovský `char *`.
:::

Ladění je horší 🦛. Ale existují [různé placené rozšíření](https://www.visualmicro.com/) pro Visual Studio, které vám dovolí _nějak vytvářet breakpointy_ a tak.  
Na Arduinu jsem dokonce [dělal i školní projekt](/docs/mlatice-do-klavesnice/Divnosti.html#skulni-projekty "Hledejte MultiChannelVoltmeter") nebo běhací hru na dorost. Měla bohužel i neběhací část, ve které jste měli projít nepozorovaně kolem pohybového čidla a to ostatní už tak moc nebavilo 😅.

#### ESP32
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::
Číňani z firmy Espressif byli schopní vyvinout neskutečně levný a výkonný WiFi mikroprocesor. Je 32 bitový na rozdíl od Arduina a má paměť v řádech MB, takže už můžete i streamovat 🎦. Já jsem si bohužel koupil verzi s integrovaným vysílačem pro dlouhý dosah, který prodává nějaká sama-doma-kutil společnost. Takže ne, že by to bylo zrovna praktické. Když chcete zmáčknout reset tlačítko ⏺️, tak si při tom ohnete WiFi anténu. Takže **kupovat jen oficiální verzi**, navíc je nejlevnější.

![Oficiální verze](https://cz.mouser.com/images/marketingid/2020/img/138258631.png?v=120720.0227) <!-- {width=40%} -->
![Šunt nekupto verze, která navíc nestačí normální 3.3V baterka](https://www.cnx-software.com/wp-content/uploads/2017/10/TTGO-ESP32-Battery.jpg) <!-- {width=40%} -->

Můžete ji programovat buď jako Arduino, když [si stáhnete plugin](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/) nebo budete _machři_, jak říkál náš učitel Hardwaru, a budete 3 dny stahovat a nastavovat [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/ "Prý Espressif IoT Development Framework"), které vám ale dovolí dělat "super věci" (třeba znefunkčnit WiFi, jako v mojem případě. Někdy na to určitě napíšu tutoriál 🖱️). V obou případech budete mít na placu C++11.

### C#
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::
Microsh$šproft se ho snaží (společně s Visual Basicem, který je takový Jákob) používat fakt na všechno. `Windows 🚪 `, [[[Linux 🐧]], **_MacOS_** 🍎, _Web_ 🌏, **Cloud** 🌩️](https://dotnet.microsoft.com/ "Já jsem si prostě musel pohrát s barvičkama"), [`Android 🤖`, [[iOS 🍏]]](https://dotnet.microsoft.com/apps/xamarin), i [mikroprocesory](https://netmf.github.io/) i když tam vypadá hodně čudně, [stejně jako stránky](http://informatix.miloush.net/microframework/Home.aspx) lidí, kteří ho propagují 🙃.

Má automatickou správu paměti, takže když nějakou věc uložíte do RAMky a pak ji přestanete používat, nemusíte ji manuálně vyhazovat, Garbage Collector to udělá za vás. Samozřejmě to ale nesmíte přehánět a načítat obrovksé soubory a ještě je deserializovat na jednom řádku kódu jako já.
![Spoluprací s Garbage Collectorem mu zároveň upíšete veškerý svůj výkon, který vám bude brát po lžičkách v pravidelných intervalech 🥄](/images/garbage.jpg)

Ale obecně platí, že napsat něco v C# mi trvalo tak desetinu času, než když jsem to psal v něčem jiném.
- Rychle se ho naučíte
- Má spoustu vychytávek (alias syntaktický **🍦**<!-- {title="Cukr"} -->)  
...které vám urychlí psaní složitých konstrukcí a zároveň pak po vás jdou ještě přečíst, zázrak 🤣. Ale....
> Ať se děje co chce, nepoužívejte LINQ! <small>Procesory vám poděkují. Od [SPARCu až po Xeon](https://upload.wikimedia.org/wikipedia/commons/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png). A americké domácnosti [určitě taky](https://www.visualcapitalist.com/wp-content/uploads/2018/02/tech-adoption-usa.jpg).</small>

#### ASP.NET
Není to zrovna nejrychlejší ani nejlevnější způsob, jak si udělat sránky. Zkoušel jsem to, ale nějak mi to nevydrželo. V Česku na to dokonce [seženete i freehosting](https://aspone.cz). Ale asi to používají spíš obří firmy typu eh.. Microsoft.  
Nově existuje [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor), díky kterému vám ten C# poběží pak nejen na straně serveru, ale i v prohlížeči, ale to už jsem nezkoušel.

#### Unity
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::

Pořád C#. Kdysi to používalo jakýsi UnityScript, nebo Boo, ale ty najdete jen v historických balíčcích 🗄️. S Unity [jsem si užil](Pokus%20o%20hru%20v%20Unity.html), ale už jsem si nestihl užít ty 2019+ věci, které jsou tak super, že se k tomu, asi ještě někdy vrátím 😋. Každopádně, určitě to není jen jednoduchý klikací editor. Dostanete se klidně až pod povrch vykreslovací pipeliny a možnosti jsou fakt suprové. A kchúl věc: C# je v něm o něco rychlejší (kdyžtak se zeptejte v komentářích, proč).

::: details Jo a... Unity podporuje snad všechny živé i mrtvé platformy, na kterých se od roku, co jsem se narodil daly kdy hrát nějaké hry 😍. 
[Podle wikipedie:](https://en.wikipedia.org/wiki/Unity_(game_engine)#Supported_platforms)  
- iOS
- Android
- Tizen
- Windows
- Universal Windows Platform
- Mac
- Linux
- WebGL
- PlayStation
- PlayStation Vita
- Xbox One
- 3DS
- Oculus Rift
- Google Cardboard
- Steam VR
- PlayStation VR
- Gear VR
- Windows Mixed Reality
- Daydream
- Android TV
- Samsung Smart TV
- tvOS
- Nintendo Switch
- Fire OS
- Facebook Gameroom
- Apple's ARKit
- Google's ARCore
- Vuforia
- Magic Leap
:::

#### MonoGame
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::

Jede taky na .NETu, takže C#. Určitě to je lepší, než začínat s nějakým surovým DirectX nebo OpenGL. Někdy si to lidi vybírají místo Unity, kvůli tomu, aby to mohli lépe optimalizovat. Od té doby je nikdo neviděl, protože už 3 roky sedí zavření ve sklepě s internetem. Sami to prostě nezvládnou. Jedinou hru, o kterou jsme se s kémošem v MonoGame pokusili, jsme nedodělali, takže nemůžu mluvit o tom, jak se s tím dělá, když už jste ve vývoji dál. Učili jsme se asi hlavně teamworku.

## Ostatní dopíšu příště...
### Java
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::

### Processing
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::

### Flutter
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::

### Bash
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓
:::

### Qt
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓
:::

## Web
### JavaScript
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓
:::

### PHP
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::

### HTML
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::

### CSS
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::

### SASS
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::

### Stylus
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::

### Vue.js
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::
Vuepress, Nuxt.js

### VuePress
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::

Jsou v tom napsány tyhle stránky. Je to takové Vue.js ale optimalizované pro lidi, kteří chtěli spíše hromadový obsah, než složitoou webovou aplikaci.