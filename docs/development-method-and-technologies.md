# Development Method and Technologies

## Project Evaluation

- **dark ages**: before current library (unmaintainable)
- **ground zero**: early releases (unstable)
- **current time**: ~1 year of stability
- **ideal future**: removal of falsy stuff

![evaluation-of-project](https://docs.google.com/drawings/d/e/2PACX-1vS2sLXByjXzz5muMDis6yWI4cjtsC3touY04nkG-nojNg_xr43WvioCsNsqyd7bq5_Mnrxu-4dh9uNe/pub?w=2349&h=866)

## Technology Overview

- ~~GitHub~~ VSTS Repository
- Jenkins
- `Node.js` & `npm`
- Node.js build utility `dygdfp`
- Chrome&Firefox Extension (Interceptor)
- `Node.js` Meta Tags Crawler
- Azure VM/Ubuntu (`jenkins` & autodocs)
- CDN `rocketcdn` & AWS
- `javascript`/`HTML`/`CSS` (ES6, sass)
- webpack & babel

## A Note on Development Model Used

Source for definitions and images: [wikipedia](https://www.wikipedia.org), [mediawiki](https://www.mediawiki.org)

### Kanban-like/Scrum-like Trials

- A 1.5 developer(s) team!
  - A single developer team to apply an Agile model?
- No answer to *what*, *when* and *how much* <u>to produce</u> questions
  - Kanban aims to manage work by balancing *what*/*when*/*how much* to produce with current capacity by using a visualization of process (kanban board)
- No product owner (not as in scrum po)
- 0-planning
- No priority sense
- Lack of requirements gathering experience
- No release cycle
- No customer involvement (status quo)
- Copy-paste feaure requests

### Evolutionary Prototyping (breadboard prototyping)

from [wikipedia#Evolutionary_prototyping](https://en.wikipedia.org/wiki/Software_prototyping#Evolutionary_prototyping) page:

> The main goal when using **evolutionary prototyping** is to build a very robust prototype in a structured manner and constantly refine it.

difference from thrownaway prototypes:

>  Evolutionary prototypes have an advantage over throwaway prototypes in that they are **functional systems**

#### (1) This Is What We Have (requirements)

An empty breadboard as <u>requirements</u>!

![0-requirements](https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bread_board_1480358_59_60_HDR_Enhancer.jpg/1280px-Bread_board_1480358_59_60_HDR_Enhancer.jpg)

#### (2) This Is What We Develop & Release (early prototype)

A ready-to-release, <u>evaluation-ready prototype</u>!

![1-early-prototype](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Breadboard_complex.jpg/1231px-Breadboard_complex.jpg)

#### (3) This Is What We Evaluate (mature prototype)

A ready-to-re-evaluate <u>creative prototype</u>!

![2-mature-prototype](https://upload.wikimedia.org/wikipedia/commons/0/04/Breadboard_LCD_screen.png)

#### (4) This Was What They Expect

A ready-to-reproduce <u>creative template</u>!

![3-great-expectations](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/NvidiaTesla2075.JPG/1280px-NvidiaTesla2075.JPG)

