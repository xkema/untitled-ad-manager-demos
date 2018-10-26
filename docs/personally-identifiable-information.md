# Personally Identifiable Information (PII)

<u>What Google considers PII</u>:

> Google interprets PII as information that could be used on its own to directly identify, contact, or precisely locate an individual. This **includes**:
>
> - email addresses
> - mailing addresses
> - phone numbers
> - precise locations (such as GPS coordinates - but see the note below)
> - full names or usernames

<u>Google interprets PII to **exclude,** for example:</u>

> - pseudonymous cookie IDs
> - pseudonymous advertising IDs
> - IP addresses
> - other pseudonymous end user identifiers
>
> [source](https://support.google.com/admanager/answer/7686480?hl=en)

**Note that data excluded from Google's interpretation of PII may still be considered personal data under the GDPR.**

See:

> The data subjects are identifiable if they can be directly or indirectly identified, especially by reference to an identifier such as a name, an identification number, location data, an online identifier or one of several special characteristics, which expresses the physical, physiological, genetic, mental, commercial, cultural or social identity of these natural persons. In practice, these also include all data which are or can be assigned to a person in any kind of way. For example, the telephone, credit card or personnel number of a person, account data, number plate, appearance, customer number or address are all personal data. [source](https://gdpr-info.eu/issues/personal-data/)

- account termination is possible if ad requests reveal PII
- cookies also can't hold PII
- google users are in control on disabling personalization https://www.google.com/settings/ads

## Best practices to avoid sending PII

- use POST method instead of GET
  - Google services send site URL to it's servers
- do not contain PII in URL schemes
  - user, settings, notifications pages of websites might contain PII such as username, email, etc.. as in `users/user@example.com?name=jane+doe`. Replace these PII with universally unique site-specific identifiers (UUIDs) as in `user/12345678`
- not share email links contain PII
- do not use targeting data including PII

> Most commonly, Google Marketing Platform advertising products and Google Ad Manager sends a cookie to the browser when a user visits a page that shows Google Marketing Platform advertising products and Google Ad Manager ads. [source](https://support.google.com/admanager/answer/2839090?hl=en&ref_topic=7395141)

> All publishers must clearly display a privacy policy notifying visitors about the site's use of cookies. In addition, all publishers must comply with applicable laws regarding the collection of information from site visitors. [source