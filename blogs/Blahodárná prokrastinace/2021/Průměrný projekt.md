---
title: "Průměrný projekt"
date: '2021-02-18 09:55'
tags:
 - Naprosto zbytečné
 - Programování
categories:
 - Blahodárná prokrastinace
---

Kde jsou ty časy, kdy jste nainstalovali kompilátor, napsali kód, spustili kompilátor a program byl hotový? Před rokem 1997.
<!-- more -->
Tehdy byl totiž vydán Red Hat Package Manager a od té doby to šlo s [manažerama dokopce](https://libraries.io/ "Takový přehled těch, které zrovna existují, najdete na Libraries.io"). Dává to smysl. Nechce se vám stahovat každou knihovnu manuálně a pak si dělat seznam odkazů, odkud jste tu knihovnu stáhli, navíc ěště s intrukcema, jak se instaluje 😋.

No a když dojde třeba na tyto stránky, váš projekt pak už není jen váš projekt 🤾‍♀️⛹️‍♂️🏋️‍♀️🤸‍♂️🏌️‍♂️🕴.

![Krásný diagram toho, co obnáší používání moderních frameworků 😛](/images/makingoof1.png)

Ale počkat, vy to vlastně taky musíte v něčem *napsat* <!-- {title="nebo taky nacpat"} -->, že?

![Ironie je, že pán, který Vue.js a Vite.js vymyslel se jmenuje Evan You.](/images/makingoof2.png)

A to ani nemluvím o tom, že si pak asi taky budete chtít zřídit nějaký Continuous Deployment (třeba Github Actions), což je sranda, která vám automaticky nahraje váš automaticky sestavený 🛠️ projekt někam na internet.

Příjemnou zábavu! 😀
PS.: dobrý start je "vědět, že *npm* se spouští ve složce, ve které chcete založit / máte tam svůj projekt". Stejně jako *composer* a ostatní package managery. Trvalo mi asi 3 hodiny, než mi to poprvé došlo 🤦‍♂️.