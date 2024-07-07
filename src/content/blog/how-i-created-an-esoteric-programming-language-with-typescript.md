---
title: "How I created an esoteric programming language with TypeScript"
tags: ["kochanowski", "programming"]
pubDate: 2024-07-06
thumbnailUrl: "abstract-2.png"
---

Creating esoteric languages can be a difficult yet amazing journey. You can learn many things about how normal programming languages work and later use that knowledge for future projects.

On August 5, 2022, I made the initial commit for the Kochanowski Programming Language. At that time, I wasn't sure how it would work or even how to make it happen. To start, I created a simple Polish version of JavaScript and posted about it on Reddit

My post on the r/polska_wpz subreddit got popular and it gave me motivation to keep working on this project. Example code of my "programming language" at that time looked like this:

```js
Zmiennej A przypisz wartość 8. // var A = 8;
Drukuj("Witaj świecie"). // console.log("Witaj świecie").
```

The benefit of creating a "Polish JavaScript" was that I could import all libraries from npm and create everything you could create in regular JavaScript. With the newly found motivation I wanted to create a langauge that would be different from any other programming language that was created, just for fun.

## Creating a true programming language

The development was very slow as I didn't have any knowledge or experience on creating a working programming language. But in early 2024 I finally started to get somewhere. The syntax didn't include any symbols outside of uppercase or lowercases letter, digits, and the period.

**This is an example of the Fibonnaci sequence written in KPL:**

```txt
Zdefiniuj pierwszą liczbę o wartości równej 1.
Wyczaruj drugą liczbę o wartości równej 0.
Spłódź liczbę pomocniczą o wartości równej 0.

Powtórz 10 razy.

Przypisz pierwszą liczbę dodać drugą liczbę do liczby pomocniczej.
Zmiennej pierwsza liczba przypisz drugą liczbę.
Zmiennej druga liczba przypisz liczbę pomocniczą.

Wydrukuj drugą liczbę.

Przejdź do następnej iteracji.
```

> **Warning:** The syntax is still unstable so this code may break, if it does I will try to update this article.

### How does my esoteric language work

The langauge database consists of 2 major data files:

- `synonyms.json` - contains all synonyms of a word, allowing user to do one thing countless ways
- `schemas.json` - defining all sentance structures and assigning logic to it

Before any logic, the code generates a regular expression for every schema in `schemas.json`. This setup allows me and contributors to add content easy and fast.

The difficult part was getting the interpreter to understand that `zmienna pomocnicza` and `zmiennej pomocniczej` refer to the same variable. To solve this, I implemented a stemmer, although it's not perfect due to the complexity of the Polish language.

Finally, the interpreter processes the code line-by-line, executing it accordingly.

## Conclusion

The journey of creating the Kochanowski Programming Language has been a challenging yet incredibly rewarding experience. It began as a simple experiment with Polish JavaScript and evolved into a unique, esoteric language that not only pushed the boundaries of conventional programming but also deepened my understanding of language design and development.
