---
weight: 100
date: "2023-05-03T22:37:22+01:00"
draft: false
author: "Colin Wilson"
title: "Startgids"
icon: "rocket_launch"
toc: true
description:
  "Een handige handleiding voor het creëren van nieuwe inhoud in Lotus Docs."
publishdate: "2023-05-03T22:37:22+01:00"
tags: ["Beginners"]
---

## Vereisten

- **git**
- **Go ≥ v1.19**
- **Hugo ≥ v0.100.0** (Extended versie)

## Installeer Hugo

Installeer de [Hugo CLI](https://github.com/gohugoio/hugo/releases/latest) door
de specifieke instructies voor jouw besturingssysteem hieronder te volgen:

{{< tabs tabTotal="4">}}
{{% tab tabName="Linux" %}}

Je Linux-distro’s pakketbeheerder kan Hugo bevatten. Als dit het geval is,
installeer je het rechtstreeks via je pakketbeheerder. Voor Ubuntu gebruik je
bijvoorbeeld de volgende opdracht. Deze zal de uitgebreide versie van Hugo
installeren:

```shell
sudo apt install hugo
```

{{% /tab %}}
{{% tab tabName="Homebrew (macOS)" %}}

Als je de pakketbeheerder [Homebrew](https://brew.sh/) gebruikt, voer dan de
volgende opdracht uit in je terminal om Hugo te installeren:

```shell
brew install hugo
```

{{% /tab %}}
{{% tab tabName="Windows (Chocolatey)" %}}

Als je de pakketbeheerder [Chocolatey](https://chocolatey.org/) gebruikt, voer
dan de volgende opdracht uit in je terminal om Hugo te installeren:

```shell
choco install hugo --confirm
```

{{% /tab %}}
{{% tab tabName="Windows (Scoop)" %}}

Als je de pakketbeheerder [Scoop](https://scoop.sh/) gebruikt, voer dan de
volgende opdracht uit in je terminal om Hugo te installeren:

```shell
scoop install hugo
```

{{% /tab %}}
{{< /tabs >}}

### Handmatige Installatie

Het Hugo GitHub-repository bevat vooraf gebouwde versies van de Hugo
command-line tool voor verschillende besturingssystemen. Deze kunnen worden
gevonden op de
[Releases-pagina](https://github.com/gohugoio/hugo/releases/latest).

Voor meer instructies over het installeren van deze releases, raadpleeg de
[Hugo documentatie](https://gohugo.io/getting-started/installing/).

## Maak een Nieuwe Lotus Docs Site

Met Hugo geïnstalleerd, kun je een nieuw Hugo-project aanmaken met de `hugo new`
opdracht:

```shell
hugo new site my-docs-site && cd my-docs-site
```

Initialiseer nu je project als een Hugo Module met de `hugo mod init` opdracht:

```shell
hugo mod init my-docs-site
```

{{% alert context="info" text="**Opmerking**: Als je site al een git-repository heeft, kun je je site initialiseren met het pad naar je git-repository, bijvoorbeeld `hugo mod init github.com/<user>/<my-docs-site>/`." /%}}

Nu kun je de methode kiezen om het Lotus Docs thema aan je nieuwe site toe te
voegen uit de onderstaande opties:

{{< tabs tabTotal="3">}}
{{% tab tabName="Toevoegen als Hugo Module" %}}

Bewerk het `hugo.toml` configuratiebestand om het
[Lotus Docs thema](https://github.com/colinwilson/lotusdocs) en de
[Hugo Bootstrap module](https://github.com/gohugoio/hugo-mod-bootstrap-scss)
(regels `5 tot 11` hieronder) toe te voegen:

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "github.com/colinwilson/lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

{{% alert context="info" text="**Opmerking**: Hugo ≥ v0.110.0 heeft de naam van het standaard configuratiebestand gewijzigd naar `hugo.toml`. Als je een eerdere versie van Hugo gebruikt, overweeg dan om je `config.toml` bestand te hernoemen naar `hugo.toml`." /%}}

{{% /tab %}}
{{% tab tabName="Toevoegen als Git Submodule" %}}

Initialiseer Git en kloon het Lotus Docs thema repository als een submodule:

```shell
git init
git submodule add https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Werk je bestaande `hugo.toml` configuratiebestand bij met de onderstaande
configuratie:

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

{{% alert context="info" text="**Opmerking**: Hugo ≥ v0.110.0 heeft de naam van het standaard configuratiebestand gewijzigd naar `hugo.toml`. Als je een eerdere versie van Hugo gebruikt, overweeg dan om je `config.toml` bestand te hernoemen naar `hugo.toml`." /%}}

{{% /tab %}}
{{% tab tabName="Kloon Thema Bestanden" %}}

Als je het Lotus Docs thema zelf wilt aanpassen en onderhouden, kun je het thema
in je project’s `themes` subdirectory klonen.

Voer de onderstaande opdracht uit vanuit de rootdirectory van je project om het
Lotus Docs thema in je `themes` subdirectory te klonen:

```shell
git clone https://github.com/colinwilson/lotusdocs themes/lotusdocs
```

Bewerk het `hugo.toml` configuratiebestand om het Lotus Docs thema en de Hugo
Bootstrap module (regels `5 tot 11` hieronder) toe te voegen:

```toml {linenos=table,hl_lines=["5-11"]}
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[module]
    [[module.imports]]
        path = "lotusdocs"
        disable = false
    [[module.imports]]
        path = "github.com/gohugoio/hugo-mod-bootstrap-scss/v5"
        disable = false
```

{{< alert context="info" text="**Opmerking**: Hugo ≥ v0.110.0 heeft de naam van het standaard configuratiebestand gewijzigd naar `hugo.toml`. Als je een eerdere versie van Hugo gebruikt, overweeg dan om je `config.toml` bestand te hernoemen naar `hugo.toml`." />}}

{{% /tab %}}
{{< /tabs >}}

## Maak je eerste post

Navigeer naar de root van je Hugo-project en gebruik de `hugo new` opdracht om
een bestand te maken in de `content/docs` directory:

```shell
hugo new docs/example-page.md
```

Dit zal een markdownbestand genaamd `example-page.md` creëren met de volgende
standaard front matter:

```toml
+++
title = "Example Page"
description = ""
icon = "article"
date = "2023-05-22T00:27:57+01:00"
lastmod = "2023-05-22T00:27:57+01:00"
draft = false
toc = true
weight = 999
+++
```

Pas de opties aan naar wens.

De onderstaande code toont de front matter code die wordt gebruikt om deze
pagina te maken, samen met een gedeelte van de markdown uit de body:

{{< prism lang="md" >}}
+++
weight = 100
date = "2023-05-03T22:37:22+01:00"
draft = true
author = "Colin Wilson"
title = "Quickstart"
icon = "rocket_launch"
toc = true
description = "A quickstart guide to creating new content in Lotus Docs"
publishdate = "2023-05-03T22:37:22+01:00"
tags = ["Beginners"]
+++

## Maak je eerste post

Navigeer naar de root van je Hugo-project en gebruik de `hugo new` opdracht om
een bestand te maken in de `content/docs` directory:

```shell
hugo new docs/examplepage.md
```

...
{{< /prism >}}

## Bekijk je Site

Nu je wat voorbeeldinhoud hebt gemaakt, kun je je nieuwe Lotus Docs site
bekijken door de `hugo server` opdracht uit te voeren:

```shell
hugo server -D
```

Navigeer naar `localhost:1313/docs` en je zou een kaartlink naar de **Example
Page** moeten zien die je eerder hebt gemaakt:

![Nieuwe Lotus Docs Site - Voorbeeldinhoud](https://res.cloudinary.com/lotuslabs/image/upload/v1690992310/Lotus%20Docs/images/lotus_docs_new_site_and_content_module_setup_oiuyex.png)

## Inhoud Ordenen

Lotus Docs gebruikt een eenvoudige weegmethode om inhoud te ordenen en menu's te
maken.

De front matter `weight` variabele wordt gebruikt om alle inhoud te ordenen en
de menu-structuur automatisch te genereren (inclusief het zijbalkmenu en
paginanavigatieknoppen). Lagere gewichtwaarden krijgen de hoogste prioriteit.
Dus inhoud met lagere gewichten komt eerst en wordt dus bovenaan het menu
geplaatst.

## Auto-gegenereerd Menu

Zoals eerder vermeld, genereert Lotus Docs automatisch menu's en navigatielinks
met behulp van de
[front matter](https://gohugo.io/content-management/front-matter/#predefined)
gewichtvariabele. Bijvoorbeeld, navigeer naar de `content/docs` directory en
maak twee inhoudsbestanden aan, `doc-one.md` en `doc-two.md`, en bewerk de
gewichtwaarden naar `100` en `200` respectievelijk:

{{< alert text="Het is een goed idee om het gewicht van je berichten te verhogen met een factor van <code>100</code>. Dit zorgt voor voldoende ruimte om nieuwe berichten tussen bestaande items in te voegen, indien nodig." />}}

Je directorystructuur zou er nu als volgt uit moeten zien:

```treeview
content/
└── docs/
    ├── doc-one.md
    └── doc-two.md
```

Links naar beide berichten zijn nu zichtbaar in het zijbalkmenu, waarbij
`doc-one.md` voor `doc-two.md` wordt geplaatst:

![Voorbeeld zijbalkmenu-items](https://res.cloudinary.com/lotuslabs/image/upload/v1684719173/Lotus%20Docs/images/sidebar_menu_example_01-modified_qkb2si.png)

{{< alert context="info" text="De optie om een vooraf gedefinieerde menustructuur handmatig in te stellen in <code>hugo.toml</code> in plaats van een automatisch gegenereerde is een onderdeel van de Lotus Docs roadmap." />}}

## Tweede Niveaus van Menu items

Menu items op het tweede niveau kunnen worden gegenereerd door eerst een
**'ouder'** directory te maken die een `_index.md` bestand bevat, bijvoorbeeld:

```shell
hugo new docs/parent-directory/_index.md
```

De bovenstaande opdracht maakt een `_index.md` bestand aan in een directory
genaamd `parent-directory` onder `content/docs`:

```treeview
content/
└── docs/
    ├── parent-directory/
    │   └── _index.md
    ├── doc-one.md
    ├── doc-two.md
    └── _index.md
```

Je kunt nu tweede-niveau-items aanmaken binnen de `parent-directory` zoals
gebruikelijk. Voer de `hugo new` opdracht opnieuw uit om een bericht aan te
maken binnen de nieuw aangemaakte `parent-directory`:

```shell
hugo new docs/parent-directory/doc-three.md
```

Je directory/bestandsstructuur zou er nu als volgt uit moeten zien:

```treeview
content/
└── docs/
    ├── parent-directory/
    │   ├── _index.md
    │   └── doc-three.md
    ├── doc-one.md
    ├── doc-two.md
    └── _index.md
```

Dit wordt weerspiegeld in het zijbalkmenu, waarbij `parent-directory`
functioneert als een dropdown-menu met een link naar het **Doc Three** bericht:

![Voorbeeld zijbalkoudermenu](https://res.cloudinary.com/lotuslabs/image/upload/v1684802032/Lotus%20Docs/images/sidebar_menu_example_02_jsecye.png)
