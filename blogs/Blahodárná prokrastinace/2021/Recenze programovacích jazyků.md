---
title: "Jaký jazyk vybrat"
date: '2021-01-27 18:43'
tags:
 - Programování
categories:
 - Blahodárná prokrastinace
---

S programováním jsem začal někdy v 6. třídě díky kroužku na základce. Chtěl jsem jít na gympl, ale byl jsem od-přesvědčen okolím, což se nakonec vyplatilo 👍️.
<!-- more -->
Říkal jsem si, že se lidi často ptají na to, s jakým jazykem začít, nebo pokud už programují, jestli má smysl se další jazyk učit (protože kolik jazyků umíš, tolikrát jsi programátorem). Tak tady je moje zdlouhavá odpověď. Recenze jazyků z pohledu praktičnosti (🕑 = 💰 a 🕑 = 🤯 + 💔)
## Desktop, Mobil
### C#
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::
```csharp
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
```
Microsh$šproft se ho snaží (společně s Visual Basicem, který je takový Jákob) používat fakt na všechno. `Windows 🚪 `, [[[Linux 🐧]], **_MacOS_** 🍎, _Web_ 🌏, **Cloud** 🌩️](https://dotnet.microsoft.com/ "Já jsem si prostě musel pohrát s barvičkama"), [`Android 🤖`, [[iOS 🍏]]](https://dotnet.microsoft.com/apps/xamarin), i [mikroprocesory](https://netmf.github.io/) i když tam vypadá hodně čudně, [stejně jako stránky](http://informatix.miloush.net/microframework/Home.aspx) lidí, kteří ho propagují 🙃.

Je u něj na výběr z několika knihoven pro okenní aplikace, z nichž se momentálně nejvíce používá WPF, které má krásný klikací editor

![XAML Editor](https://www.tutorialspoint.com/wpf/images/toolbox.jpg)  
Ale pokročilejší věci musíte psát v jazyce XAML (který vám ten editor vždycky na pozadí generuje):
```xml
<Window x:Class = "HelloWorld.MainWindow" 
   xmlns = "http://schemas.microsoft.com/winfx/2006/xaml/presentation" 
   xmlns:x = "http://schemas.microsoft.com/winfx/2006/xaml"
   Title = "MainWindow" Height = "350" Width = "604">
	
   <Grid> 
        <TextBlock Text="Ahoj">
   </Grid> 
	
</Window> 
```

Má automatickou správu paměti, takže když nějakou věc uložíte do RAMky a pak ji přestanete používat, nemusíte ji manuálně vyhazovat, Garbage Collector 🐊 to udělá za vás. Samozřejmě to ale nesmíte přehánět a načítat obrovksé soubory 🤪 a ještě je deserializovat na jednom řádku kódu jako já.
![Spoluprací s Garbage Collectorem mu zároveň upíšete veškerý svůj výkon, který vám bude brát po lžičkách v pravidelných intervalech 🥄](/images/garbage.jpg)

Ale obecně platí, že napsat něco v C# mi **trvalo tak desetinu času**, než když jsem to psal v něčem jiném.
- Rychle se ho naučíte
- Má spoustu vychytávek (alias syntaktický **🍦**<!-- {title="Cukr"} -->)  
...které vám urychlí psaní složitých konstrukcí a zároveň pak po vás jdou ještě přečíst, zázrak 🤣. Ale....
> Ať se děje co chce, nepoužívejte LINQ! <small>Procesory vám poděkují. Od [SPARCu až po Xeon](https://upload.wikimedia.org/wikipedia/commons/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png). A americké domácnosti [určitě taky](https://www.visualcapitalist.com/wp-content/uploads/2018/02/tech-adoption-usa.jpg).</small>

#### ASP.NET
Není to zrovna nejrychlejší ani nejlevnější způsob, jak si udělat webové sránky. Jsou k tomu potřeba předchozí zkušenosti s HTML, CSS, JavaScriptem a principielně i PHP. Zkoušel jsem to, ale nějak mi to nevydrželo. V Česku na to dokonce [seženete i freehosting](https://aspone.cz). Ale asi to používají spíš obří firmy typu eh.. Microsoft.  
Nově existuje [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor), díky kterému vám ten C# poběží pak nejen na straně serveru, ale i v prohlížeči, ale to už jsem nezkoušel.

#### Unity
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::

Pořád C#. Kdysi to používalo jakýsi UnityScript, nebo Boo, ale ty najdete jen v historických balíčcích 🗄️. S Unity [jsem si užil](Pokus%20o%20hru%20v%20Unity.html), ale už jsem si nestihl užít ty 2019+ věci, které jsou tak super, že se k tomu asi ještě někdy vrátím 😋. Každopádně, určitě to není jen jednoduchý klikací editor. Dostanete se klidně až pod povrch vykreslovací pipeliny a možnosti jsou fakt suprové. A kchúl věc: C# je v něm o něco rychlejší (kdyžtak se zeptejte v komentářích, proč). Ale prosím nedělejte v tom jiné věci, než hry - když je vidím, tak dostávám alergii a kapesníky docházejí 🤧 a pak musím používat 🧻, který je eh.. drsný.

::: details Jo a... Unity podporuje snad všechny živé i mrtvé platformy, na kterých se od roku, co jsem se narodil, daly kdy hrát nějaké hry 😍. 
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

Jede taky na .NETu, takže C#. Určitě to je lepší, než začínat s nějakým surovým DirectX nebo OpenGL. Někdy si to lidi vybírají místo Unity, kvůli tomu, aby mohli lépe optimalizovat svůj herní píseček. Od té doby je nikdo neviděl, protože už 3 roky sedí zavření ve sklepě s internetem. Sami to prostě nezvládnou. Jedinou hru, o kterou jsme se s kémošem v MonoGame pokusili, jsme nedodělali, takže nemůžu mluvit o tom, jak se s tím dělá, když už jste ve vývoji dál. Učili jsme se asi hlavně teamworku.

::: details Hello World
```csharp
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;

namespace HelloMonoGame
{
    public class Game1 : Game
    {
        private GraphicsDeviceManager _graphicsDeviceManager;
        private SpriteBatch _spriteBatch;
        private SpriteFont _spriteFont;

        public Game1()
        {
            _graphicsDeviceManager = new GraphicsDeviceManager(this);
            Content.RootDirectory = "Content";
            IsMouseVisible = true;
        }

        protected override void Update(GameTime gameTime)
        {
            var keyboardState = Keyboard.GetState();

            if (keyboardState.IsKeyDown(Keys.Escape))
                Exit();

            base.Update(gameTime);
        }

        protected override void Draw(GameTime gameTime)
        {
            GraphicsDevice.Clear(Color.CornflowerBlue);

            _spriteBatch.Begin();
            _spriteBatch.DrawString(_spriteFont, "Hello MonoGame!", new Vector2(100, 100), Color.White);
            _spriteBatch.End();

            base.Draw(gameTime);
        }
    }
}
```
:::

### Java
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

Je o to asi nejstarší objektový jazyk, jaký se ještě používá. Taky je více cest (více zmatenosti), jak dát dohromady vývojové prostředí (IDE), které ho používá. Zkoušel jsem NetBeans a pak mnohem lepší IntelliJ IDEA. V žádném z nich se mi ale ani po roce nepodařilo rozběhnou okkení knihovnu JavaFX, protože v Javě se přidávají knihovny docela divnými způsoby. Nakonec jsem se na to vykašlal. Kdyby mi někdo na druhou stranu dal na výběr mezi napsáním projektu v Javě anebo Visual Basicu, nebo C (třeba ve škole), tak bych bral Javu ☕.

### Processing
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::
```java
size(400, 400);
ellipse(200, 200, 50, 50);
```
Je to taková grafická zabawka založená na Javě nebo JavaScriptu. Jede na 🖥️, 📱 i 🌍. Hodí se, pokud se nudíte a chcete si namalovat něco jako
<iframe src="https://editor.p5js.org/O.S.DV.F/embed/OleaIy4LN" width="500" height="500" class="center" frameBorder="0"></iframe>

[Celá obrazovka](https://editor.p5js.org/p5user1/full/gplOph6pQ) [Zdroj](https://editor.p5js.org/p5user1/sketches/gplOph6pQ)  
Nebo se taky hodí, pokud chcete někoho (i sebe) naučit některé základní programovací prinicpy snadno a rychle. Je totiž neskutečně jednoduchý a zábavný díky barvičkám 😜. [Začít můžete třeba tady ▶](https://editor.p5js.org/O.S.DV.F/sketches/6pb34gleT)  
Hlavně se v tom nepokoušejte dělat hry, jako já.

Na Androidu je na to appka _APDE_, která absolutně zruinuje váš časový harmonogram a duchapřítomnost při přednáškách (nebo přestávkách samozřejmě), protože programovat na mobilu pak můžete fakt kdykoliv. Svůj program (alias _Sketch_) můžete exportovat i jako živou tapetu, nebo na Android Wear, což je ještě horší 🦛, protože ji pak budete chtít neustále vylepšovat.

### Flutter
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}
```
Google mě pro jednou mile překvapil. Flutter používá jazyk Dart, který je rychlejší, než <em title="Protože je kompilovaný. Java a C# jsou jazyky s virtuálním strojem.">Java nebo C#</em>. Jede na Androidu i 🍏 (za pár let už bude i na 🖥️ a 🕸). Dělá se v něm neskutečně rychle, to musím uznat i když jsem nezkoušel třeba takový Kotlin, což je nějaká vylepšená Java, taky od Googlu. **Dart** má syntaktický cukr podobný tomu, co už jsem znal. Je navržený tak, aby v něm šlo psát přehledně UI i logika. Takže žádné XML jako v Android SDK, nebo XAML jako v C#. Jediná nevýhoda je asi to, že když chcete udělat nějaké bleskurychlé vykreslování vlastních prapodivných tvarů, tak je to docela těžká a špatně zdokumentovaná věc. Má mnohem lepší systém knihoven, než klasické Android SDK. Bohužel je podobný *npm*.

🤓 Má compile-time genericitu, která se dá kombinovat s dynamickými typy, což je... no neuděláte v tom všechno, třeba se nedá vytvořit instance generického typu. Pak taky nemá vlákna, jen jakési `isolate`, které mezi sebou můžou posílat zprávy, ale ne sdílet paměť. K zpracování souborů a pozadí jsem to ale už použil 😌.

Zdálo se vám to strašné? Teď přijde ta horší část, muhahahaha.

### Céčko
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓🤓
:::
Naučíte se ho pravděpodobně [na střední](Vyplatí%20se%20náročnost.html). Existuje milion způsobů, jak dát dohromady prostředí, ve kterém s ním děláte (nevýhoda), každopádně já jsem zkoušel Visual Studio, VSCode a Dev-C++. Když s ním chcete začít, doporučuju podívat se na nějaké tutoriály přímo k tomu IDE, které používáte, protože jinak moc guláše 😵.

To, co v něm programujete je přesně to, co stroj vykonává. Když něco chcete zkopírovat, tak prostě vezmete kus paměti a kopnete ho jinam 🦶. No a když ho dáte na místo, kde už předtím něco bylo, tak tam bude sranda 😛. Jazyk neposkytuje vůbec žádné věci typu "tohle existuje, abyste nemuseli psát zdlouhavě tohle". V jeho dokumentaci je těžké se vyznat, ale zato je hodně přesná a kompletní. Názvy proměnných a funkcí bývají zkratkové a chaotické už i ve standartních knihovnách, takže když uvidíte na první pohled `strrchr(str, ch)` tak nevíte, že to znamená nalezení posledního znaku `ch` v řetězci `str`. Btw řetězce jsou tam null-terminated, což vám trochu zhorší práci s nima. Nesmíte při svém hackování stringů zapomenout dát na konec `\0`.  
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

Pokud chcete něco extrémně rychlého (než to napíšete, trvá to samozřejmě dlouho 🥱), nebo chcete provádět kouzelnické triky s pamětí, tak tohle je jasná volba.

```c
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
```

### C++
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓🤓
:::
```cpp
#include <iostream>

int main() {
    std::cout << "Hello" << 42 << " Worlds!";
    return 0;
}
```
Řeší všechny věci, které vás štvaly na C. Než se ale naučíte používat jeho nejnovější verzi (C++20), tak vás budou štvát jiné věci 🙃. Třeba to, že genericita je jen compile-time <small class="text-primary" title="Vždycky musíte znát přesně datový typ toho, s čím pracujete. Nebo použijete slova jako 'auto' nebo 'decltype', které ho umí vydedukovat za vás. Ale musí ho mít z čeho vydedukovat. Taky je celkem o ničem to, že všechny deklarace &lt;templates&gt; musíte psát do hlavičkových souborů, které se nedají referencovat cyklicky, takže se pak divíte, když najdete direktivu #include uprostřed něčího souboru.">[?]</small> a pak mají datové typy název jako `std::array<std::char_traits<char>::int_type`. Nebo dokonce

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
Arduino používá C++, do kterého vždycky přidá vlastní knihovnu, která způsobí, že se o některé věci nemusíte starat ale taky extrémní zpomalení.
::: details Technické PROČ
V C a C++ totiž každý objekt, který vytvoříte pomocí `malloc()` nebo `new` musíte pak smazat pomocí `free()` nebo `delete`. Alokace paměti je procesorově náročná. Proto většina lidí nepoužívá Arduinovsko-knihovní typ `String`, který svou paměť neustále **maže a vytváří znova při každé změně**, ale raději Céčkovský `char *`.

Pak by se taky dalo mluvit o nevýkonu funkcí `digitalWrite` a `digitalRead` a Sériové lince.
:::

Ladění je horší 🦛, standartně nemožné. Ale existují [různé placené rozšíření](https://www.visualmicro.com/) pro Visual Studio, které vám dovolí _nějak vytvářet breakpointy_ a tak.  
Na Arduinu jsem dokonce [dělal i školní projekt](/docs/mlatice-do-klavesnice/Divnosti.html#skulni-projekty "Hledejte MultiChannelVoltmeter") nebo běhací hru na dorost. Měla bohužel i neběhací část, ve které jste měli projít nepozorovaně kolem pohybového čidla 👁️ a to ostatní už tak moc nebavilo 😅.

#### ESP32
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::
Číňani z firmy Espressif byli schopní vyvinout neskutečně levný a výkonný WiFi/BT mikroprocesor. Je 32 bitový na rozdíl od Arduina a má paměť v řádech MB, takže už můžete i streamovat 🎦. Já jsem si bohužel koupil verzi s integrovaným vysílačem pro dlouhý dosah, který prodává nějaká sama-doma-kutil společnost. Takže ne, že by to bylo zrovna praktické. Když chcete zmáčknout reset tlačítko ⏺️, tak si při tom ohnete WiFi anténu. Takže **kupovat jen oficiální verzi**. Navíc je nejlevnější.

![Oficiální verze](https://cz.mouser.com/images/marketingid/2020/img/138258631.png?v=120720.0227) <!-- {width=40%} -->
![Šunt nekupto verze, které navíc nestačí normální 3.3V baterka](https://www.cnx-software.com/wp-content/uploads/2017/10/TTGO-ESP32-Battery.jpg) <!-- {width=40%} -->

Můžete ji programovat buď jako Arduino, když [si stáhnete plugin](https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/) nebo budete _machři_, jak říkal náš učitel Hardwaru, a budete 3 dny stahovat a nastavovat [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/ "Prý Espressif IoT Development Framework"), které vám ale dovolí dělat "super věci" (třeba znefunkčnit WiFi, jako v mojem případě. Někdy na to určitě napíšu tutoriál 🖱️). V obou případech budete mít na placu C++11.

#### Python
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
```python
x = 1
if x == 1:
    # vnitřní bloky musí být odsazené 4 mezerama
    print("x is 1.")
```
Je to moc pěkný jazyk na pochopení, ale je _dynamicky typovaný_, to znamená, že když zavoláte funkci `jakeJeDnesPocasi()` tak nevíte, jestli vám vrátí číslo, nebo třeba text, pokud si k té funkci nepřečtete návod. TODO: Ikea návod. Psal jsem v něm [Rouškový Filtr](/docs/mlatice-do-klavesnice/Divnosti.html) a generovat grafy umí fakt pěkně a snadno. Možná ho budete mít rádi, pokud jste spíše matematici, než programátoři.  
Třeba na naší škole se hodně používal ke zpracování zvuku ([zdroj](https://nbviewer.jupyter.org/github/zmolikova/ISS_project_study_phase/blob/master/Zvuk_spektra_filtrace.ipynb))
![Jupyter notebook je takový nástroj, ve kterém můžete psát pěkné texty a zároveň kusy kódu, jejichž výstup vidíte hned pod nima, takže je to dost vhodné pro výuku](/images/jupyter.jpg)

### Bash
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓
:::
_Prosím, neee. Programy jsou přece od toho, aby se kompilovaly._ Bash je jazyk, který používáte, když píšete v příkazovém řádku na Linuxu. 
![Linuxovský terminál](https://media.geeksforgeeks.org/wp-content/uploads/20200618195649/kali-terminal-basic-comamnds.png) <!-- {.round} -->
```shell
#!/bin/bash
var="Hello World" 
# print it 
echo "$var"
```

V podstatě na každém řádku (neberte mě za slovo) spustíte nějaký už existující program s nějakými parametry. Takže psát v bashi je jako lepit programy dohromady 🧻. **Jeho syntaxe je... 🤮🌄**, třeba tohle je if:

```shell
#!/bin/bash
echo "What is the answer to the life, the universe, and everything?"
read input
if (( input = 42 )); then
        echo "correct"
else
        echo "incorrect"
fi

if [[ $input -eq "42" ]] # dělá to samé jako předchozí if, ale teď to porovnává jako stringy
then
    echo "correct"
fi
```

a když chcete třeba vypsat všechny uživatele v systému, tak se to dá udělat takhle `awk -F: '{ print $1}' /etc/passwd` a nebo když chcete vypsat uživatele bez administrátorských oprávnění, tak takhle ([zdroj](https://linuxize.com/post/how-to-list-users-in-linux/))
```shell
eval getent passwd {$(awk '/^UID_MIN/ {print $2}' /etc/login.defs)..$(awk '/^UID_MAX/ {print $2}' /etc/login.defs)} | cut -d: -f1
```

Když vidíte tohle, jó, tak přesně víte, co to dělá. Ale jasně, programátoři by měli umět psát komentáře.  

### Qt
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓
:::
```cpp
#include <qapplication.h>
#include <qpushbutton.h>


int main( int argc, char **argv )
{
    QApplication a( argc, argv );

    QPushButton hello( "Hello world!", 0 );
    hello.resize( 100, 30 );

    a.setMainWidget( &hello );
    hello.show();
    return a.exec();
}
```
Qt je multiplatformí C++ GUI knihovna, která má být cute 🐱 a mělo by se s ní rychle pracovat. Dokonce vydali i Qt Quick, které kombinuje jazyky C++ a nějaké QML, které by mělo být ještě snadnější ⚡

```qml
import QtQuick 2.0

Rectangle {
    id: page
    width: 320; height: 480
    color: "lightgray"

    Text {
        id: helloText
        text: "Hello world!"
        y: 30
        anchors.horizontalCenter: page.horizontalCenter
        font.pointSize: 24; font.bold: true
    }
}
```
Bohužel když chcete komunikovat mezi C++ a QML tak to vypadá fakt no...
::: details Hrozně.
```cpp
#ifndef PLAYER_H
#define PLAYER_H

#include <QObject>
#include <QtQuick>
#include <QAudioOutput>
#include <QBuffer>
#include "audiofile.h"

class player : public QObject
{
    Q_OBJECT
    Q_PROPERTY(int audio_pos_from_start READ get_audio_pos_from_start WRITE set_audio_pos_from_start)
    QML_ELEMENT
public:
    player(QObject* parent = nullptr);
    ~player();

    int get_audio_pos_from_start();
    void set_audio_pos_from_start(int id);
signals:
    void set_pos_ms(int pos_ms);
    void done();
public slots:
    Q_INVOKABLE void play(AudioFile* audio, unsigned offset_ms);
    Q_INVOKABLE void stop();
private slots:
    void state_changed(QAudio::State);
    void notify_slot();
private:
    QAudioOutput* audio_out;
    QBuffer* buffer;
    bool playing;
    AudioFile* audio_file;
    int audio_pos_from_start;
};
```
:::

Je tam hromada preprocesorových maker, jako třeba `Q_SALÁT`. Když se dostanete k něčemu složitějšímu, jako třeba [našemu projektu](/docs/mlatice-do-klavesnice/Divnosti.html "Hledejte SoundSketch"), bude nemilé, že třeba neexistuje `Q_ZPŮSOB`, jak `Q_ZKOPÍROVAT` `Q_OBJECT`y, které používáte v QML.

### Brainf*ck
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 0️⃣
:::
Náš učitel Návrhu procesorových systémů nemohl mít lepší nápad, než nás donutit udělat _interpret_ <!-- {title="Převádí jazyk na instrukce pro procesor až za běhu programu"} --> pro Brainf*ck ve VHDL.
```brainfuck
++++++++++
[
 >+++++++
 >++++++++++
 >+++
 >+
 <<<<-
] inicializační cyklus nastaví potřebné adresy a hodnoty buněk
>++. výpis 'H'
>+. výpis 'e'
+++++++. 'l'
. 'l'
+++. 'o'
>++. mezera
<<+++++++++++++++. 'W'
>. 'o'
+++. 'r'
------. 'l'
--------. 'd'
>+. '!'
>. nová řádka
```
Takový program vypíše [[Hello World!]]

### VHDL
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓🤓🤓
:::
```vhdl
entity HelloWorldSimulation is
end entity;
 
architecture sim of HelloWorldSimulation is
begin
 
    process is
    begin
 
        report "Hello World!";
        wait;
 
    end process;
 
end architecture;
```
Není to úplně programovací język. Použvá se u FPGA, což jsou vývojové desky, které na sobě nemají mikroprocesor, ale programovatelné pole logických obvodů 🧇, což je něco na ještě nižší úrovni, než procesor. Pokud chcete vyvíjet procesory, grafické a síťové karty, nebo převodníky z HDMI na výfuk od auta, tak to je jasná volba. Ale jinak mi přijde, že je z té kategorie starých jazyků (© 🇺🇸 Department of Defense 1980), které byly vymyšleny špatně a časem nějak aktualizovány, lepeny 🖋️, ale úplně to nevyšlo. Někdy je prostě lepší začít _"znovu čistý list"_.

### NASM
::: tip Hodnocení
- Složitost 💔💔💔
- Možnosti 🤓
:::
```nasm
    global  _main
    extern  _printf
section .data
    message db  'Hello, World', 10, 0

section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
```
Škola vás donutí k různým zvrhlostem (🍕 v mikrovlnce je slabé kafe). Assembler budete potřebovat, pokud se budete snažit udělat něco fakt zvrhlého, co vám C nebo C++ nedovolí. [Třeba získat root práva](https://www.tomshardware.com/news/x86-hidden-god-mode,37582.html), ale škoda, že to funguje jen na malé skupině procesorů. Taky ho budete muset znát, pokud budete někdy chtít cracknout nějakou hru napsanou v jazyce, který se do assembleru kompiluje (C nebo C++). Určitě se vám bude hodit i když se budete snažit cracknout něco v Javě nebo C#, protože ty používají **mezikód**, který je assemblerům dost podobný.


## Web
U programování webových stránek je největší problém to, že každý prohlížeč si dělá, co chce.  
![Podíl prohlížečů na trhu](https://global-uploads.webflow.com/5d71c5b5ed21579fe7c3535a/5f124031906545e61df0e1d4_web-browser-market-share-p-800.png)  
Ze začátku si s tím ale nelamte hlavu 😶.

### HTML
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
    </body>
</html>
```
HTML naštěstí podporují všechny prohlížeče skoro stejně. Byl původně vyvinut k formátování textových dokumentů a ne úplně tak barvitých stránek, jak vidíte dneska. To se na něm dost podepsalo, takže se nedivte divnostem. Je to prostě jazyk, ve kterém si stránku rozdělíte do značek/tagů a ty potom v jiných jazycích dále používáte. Určitě je to taky jazyk, který by měl umět aspoň trochu každý programátor. Nejlepší beginner tutoriály najdete na [w3schools](https://www.w3schools.com/html/default.asp) nebo česky na [Jak psát web](https://www.jakpsatweb.cz/jak-udelat.html), který je zdlouhavější ale veselejší 😎. Ve chvíli, kdy se vám bude zdát, že by to chtělo nějakou hlavičku nebo menu, které bude na více HTML stránkách stejná, ano je čas přejít na PHP ⏳.

Když už mu trochu porozumíte, je pak sranda otevírat na různých stránkách Dev Tools a prolamovat jejich "zabezpečení" 🙃.  
<video controls preload="none" title="Třeba smazání otravného okna o tom, že se musíte přihlásit k Facebooku, když se dívate na Facebook">
    <source type="video/mp4" src="/images/hack.mp4">
</video>

### PHP
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::
```php
<!DOCTYPE html>
<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
    <?php echo '<p>Hello World</p>'; ?> 
 </body>
</html>
```
_PHP Hypertext Preprocessor_, lidi si s rekurzivními zkratkami prostě nedají pokoj 😅. Je to jazyk, který se spouští na straně serveru, a server po vás plive jen výsledné HTML stránky, takže se nemusíte bát v něm psát podmínky jako:
```php
<?php
$heslo = $_GET['heslo'];
if(isset($heslo))
{
    if($heslo == 'Ahoj1234')
    {
        echo "Moje super tajná admin stránka";
    }
    else
    {
        echo 'Přístup odepřen';
    }
}
?>
```

Což je ze začátku super, pokud si chcete udělat jednoduché stránky s nějakým dynamickým obsahem. Na PHP jede většina světového internetu. Možná je to taky tím, že polovina internetu používá redakční systém Wordpress, který je v PHP napsaný. Novější PHP už jsou objektově orientované, takže tam máte slovíčka jako `class` a `public`. Pokud ale děláte nějaký větší projekt (třeba velikosti Zpěvníkátoru), tak už se na to PHP zase nehodí a je nutné sáhnout po nějakém frameworku 🤚, třeba [Nette](https://nette.org/cs/).

### Wordpress
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓
:::

Prvních pár měsíců se mi s ním dělalo dobře. Ale jak vám začnou vznikat kolize mezi pluginy, nebo zjistíte, že jste si koupili šablonu za tisícovku, kterou váš levný hosting nerozjede rychleji, než:
![Dokonce freehostingy jako Endora nebo WebZdarma jsou rychlejší, než placený Wedos](/images/speed.jpg) <!-- {.p-1} -->  
tak vás to přestane bavit. Bohužel nedokážu doporučit žádnou rovnocennou alternativu, protože jsem ten projekt vzdal 😛.

### CSS
<!-- {h3:class="glitch no-tooltip" title="CSS"} -->
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::
<style lang="stylus">
@require '../../../.vuepress/styles/glitch.css'
</style>

```css
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

span.site-name {
    font-family: 'Staatliches', Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Droid Sans, sans;
    font-size: 1.6rem;
    font-weight: bold;
    color: blue;
    position: relative;
    vertical-align: middle
}
```
Mám ho rád ne, proto, že by byl dobře vymyšlený, ale proto, že v něm děláte design, [animace věcí na stránce](https://codepen.io/pgalor/pen/OeRWJQ) (výkonnější, než JS), a protože jsou na něj hromady tutoriálů. Moje oblíbené jsou CSS Tricks, kde najdete [základy](https://css-tricks.com/almanac/properties/t/text-shadow/) i [kchúl věci, které vás hned tak nenapadnou](https://css-tricks.com/while-you-werent-looking-css-gradients-got-better/). Nejhorší je na CSS asi pozicování. Existuje totiž několik pozicovacích režimů [(static, relative, absolute, fixed, sticky)](https://developer.mozilla.org/en-US/docs/Web/CSS/position) a pak několik kontejnerů, které používají úplně vlastní pozicování (flexbox, grid - Jsou mnohem lepší ve všech směrech, i výkonově). Ale když pochopíte pozicování, pochopili jste CSS. Kdybyste chtěli, klidně o tom napíšu článek.

Pokud máte rádi myšlení mimo krabici 🖾, tady vám házím 🙌 [odkaz na stránku, která je celá jen jeden HTML a jeden CSS soubor](https://john-doe.neocities.org/). I bez PHP a JavaScriptu jdou dělat opravdu kchúl věci 🥰.

Když napíšete nějaký delší CSS soubor, tak je hodně těžké se v něm vyznat. Natož pak v těch, které psali jiní lidi. Proto byly vymyšleny _preprocesory pro CSS_, které se do něj "transpilují". Třeba Sass, Less, nebo Stylus.

### JavaScript
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
```js
<!DOCTYPE HTML>
<html>
    <body>

    <p>Before the script...</p>

    <script>
        var pi = 22/7;
        alert(`Hello, world! ${pi}`);
    </script>

    <p>...After the script.</p>

    </body>
</html>
```

Běží v prohlížeči, takže pokud budete chtít použít nějaké přemodernělé věci jako třeba Push Notikifikace nebo [monitorování stavu baterky](https://whatwebcando.today/battery-status.html), tak se nejdřív podívejte na [CanIUse](https://caniuse.com/), protože pak jsem se vždycky divil, že něco nefujnguje 🙃.

Někdy ale existuje tzv. [polyfill](https://jecas.cz/polyfill), který vám do některých prohlížečů ty nepodporované věci přidá.  
Dynamické typování považuju u jazyka tohohle účelu za dobrý nápad, i když to znamená, že poběží pomaleji 🐌🏃‍♂️. Stejně jako pro všechny prohlíčové jazyky, i pro JS vycházejí [pořád nové standardy](https://cs.wikipedia.org/wiki/ECMAScript "Jmenují se ECMAScript a JavaScript je v podstatě jen jejich konkrétní implementací"). Ty novější už jsou celkem fajn, takže si můžete program přehledně rozdělit do modulů 🛅, nebo používat jednodušší `fetch` místo složitého `XMLHttpRequest`.

### jQuery
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
```js
$( "button.continue" ).html( "Next Step..." )
```
Je to JavaScriptová knihovna. Má výhodu v tom, že vám zkrátí psaní (_write less, do more_). Nevýhoda je v tom, že je pomalá a když ji používáte hodně, tak je potom těžké se v kódu vyznat. HTML totiž funguje tak, že když změníte nějakou proměnnou, která ovlivní vzhled stránky, tak se začne přepočítávat **layout**, abyste měli v JavaScriptu dostupné aktuální hodnoty rozmístění a velikosti všech _elementů_ na stránce. Říká se tomu **layout thrashing**. Pokud ale provedete více změn za sebou, tak se layout phase provede až za poslední z nich. Tomu se pak říká **layout batching** a pomáhají s tím kniovny jako je třeba [fastdom](https://github.com/wilsonpage/fastdom). Vidíte? Abyste si ulehčili práci, tak potřebujete hromadu knihoven a hlavička vaší stránky se rychle a jistě prodlužuje, jako třeba u současné 'stabilní' verze Dorostomládežového Zpěvníkátoru:
```html
<script src="https://browser.sentry-cdn.com/5.7.1/bundle.min.js" integrity="sha384-KMv6bBTABABhv0NI+rVWly6PIRvdippFEgjpKyxUcpEmDWZTkDOiueL5xW+cztZZ" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js" crossorigin="anonymous"></script>
<script src="js/chordEditor.js" defer></script>
<script src="js/support.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" crossorigin="anonymous" defer></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.12/css/bootstrap-select.min.css" crossorigin="anonymous">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.12/js/bootstrap-select.min.js" crossorigin="anonymous" defer></script>
<script src="js/material.min.js" defer async></script>
<script src="js/swup.min.js"></script>
<script src="js/profile-things.js" defer></script>
<script src="js/songProcessing.js" defer></script>
<script src="js/pwa-things.js" defer></script>
<script src="js/bootstrap-input-spinner.js" async></script>
<script src="js/third-party/PSON.js" defer></script>
<script src="js/third-party/resizable.js" defer></script>
<link rel="stylesheet" href="css/loader.css">
<script src="js/NoSleep.js"></script>
<script src="api/settings.js"></script>
```

A proto přišel...

### Webpack
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓
:::

Je to _module bundler_, což znamená, že zválcuje všechny vaše 📜 skripty, všechny 🎨 styly, všechny 📟 htmlka, prostě všechno. Navíc umí transpilovat různé JavaScriptové a CSSkové preprocesory, většinou pomocí nějakého pluginu.  
Funguje tak, že ke každé stránce si najde všechny její závislosti. Všechny skripty vrazí do jednoho skriptu, všechny styly do jednoho stylu, chápeme se. 
![Velkolepé schéma Webpacku](https://www.vzhurudolu.cz/prirucka-content/dist/images/medium/webpack-scheme.png)

Nevyplatí se ho ale používat samotný. Většinou je spíš součástí nějakých větších vývojových balíčků, jako je React, Vue.js, nebo Angular.

### Sass, Stylus
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓🤓
:::
```sass
// Sass
   This comment won't be included in the CSS.
   This is also commented out.
/* But this comment will, except in compressed mode.
/*! This comment will be included even in compressed mode.

$version: "7.8";
/* Framework version for the generated CSS is #{$version}.

@function pow($base, $exponent)
  $result: 1
  @for $_ from 1 through $exponent
    $result: $result * $base
  @return $result /* inline comments must be closed */

.sidebar
  float: left
  margin-left: pow(4, 3) * 1px

```
```stylus
// Stylus
/*
 * Function to return border-radius rule also with its prefixed variants
 */
/*!
* Output this comment regardless of compression
*/
border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments

body
  font 12px Helvetica, Arial, sans-serif

a.button
  border-radius(5px)
```
Jsou to preprocesory pro CSS. Přidávají proměnné, podmínky, funkce a závislosti, takže si můžete lépe svůj kód rozvrhnout mezi více souborů a nemusíte psát stejnou věc vícekrát (*DRY* <!-- {title="Don't Repeat Yourself"} --> 📜🚮). Doporučuju.

Sass má dvě verze syntaxe. Jedné se říká *indented syntax*, protože místo `{}` používá jen odsazení. V této syntaxi je příklad výše. Druhá je "normální", nebo se jí taky říká SCSS a mimo jiné nepodporuje třeba neukončené komentáře `/*`.

### Vue.js
::: tip Hodnocení
- Složitost 💔💔
- Možnosti 🤓🤓🤓
:::
Je to jediný JavaScriptí framework, který jsem zkoušel, takže ho bohužel nemůžu s ničím porovnat. Vybíral jsem totiž podle nějakého postu na StackOverflow, podle kterého byl tehdy Vue nejrychlejší ⚡. [Teď za dva roky už je tomu jinak](https://geekflare.com/best-javascript-frameworks/) ⛈️. No minimálně je rychlejší, než čistý JS, protože používá Virtual DOM (skutečný DOM je pomalý).

Přidává takzvané reaktivní proměnné, což je prostě Data Binding. Změníte proměnnou a ona se změní i v HTMLku.
```html
<template>
   <div>
     <h2> {{ name }} </h2>
     <input 
      type='text' 
      placeholder='Text Box' 
      v-model='query'
    />
    {{ something }}
   </div>
</template>
<script>
```
```js
    export default {
        data() {
            return {
                name: 'HelloWorld',
                query: ""
            }
        },
        computed: {
            something()
            {
                return this.name + this.query;
            }
        }
    }
```
```html
</script>
```
PS: Tento kód je jen v jednom souboru, např HelloWorld.vue

Vue zavádí systém komponent, které můžete na stránce znovupoužívat. Pak stavový systém Vuex, který až tak kladně nehodnotím. Ale docela dobré je třeba to, že každá komponenta může mít svůj CSS/preprocesovanéCSS blok, který nebude nijak ovlivňovat stylování zbytku stránky.

No a pak jsem zjistil, že generovat celý web v JavaScriptu je docela "práce pro prohlížeč navíc". Přesně takhle to totiž všechny JS frameworky dělají. Jako by prohlížeče nebyly i bez nich dost pomalé, že.  
![A některé i pomalejší.](https://i.imgflip.com/snj85.jpg)

Navíc vaše kreativní texty nejsou viditelné pro vyhledávače. Proto vynalezli Server-Side Rendering a Static Generation, které jsou ale docela složité na setup. A tento problém řeší **další framework, uíííí!**

Jmenuje se **Nuxt.js** a zkoušel jsem si ho asi 5 minut, když jsem chtěl naprogramovat tenhle web, ale pak jsem zjistil, že existuje **VuePress**, který je zaměřený jen na psaní statických stránek ve Vue a Markdownu. Nuxt by to zvládl moc dobře, ale byl by to overkill 😋.

### VuePress
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓🤓
:::
Hodí se pro psaní polo-interaktivních stránek s převahou hromady statického obsahu.

<small>(není tady ukázka kódu, protože VuePress nepřináší žádný nový jazyk)</small>

![Jak vypadá tradiční struktura projektu](/images/makingoof1.png)[Po použití pár takových frameworků se vám stane, že váš projekt trošku naroste.](/blogs/Blahodárná%20prokrastinace/2021/Průměrný%20projekt.html)

### Markdown
::: tip Hodnocení
- Složitost 💔
- Možnosti 🤓
:::
```markdown
# Nadpis
## Nižší nadpis
Různé formátovací srandy *kurzíva* **tučné**, a tohle jste viděli nahoře:
`Windows 🚪 `, [[[Linux 🐧]], **_MacOS_** 🍎, _Web_ 🌏, **Cloud** 🌩️ [Titulek odkazu](https://dotnet.microsoft.com/ "Já jsem si prostě musel pohrát s barvičkama")
![Titulek obrázku](https://i.imgflip.com/snj85.jpg)
```
Je to formátovací jazyk. Líbí se mi a používá se všude možně 😉. Můžete uvnitř něj psát i HTML (to bude tím, že se většinou kompiluje do HTML. Ale existují na něj parsery i např. pro Flutter).

## Co bych vybral když
Pro desktopovou aplikaci bych bral C#, pro mobilní Flutter, pro webovou Nuxt.js. Za týden bych vám sice řekl něco jiného, protože se svět zase kousek posune, ale to nevadí. Tráva roste dál, voda teče, a Elon Musk odpaluje další rakety 😉.

Vy jste to dočetli až sem? No gratuluju, tak se těším na nějaké zprávy o tom, jak se vám s těmahle "radama" daří, nebo nedaří 😁!