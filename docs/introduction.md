# introduction

## publisher - advertiser - 3rd party - developer chart

![untitled-communication-flow-doc](images/untitled-communication-flow-doc.png)

move to [issues.md](./issues.md)

## who is \_\_\_\_\_?

- previous dfp [repository](https://github.com/swoopertr/kodads), built by DYG maintained by [serpilacar](https://github.com/serpilacar) (vngrs)
- recent dfp [repository](https://github.com/vedit/dygdfp) built by [vedit](https://github.com/vedit/) (vngrs) maintained by [alienaut](https://github.com/alienaut) (~~vngrs~~), [xkema](https://github.com/xkema) (vngrs) and [kagansari](https://github.com/kagansari)

## what is \_\_\_\_\_?

Sources: 

- [https://support.google.com/admanager](https://support.google.com/admanager)
- [https://publisheruniversity.withgoogle.com](https://publisheruniversity.withgoogle.com)

### Ad Manager (formerly DFP, DoubleClick for Publishers)

A full service ad serving platform, simplifies ad management utilities, provides a ready to use Ad Server.
- one central place for ad management (trafficking, networks, apps, games, websites)
- advanced forecasting
- revenue optimization (enables Google AdSense and Ad Exchange to compete against other networks in real-time)
- integrated into the overall DoubleClick family (all other ad related Google products and services)

- what is DFP infographic, see [source](https://lh3.googleusercontent.com/uWScjuVyc5uf-bTOxuDRMSQqzNTJ09JHjw1eR_AwEs4IrwPQXaClCNwLbqTZNDzyRVPZeaq9mYAeKl8BQi9VFKyXOGgFdhE0OyCz=s0)
  *last accessed date: 03/09/2018*

![https://lh3.googleusercontent.com/uWScjuVyc5uf-bTOxuDRMSQqzNTJ09JHjw1eR_AwEs4IrwPQXaClCNwLbqTZNDzyRVPZeaq9mYAeKl8BQi9VFKyXOGgFdhE0OyCz=s0](https://lh3.googleusercontent.com/uWScjuVyc5uf-bTOxuDRMSQqzNTJ09JHjw1eR_AwEs4IrwPQXaClCNwLbqTZNDzyRVPZeaq9mYAeKl8BQi9VFKyXOGgFdhE0OyCz=s0)

### Google Ads (formerly Google AdWords)

Enables <u>creating advertisements</u> which will appear on relevant Google search result pages and on other partner site registered to Google Advertiser Network.

This is also where we use Google Ads as an advertiser instead of a publisher.

### AdSense

AdSense <u>delivers Google Ads</u> to individuals' websites.

AdSense is the most simple way to monetize a web content by displaying targeted ads next to our digital content. Provides an instant and automatic acccess to huge source of advertisers.

On Ad Sense, we don't control which ads to show on our content, Google does it on behalf of us, and Google pays us on behalf of Advertisers on Google Advertiser Network which is Google Ads (gormerly AdWords) itself.

Ad Manager also gives access to AdSense buyers to our inventory. (dyg network doesn't use ad sense)

###  AdX or Ad Exchange (integrated into ad manager completely)

Ad Exchange is an online marketplace where buyers can purchase inventory from multiple participating sellers. Publishers can manage multiple buyers to get the highest yield at scale. See auction model [here](https://support.google.com/admanager/answer/152039).

 Provides access to our very own inventory to Authorized Buyers (formerly AdX Buyers) such as Google itself. It is an *auction* and also a complete *sales* channel.

Ad Manager allows access to Ad Exchange accounts directly from Ad Manager interface.

Both AdSense and Ad Exchange provide access to millions of buyers while Ad Exchange provides granular controls over direct sales effort. See comparison [here](https://support.google.com/admanager/answer/4599464?hl=en).

### inventory, ad unit, placement, key-values

<u>Inventory</u> is the items we're selling to advertisers, sellable inventory. Our sites and apps are all inventory. (basicly emty spaces on a website)

<u>Ad Unit</u> is a container to organize inventory, like folders and subfolders hierarchically organized under inventory. (building blocks of theese empty spaces aka inventory)

> A News Site sample:
> **Homepage > Americas > Top Stories > Arts > Film**
> from top level > to lower level

See Inventory Planning section of [Help Pages](https://support.google.com/admanager/answer/6026938?hl=en)

<u>Placement</u> is a group of ad units ogranized by a context used to reduce operational load.

<u>Key-Values</u> are extra information pairs to specificly match adunit's ad tag and line items & creatives, key-values are information sets hold *not personally identifiable* data. Key-Values form targeting by defining specific identifiers to page or directly to an ad tag.

### ad tag

A piece of code to be inserted into the source code of the page.

It consists of ad unit, placement, key-values, size etc..  and represents the space the ad will show up.

### order

Once sales team sells an inventory to an advertiser, an order needs to be set up in Ad Manager. Order represents tha campaign set up by publisher and advertiser. 

> **advertiser > order > line item > creative**
> acme inc. > summer campaign > mobile leaderboard 320x50 > some jpeg images

#### line item

Specifics of the order; total numbers of impressions, ad units, date, targeting , ...

##### creative

Actual display files of the advertisement campaign. Possible types; Image, HTML5, 3rd Party, DoubleClick Tag etc..

### an ad request lifecycle

- Request reaches Ad Manager
- Ad Manager filters eligible Line Items
- Checks Ad Exchange for highest paying add (if set)
- Select and serve ads

### header bidding

Communication of an ad server through some custom header bidding code (as in `Criteo`) implemented in publishers webpage or mobile app (as in `publisher.js`)

### exchange bidding

Lets Ad Manager ad server communicacte directly with thid-party ad exchanges in a server-to-server connection (reduces page load latency and complex publisher configuration)

### iab

A nonprofit research & development consortium to help media and advertising companies implementing global technical standarts related to digital media and advertising.

[https://www.iab.com](https://www.iab.com)

### better ads

The Coalition for Better Ads is a coalition to improve consumer experience with advertising. Coalition develops and implements consumer friendly ad contents by using [various research](https://www.betterads.org/research/).

### safeframe

An API enable cross-domain `iframe`. Provides controlled communication between advertiser content and publisher content. (publisher content have to protect itself from unwanted access while providing a communication channel between these two, with this communication channel advertiser may collect data for viewability puposes or expand `iframe` size to show detailed creatives to user on demand)

### reporting

Actual measured resulting numbers of campaign.

### remarketing

Showing ads to people who've visited a website or mobile app previously. (remarketing reconnects people left your site without buying anything)

### ads.txt

Declares a list of digital sellers to improve transperancy in programmatic advertising. (Authorized Digital Sellers is an initiative from IAB)

File keeps the list of advertisers authorized to sell our own inventory

## useful links

- [https://support.google.com/admanager](https://support.google.com/admanager) [ad manager support page]
- [https://developers.google.com/doubleclick-gpt/reference](https://developers.google.com/doubleclick-gpt/reference) [gpt developer reference]
- [https://publisheruniversity.withgoogle.com](https://publisheruniversity.withgoogle.com) [publisher university home]
- [https://www.iab.com/](https://www.iab.com/) [interactive advertising bureau official site]