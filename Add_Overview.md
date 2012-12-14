---
title: Overview to Samples, Repositories and Catalogs
jsfile: Simple.js

layout: basic
---
{% include common-defs.md %}

This page provides a general overview of Samples, Repositories and Catalogs

## Contacts

The current overall lead for Open Source is Eduardo Pelegri-Llopart.
Preferred way to reach him is at [@pelegri](http://twitter.com/pelegri).
Also see our
[Open Source Blog](http://openbbnews.wordpress.com) (better URL 'soon'),
and our [Forum](http://supportforums.blackberry.com/t5/General-Open-Source-Topics/bd-p/gost).

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

Some repositories are organized as a collection of Samples.
Most samples in RIM-led repositories are led by RIM,
but some are led by external contributors.

### Official and Community Samples

**Official Samples** are maintained by RIM over all official releases of the platform.

<div style="margin-left:10px; margin-top:10px;" class="collapsable" clabel="Show Repos" elabel="Repos">
</div>
<div style="margin-top: 2px; margin-left:20px;">
<ul>
<li>NDK-Samples</li>
<li>Cascades-Samples</li>
<li>Samples-for-AIR</li>
<li>Samples-for-Java</li>
<li>WebWorks-Samples</li>
<li>BB10-WebWorks-Samples</li>
<li>WebGL-Samples (validate?)</li>
</ul>
</div>

**Community Samples** are maintained by the community (RIM and non-RIM members) on a best-effort
manner.

<div style="margin-left:10px; margin-top:10px;" class="collapsable" clabel="Show Repos" elabel="Repos">
</div>
<div style="margin-top: 2px; margin-left:20px;">
<ul>
<li>Core-Native-Community-Samples</li>
<li>Cascades-Community-Samples</li>
<li>BB10-WebWorks-Community-Samples</li>
<li>WebWorks-Community-Samples</li>
<li>WebWorks-Community-APIs</li>
</ul>
</div>

## How To Contribute

### New Sample from RIM (to a RIM repo)

Point your internal browser to the internal [OpenBerry site](http://go/openberry) for review and approval.

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

### Contribute through your Fork

Do not contribute directly to the repository, even if you have pull permissions to it;
you should instead contribute through your own fork.  We have many contributors and the
pull request history is extremely valuable in tracking code into our repositories.

Verify your pull request as you submit it.  And have a second set of eyes look into your
submission if in any doubt, as backing up from a public repository can be problematic.


### On line separators

Beware of changing the line separator used by the files you are modifying,
specially on a Windows system.

Windows editors that claim to support preserving separators include
[emacs](http://www.gnu.org/software/emacs/),
[vim](http://www.vim.org/download.php) and
[WordPad](http://en.wikipedia.org/wiki/WordPad),
but [Notepad][4] does not.

[4]: <http://en.wikipedia.org/wiki/Notepad_(software)> "Notepad software"

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


