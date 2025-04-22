---
weight: 220
title: "Mermaid"
description: "Voorbeelden van verschillende soorten Mermaid-diagrammen."
icon: "function"
date: "2023-09-08T05:12:51+01:00"
lastmod: "2023-09-08T05:12:51+01:00"
draft: false
toc: true
---

## Stroomdiagram

```mermaid
flowchart LR

A[Hard] -->|Tekst| B(Rond)
B --> C{Beslissing}
C -->|Een| D[Resultaat 1]
C -->|Twee| E[Resultaat 2]
```

## Sequentiediagram

```mermaid
sequenceDiagram
    Alice->>John: Hallo John, hoe gaat het?
    loop Gezondheidscontrole
        John->>John: Strijd tegen hypochondrie
    end
    Note right of John: Rationele gedachten!
    John-->>Alice: Geweldig!
    John->>Bob: En met jou?
    Bob-->>John: Heel goed!
```

## Gantt-diagram

```mermaid
gantt
  title Gantt Diagram
  dateFormat  YYYY-MM-DD

  section Sectie
    Voltooid  :done,    des1, 2014-01-06, 2014-01-08
    Actief    :active,  des2, 2014-01-07, 3d
    Parallel 1:         des3, after des1, 1d
    Parallel 2:         des4, after des1, 1d
    Parallel 3:         des5, after des3, 1d
    Parallel 4:         des6, after des4, 1d
```

## Klassediegram

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<interface>> Class01
Class09 --> C2 : Waar ben ik?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : grootte()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  >>service>>
  int id
  grootte()
}
```

## Toestanddiagram

```mermaid
stateDiagram-v2
[*] --> Stil
Stil --> [*]
Stil --> Beweging
Beweging --> Stil
Beweging --> Crash
Crash --> [*]
```

## Taartdiagram

```mermaid
pie
"Honden" : 386
"Katten" : 85.9
"Ratjes" : 15
```

## Git-graph

```mermaid
    gitGraph
      commit
      commit
      branch ontwikkel
      checkout ontwikkel
      commit
      commit
      checkout main
      merge ontwikkel
      commit
      commit
```

## Staafdiagram (met gebruik van Gantt-diagram)

```mermaid
gantt
  title Git Issues - dagen sinds laatste update
  dateFormat  x
  axisFormat  %s

  section Issue19062
  71   : 0, 71
  section Issue19401
  36   : 0, 36
  section Issue193
  34   : 0, 34
  section Issue7441
  9    : 0, 9
  section Issue1300
  5    : 0, 5
```

## Gebruikersreisdiagram

```mermaid
journey
  title Mijn werkdag
  section Naar werk
    Thee maken: 5: William
    Naar het werk gaan: 3: William
    Werken: 1: Kate, William
  section Naar huis
    Naar huis gaan: 5: William
    Op de bank zitten: 3: William
```

## C4-diagram

```mermaid
C4Context
  title Systeem Contextdiagram voor Internet Bankieren Systeem

  Person(customerA, "Bankklant A", "Een klant van de bank, met persoonlijke bankrekeningen.")
  Person(customerB, "Bankklant B")
  Person_Ext(customerC, "Bankklant C")
  System(SystemAA, "Internet Bankieren Systeem", "Laat klanten informatie over hun bankrekeningen bekijken en betalingen doen.")

  Person(customerD, "Bankklant D", "Een klant van de bank, met persoonlijke bankrekeningen.")

  Enterprise_Boundary(b1, "BankGrens") {

    SystemDb_Ext(SystemE, "Mainframe Bankiersysteem", "Slaat alle kernbankinformatie over klanten, rekeningen, transacties, enz. op.")

    System_Boundary(b2, "BankGrens2") {
      System(SystemA, "Bankiersysteem A")
      System(SystemB, "Bankiersysteem B", "Een systeem van de bank, met persoonlijke bankrekeningen.")
    }

    System_Ext(SystemC, "E-mail systeem", "Het interne Microsoft Exchange e-mailsysteem.")
    SystemDb(SystemD, "Bankiersysteem D Database", "Een systeem van de bank, met persoonlijke bankrekeningen.")

    Boundary(b3, "BankGrens3", "grens") {
      SystemQueue(SystemF, "Bankiersysteem F Wachtrij", "Een systeem van de bank, met persoonlijke bankrekeningen.")
      SystemQueue_Ext(SystemG, "Bankiersysteem G Wachtrij", "Een systeem van de bank, met persoonlijke bankrekeningen.")
    }
  }

  BiRel(customerA, SystemAA, "Gebruikt")
  BiRel(SystemAA, SystemE, "Gebruikt")
  Rel(SystemAA, SystemC, "Stuurt e-mails", "SMTP")
  Rel(SystemC, customerA, "Stuurt e-mails naar")

```
