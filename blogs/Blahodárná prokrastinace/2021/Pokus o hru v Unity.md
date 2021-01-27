---
title: "Pokus o hru v Unity"
date: '2021-01-27 12:37'
tags:
 - Unity
 - C#
 - Programování
categories:
 - Blahodárná prokrastinace
---

Mělo se to jmenovat <kbd>BackToSpace</kbd> a úplně to nevyšlo.
<!-- more -->

Když jsem byl na střední škole, tak mě začalo bavit Unity. Kromě jedné znělky, kterou můžete vidět v různých videích, [hlavně dorostových](https://archiv.dorostmladez.cz/trio-de-blb/videa/), jsem v tom nic použitelného nevyrobil. Mnohem lepší v tom jsou v současnosti [moji kémoši](/docs/mlatice-do-klavesnice/Sdílené.html). Každopádně za touhle hrou měl být takový říběh, že ztroskotáte na planetě 🚀🔥, opravíte raketu a vrátíte se back to space. Jednoduché.

Až na to, že jsem se snažil použít [voxelový engine, který už by několik let nevyvíjený](https://forum.unity.com/threads/cubiquity-a-fast-and-powerful-voxel-plugin-for-unity3d.184599/). Byl ale jediný, který už někdo zkombinoval s Unity.
![Generování planety více méně vyšlo, až na ty létající ostrovy jako v Avatarovi](/images/BackToSpace.jpg)
![Docela jsem si dal záležet na světelných efektech, jako je ten vesmír s pohybujícíma se 🪐 v pozadí](/images/BackToSpace2.jpg)

Jak vidíte, jsou tam pěkné mráčki, které dokonce vrhají stíny, které jsem implementoval asi týden. No a o týden později vyšla verze Unity, kde už particle systémy můžou vrhat stíny pouhým zaškrtnutím boxíku ✅.

No tak jsem si řekl, že udělám pěkné nebe a atmosféru. Našel jsem k tomu [pěknou akademickou práci](https://hal.inria.fr/inria-00288758/en), který mi měla pomoct. Vtip byl v tom, že týpek, který se ji rozhodl přepsat pro Unity, si týden před tím, než mě to napadlo, [smazal svůj blog](https://forum.unity.com/threads/terrible-news-for-unity-community-scrawks-blog-was-deleted.411162/).

O 3 měsíce později si ale vytvořil nový, který pak zase smazal 🤦‍♀️, [ale svůj kód nechal na GitHubu 🙌🎉](https://github.com/Scrawk/Brunetons-Atmospheric-Scatter). 
Pak jsem si říkal, že by to chtělo nějaké pěknější osvětlení. [Tak jsem si ho našel, muhahaha](https://github.com/sonicether/SEGI).

Ale...

Pak do Unity přišla Scriptable Render Pipeline a všechno, co jsem do té doby používal, bylo překonáno. Kdybych na tom pracoval teďka, tak bych pravděpodobně použil úplně jiné assety a bylo by to mnohem rychlejší. Z toho plyne poučení.

> Když chcete programovat hru, raději počkejte 5 let. Svět se posune a všechno pak bude mnohem rychlejší a jednodušší.