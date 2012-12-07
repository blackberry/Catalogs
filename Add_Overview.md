---
title: Overview to Samples, Repositories and Catalogs

layout: basic
---
{% include common-defs.md %}

This page provides a general overview of Samples, Repositories and Catalogs

## WORK IN PROGRESS!

## Contacts

The current overall lead for Open Source is Eduardo Pelegri-Llopart.
Preferred way to reach him is at [@pelegri](http://twitter.com/pelegri).
We also maintain an
[Blog](http://openbbnews.wordpress.com) (better URL 'soon'),
and the [Forum](http://supportforums.blackberry.com/t5/General-Open-Source-Topics/bd-p/gost).

Each repository has a lead, which is (or rather should be) documented in the repository.

## Types of Contributions and Repositories

### RIM-led vs non-RIM-Repos

Most, but not all, repos in the [BlackBerry Organization](http://github.com/blackberry) are led
by RIM.

To contribute to a repo led by RIM, you need to be a RIM employee or
sign the
Contribution Agreement (see [list of signatories](http://blackberry.github.com/approvedSignatories.html)).

To contribute to a repo not-led by RIM
(like [OpenDataSpace-Cascades](https://github.com/blackberry/opendataspace-cascades)),
contact the owner of that repository.

### RIM and non-RIM Samples

Content of a non-RIM-led repo is responsibility of the lead for that repo.

A RIM-led repo can be organized as a collection of Samples, and, in that case, each sample may be
led by RIM or by an external contributor.

### Official and Community Samples

Official Samples are maintained by RIM over all official releases of the platform.

Community Samples are maintained by the community (RIM and non-RIM members) on a best-effort
manner.

The repositories containing official samples are:
* NDK-Samples
* Cascades-Samples
* Samples-for-AIR
* Samples-for-Java
* WebWorks-Samples
* BB10-WebWorks-Samples
* WebGL-Samples (validate?)

The repositories containing community samples are:
* Core-Native-Community-Samples
* Cascades-Community-Samples
* BB10-WebWorks-Community-Samples
* WebWorks-Community-Samples
* WebWorks-Community-APIs

__TODO__
_The above lists should come from the Repo catalog, derived from annotations in the JSON file_


## How To Contribute

### New Sample from RIM (to a RIM repo)

Point your internal browser to the internal [OpenBerry site](go/openberry) for review and approval.

### Updates to an existing sample

Contact the RIM lead for the repo.  
You will need to sign the contribution agreement.   

Fork the repo, fix the bug/add the changes, send a pull request, let's talk.   

### New Sample not from RIM (to a RIM repo)

Contact the RIM lead for the repo.  
You will need to sign the contribution agreement.   

Fork the repo, add the new features, send a pull request, let's talk.   

Your new sample will need to conform to the technical requirements and scope of the repository.  
We will perform some basic check of the code but you remain reponsible for the code.  

We welcome your contributions but we cannot guarantee we will accept all submissions.  
Acceptance into a community repo is much likely than to an official repo.

## Updating the Catalog

The catalogs are generated automatically from JSON files, which are kept in the
[Catalogs](http://github.com/blackberry/Catalogs) repository.

Each catalog uses a different format, which is processed by a jQuery-based script.
More details are available in the description for each catalog (see below).

## Related Material

Also see:
* How to [Add a Sample to the Catalog][add sample]
* How to [Add a Repository to the Catalog][add repo]
* How to [Add a Component to the Catalog][add repo]


