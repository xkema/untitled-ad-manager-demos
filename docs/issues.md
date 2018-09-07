# Issues

- grouped by bad parts

## Design Related Issues (1)

- style related
  - **demo#0 (ad placement)**
    - [first steps](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/index.html)
    - **don't forget to**: *<u>deactivate ad-blockers, privacy protecters for demo</u>*
- behavioral
- maintaining 19 different projects see [#information-architecture-related-issues-2](#information-architecture-related-issues-2)

## Information Architecture Related Issues (2)

- lifecycle for ad slots on a page

![lifecycle-of-an-ad-slot](https://docs.google.com/drawings/d/e/2PACX-1vTiFL3QENKDnsUH7IgUYVJWuWKG1-HzV0s3jndgzhhzSso0czZDVSEzQKsuY9rR5QapkDnHA00y2C_O/pub?w=2259&h=1206)

- missing `<meta>` tags
- missing ad unit tails
- **demo#1 (gpt tags)**
  - [placing gpt ads to page by offered method](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/gpt-tags.html)

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

- ad manager related shortcomings
  - reporting issues???
- no async behaviour
  - **demo#2 (gpt async tags)**
    - [final page](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/async-tags.html)

### Number of Variations (2.1)

<u>Total Number of Injections In Use</u>: **1445** 

> 290 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

<u>Total Number of Injections Expected by Crawler</u>: **1545**

> 309 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

## 3rd Party Related Issues (3)

- tr scenario
  - no online documentation
  - no direct support
- globals
  - insufficient documentation
  - direct support
- insiders\*
- bonus system\*

## Communication Related Issues (4)

- all parties are related to each other, but some parties communicate
- advertiser's problem is developer's problem
- dt boosts:
  - physical disadvantage
  - communication channel expands

## Code Base Related Issues (5)

- git flow
- `%6` test coverage
- tightly coupled to current developer(s)
- `harmonyjs` dependency
- documented but! [http://xdfp.westeurope.cloudapp.azure.com/docs/reference](http://xdfp.westeurope.cloudapp.azure.com/docs/reference)
- not scalable, expands to unknown
- not-measured
  - by development
  - by traffickers
- customization hell

![dygdfp-git-workflow](https://docs.google.com/drawings/d/e/2PACX-1vRkMWMF1TXc8leTetl_vLc-uEfavnIFR6Sr4wVOcnKJkOvipTtJr4qZlDBacyIDaN9c-BI1cSFCDzt6/pub?w=1265&h=807)
















