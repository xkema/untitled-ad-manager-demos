# Issues

- grouped by bad parts

## Design Related Issues (1)

- style related
  - **demo#0 (ad placement)**
    - [first steps](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/index.html)
      - plain page `hide slot containers`
      - ad occupied page `show slot containers`
      - convert static container to sticky `toggle sticky container`
      - make site nav element sticky along with sticky container `toggle sticky navigation`
    - **don't forget to**: *<u>deactivate ad-blockers & privacy protecters for demo</u>*
- behavioral (responsive custom creatives, show/hide features, fixed elements, ...)
- maintaining 19 different projects see [#information-architecture-related-issues-2](#information-architecture-related-issues-2)

## Information Architecture Related Issues (2)

- lifecycle for ad slots on a page

![lifecycle-of-an-ad-slot](https://docs.google.com/drawings/d/e/2PACX-1vTiFL3QENKDnsUH7IgUYVJWuWKG1-HzV0s3jndgzhhzSso0czZDVSEzQKsuY9rR5QapkDnHA00y2C_O/pub?w=2259&h=1206)

[click to edit document](https://docs.google.com/drawings/d/1onyUUagb8JxLCTqtSefUm1ojw2YVR-7DWSRwNcf8GxA/edit)

- missing `<meta>` tags (includes size, targeting, tails)
- missing ad unit tails (`*/MPU1`, `*/LDB`, `*/L-SKIN`, ...)
- missing container id's (forced injection)
- missing targeting data
- **demo#1 (gpt tags)**
  - [placing gpt ads to page by offered method](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/gpt-tags.html)
    - show code blocks for tags `toggle code snippets`
  - [tag generator app](https://dfpgpt.appspot.com), [pre-configured](https://dfpgpt.appspot.com/g/+5dHXG-ng) tags with demo network

- ia layout of a single site (content-types):

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

- see [./case-studies#theguardiancominternational](https://xkema.github.io/untitled-ad-manager-demos/docs/case-studies#theguardiancominternational)
- custom rendering manipulation (empty creative and custom rendering case)

  - see [./case-studies#custom-rendering-of-a-pageskin-creative](https://xkema.github.io/untitled-ad-manager-demos/docs/case-studies#custom-rendering-of-a-pageskin-creative)
- ad manager related shortcomings

  - reporting issues `???`
- no async behaviour (as a result of missing initial data)
  - **demo#2 (gpt async tags)**
    - [final page](https://xkema.github.io/untitled-ad-manager-demos/src/my-shiny-site-as-a-publisher/async-tags.html) (enable  network throttling on DevTools)
      - intro page, normal loading with blocker script `don't wait`
      - first wait `DOMContentLoaded` event then load ads `wait for dom`
      - first wait `load` event then load ads `wait for load`

### Number of Variations (2.1)

<u>Total Number of Injections In Use</u>: **1445** 

> 290 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

<u>Total Number of Injections Expected by Crawler</u>: **1545**

> 309 web\|tablet\|mobile `content-type`, 5 ad slots per `content-type`

## 3rd Party Related Issues (3)

- tr scenario
  - no online documentation
  - no direct support
- globals (see [./case-studies#prebidjs](https://xkema.github.io/untitled-ad-manager-demos/docs/case-studies#prebidjs))
  - insufficient documentation
  - direct support
- header bidding scripts block everything: failure of a header bidding script (`prebid.js`, `publishertag.js`) means <u>system failure</u>!
- insiders\*
- bonus system\*

## Resource Related Issues (4)

- downsized team, upsized workload
- unpaid effort (all extra work in custom creatives, ad manager panel, targeting fixes, ...)
- just save the day culture

### A Maintenance Developer Story (4.1)

- a deployed <u>working application</u>, <u>staging environments</u> and a <u>development environment</u>
- creative <u>maintenance only</u>
- try to <u>escape</u>
- waiting to <u>define the problem</u> we're solving
- unmanaged development team, team <u>fights</u>
- <u>problem defined</u> (foundation for this documentation)
- <u>decreased team size</u> (no newbies please)
- <u>new job</u> offer
- <u>new treaty</u> (decreased benefits compared to new  one)
- paying <u>technical debts</u> 
- sailing to <u>unknown</u> (a start over)

## Communication & Know-How Related Issues (5)

see [./case-studies#video-display-ad-on-a-page](https://xkema.github.io/untitled-ad-manager-demos/docs/case-studies#video-display-ad-on-a-page) and [./case-studies#a-combined-masthead--pageskin](https://xkema.github.io/untitled-ad-manager-demos/docs/case-studies#a-combined-masthead--pageskin)

- why in an earth a javascript developer answers questions relates to:
  - ad operations
  - sales
  - web sites' internal architecture
  - advertiser & 3rd party issues
  - project status (status related to project management)
  - cretive design related issues
  - ad integration to AMP pages
  - ... endless irrelevant questions ... :)

- all parties relate to each other, but some parties communicate

- advertisers' problem is developer's problem

- what is the thing that sales team sell?

  > site itself, <u>not the inventory</u>! 

- what is the extra thing that the operation team manage?

  > creative design, inventory extending!

- see ad manager roles and role management here: [https://support.google.com/admanager/answer/177403?visit_id=636736312424699196-1432868505&rd=1](https://support.google.com/admanager/answer/177403?visit_id=636736312424699196-1432868505&rd=1)

- dt boosts:
  - physical disadvantage
  - communication channel expands

## Code Base & Site Related Issues (6)

- git flow (same dev branch for all network)
- `%6` test coverage
- tightly coupled to current developer(s)
- `harmonyjs` dependency
- `jQuery` dependency (for site events)
- documented but! [http://xdfp.westeurope.cloudapp.azure.com/docs/reference](http://xdfp.westeurope.cloudapp.azure.com/docs/reference)
- not scalable, expands to unknown
- not-measured
  - by development (# of bugs resolved, build times, # of features released, ...)
  - by traffickers (how technicacl changes & features affected sales & ad consumption, ...)
- customization hell
- inconsistencies among `production` sites and `staging` versions
- slow `staging` sites

![dygdfp-git-workflow](https://docs.google.com/drawings/d/e/2PACX-1vRkMWMF1TXc8leTetl_vLc-uEfavnIFR6Sr4wVOcnKJkOvipTtJr4qZlDBacyIDaN9c-BI1cSFCDzt6/pub?w=1265&h=807)

[click to edit document](https://docs.google.com/drawings/d/1JyMgxcZ_Drd36lABwJ-g9ux0bcmLN0TfN9_WqLsFOAk/edit)
















