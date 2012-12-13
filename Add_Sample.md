---
title: Adding New Samples

layout: basic
---
{% include common-defs.md %}

This page describes how to add a new Samples to the Community Catalog.

## Overview

Check our [Overview][add overview] of Samples and Repositories.

## Contributing to the Sample Code

Identify what repository you will want to contribute to, and its lead.

You are responsible for submitting a contribution agreement (if necessary), and
collaborating with the repository lead to secure appropriate technical and legal review.

Fork the appropriate repository and apply the changes needed.  Then submit a pull request.
Interact with the reviewers until the change is acceptable to all parties, at which point
it will be merged in.

See the notes on using your fork repositories
in the [Overview](Add_Overview.html).


## Updating the Catalog

You are responsible for updating the catalog, if necessary, whenever you update the sample.
This means two pull requests.

Fork the [Catalogs](http://github.com/blackberry/Catalogs) repository,
then modify the `All_Samples.json` file to reflect the new sample(s),
and submit a pull request.

### Editing the All_Samples.json file

GitHub supports inline file editing (\[[1]\], \[[2]\], \[[3]\]);
for simple changes, or very occasional contributors, you could edit
`All_Samples.json` directly that way.

[1]: <https://github.com/blog/143-inline-file-editing> "Inline File Editing"
[2]: <https://github.com/blog/844-forking-with-the-edit-button> "Forking with the Edit Button"
[3]: <https://github.com/blog/905-edit-like-an-ace> "Edit Like an Ace"

A more common flow is to fork the Catalogs repository and use a local editor.
See the notes on line separators in the [Overview](Add_Overview.html).


## Related Material

Also see:
* How to [Add a Repository to the Catalog][add repo]
* How to [Add a Component to the Catalog][add repo]


