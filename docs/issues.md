# issues

## design

[Shiny Template](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher)

- style related
- behavioral
- maintaining 19 different projects see [#information-architecture](#information-architecture)

## information architecture

**@todo** add ad request cycle diagrams from google drive

- missing `<meta>` tags
- missing ad unit tails
- ad manager related shortcomings
  - reporting issues???
- natural inabilities:

```
# single site ia layout
site
|__ desktop
  |__ content-type-1
  |__ content-type-2
  |__ content-type-3
  |__ ...
  |__ content-type-N
|__ tablet
  |__ content-type-1
  |__ ...
  |__ content-type-N
|__ mobile
  |__ content-type-1
  |__ ...
  |__ content-type-N
```

### number of variations

<u>Total Number of Injections In Use</u>: **1445** 

> 290 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

<u>Total Number of Injections Expected by Crawler</u>: **1545**

> 309 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

## 3rd party

- tr scenario
  - no online documentation
  - no direct support
- globals
  - insufficient documentation
  - direct support
- insiders\*
- bonus system\*

## communication

- all parties are related to each other, but some parties communicate
- advertiser's problem is developer's problem
- dt boosts:
  - physical disadvantage
  - communication channel expands

## code base

- `%6` test coverage
- tightly coupled to current developer(s)
- `harmonyjs` dependency
- documented but!
- not scalable, expands to unknown
- not-measured
  - by development
  - by traffickers
- customization hell


















