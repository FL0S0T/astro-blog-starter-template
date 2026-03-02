---
title: "LLM-Agents im Praxistest: Was funktioniert und was nicht"
description: "Nach Monaten mit LLM-basierten Agents zeigt sich ein klares Bild: Die Technologie funktioniert — aber anders als erwartet."
pubDate: 2025-01-19
category: "applied-technologies"
tags: ["LLM", "Agents", "Praxis"]
tldr:
  - "LLM-Agents sind keine autonomen Mitarbeiter — sie sind strukturierte Werkzeuge"
  - "Die groessten Gewinne liegen in klar definierten, wiederholbaren Aufgaben"
  - "Autonomie ohne Constraints fuehrt zu unvorhersagbaren Ergebnissen"
  - "Die wichtigste Design-Entscheidung ist der Scope, nicht das Modell"
  - "Praxistauglichkeit erfordert Engineering, nicht Prompting"
readingTime: "7 min"
heroImage: "/images/hero-agents.jpg"
seoDescription: "Erfahrungen aus dem Praxiseinsatz von LLM-Agents: Was funktioniert, was nicht, und wo die echten Hebel liegen."
---

## Die Erwartung vs. die Realitaet

Die Demos versprechen autonome Assistenten. Du gibst eine Aufgabe, der Agent erledigt sie. Ende.

Die Realitaet ist nuancierter.

Nach Monaten intensiver Arbeit mit LLM-basierten Agents in unseren eigenen Systemen sehe ich ein klares Bild: Die Technologie ist leistungsfaehig. Aber die meisten Implementierungen scheitern nicht an der Technologie, sondern am Design.

Das Problem ist selten das Modell. Es ist fast immer der Scope.

## Was ein Agent eigentlich ist

Bevor wir ueber Praxis reden, muessen wir klaeren, was ein Agent ist. Nicht die Marketing-Definition. Die technische.

Ein LLM-Agent ist ein System, das:

1. Ein Ziel erhaelt
2. Selbststaendig Zwischenschritte plant
3. Tools nutzen kann (APIs, Datenbanken, Dateisysteme)
4. Ergebnisse evaluiert und bei Bedarf korrigiert

Der entscheidende Unterschied zu einem einfachen LLM-Call: Der Agent hat eine Schleife. Er plant, fuehrt aus, evaluiert, korrigiert. Das macht ihn maechtig — und unvorhersagbar.

## Was funktioniert

Nach vielen Iterationen haben sich drei Kategorien herauskristallisiert, in denen Agents zuverlaessig Wert liefern:

### 1. Strukturierte Analyse mit definierten Quellen

Agents, die Daten aus bekannten Quellen extrahieren, aggregieren und nach vordefinierten Kriterien bewerten. Beispiel: Wettbewerbsanalyse auf Basis von SEC-Filings, Pressemitteilungen und Produktseiten.

Warum das funktioniert: Die Quellen sind definiert. Die Kriterien sind definiert. Der Output ist strukturiert. Der Agent muss nicht kreativ sein — er muss gruendlich sein.

### 2. Code-Generierung mit klaren Constraints

Agents, die Code schreiben oder reviewen, sind erstaunlich effektiv — wenn der Kontext stimmt. Ein Agent, der einen klaren Architektur-Styleguide hat, ein definiertes Test-Framework und Zugang zur bestehenden Codebase, liefert brauchbare Ergebnisse.

Ich nutze Code-Agents taeglich. Sie schreiben nicht den Code, den ich schreiben wuerde. Aber sie schreiben Code, der funktioniert, der die Conventions einhalt und der mir Stunden spart.

Der Schluessel: Der Agent braucht Kontext. Nicht nur den Prompt, sondern die gesamte Umgebung — Architektur, Conventions, Tests, Dependencies.

### 3. Dokumentation und Wissensaufbereitung

Agents, die bestehende Dokumente zusammenfassen, strukturieren oder in andere Formate umwandeln. Meeting-Protokolle in Action Items. Technische Docs in Entscheidungszusammenfassungen. Kundenfeedback in strukturierte Analysen.

Das ist die Kategorie mit dem besten Aufwand-Ergebnis-Verhaeltnis. Geringe Implementierungskosten, hoher und sofort sichtbarer Nutzen.

## Was nicht funktioniert

Genauso klar ist das Bild bei den Fehlschlaegen:

### 1. Offene, explorative Aufgaben

"Finde eine Strategie fuer X" funktioniert nicht. Nicht weil der Agent dumm ist, sondern weil die Aufgabe keine klaren Erfolgskriterien hat. Der Agent erzeugt plausibel klingende Ergebnisse, die bei genauer Pruefung oberflaechlich oder generisch sind.

Die Faustformel: Je offener die Aufgabe, desto weniger brauchbar das Ergebnis.

### 2. Multi-Step-Prozesse mit hoher Fehlertoleranz-Anforderung

Wenn ein Agent fuenf Schritte nacheinander ausfuehren muss und in jedem Schritt eine 90-prozentige Genauigkeit hat, liegt die Gesamtgenauigkeit bei 59 Prozent. Bei zehn Schritten bei 35 Prozent.

Das ist Mathematik, nicht Pessimismus.

Fuer Aufgaben, bei denen Fehler teuer sind — Finanztransaktionen, Kundenkommunikation, regulatorische Prozesse — ist diese Fehlerrate inakzeptabel. Hier brauchst du entweder Human-in-the-Loop oder extrem enge Constraints pro Schritt.

### 3. Kontextintensive Entscheidungen

Entscheidungen, die tiefes organisatorisches Kontextwissen erfordern — politische Dynamiken, historische Absprachen, implizite Prioritaeten — ueberfordern jeden Agent. Nicht weil das Modell nicht intelligent genug waere, sondern weil dieser Kontext nicht in einem Prompt steckt.

## Die drei Design-Fehler

Die meisten gescheiterten Agent-Projekte, die ich gesehen habe, machen einen von drei Fehlern:

### Fehler 1: Scope zu weit

"Bau einen Agent, der unsere gesamte Kundenbetreuung uebernimmt." Das ist kein Agent-Projekt. Das ist eine Reorganisation mit Technologie-Anstrich.

Erfolgreiche Agents haben einen engen Scope. Nicht "Kundenbetreuung", sondern "Klassifizierung eingehender Support-Tickets nach Kategorie und Dringlichkeit".

### Fehler 2: Prompting statt Engineering

Ich sehe Teams, die Wochen damit verbringen, den perfekten Prompt zu schreiben. Das ist der falsche Ansatz.

Ein Agent ist ein System. Er braucht:

- **Tool-Integration:** Welche APIs, Datenbanken, Dateien kann er nutzen?
- **Guardrails:** Was darf er nicht tun?
- **Evaluation:** Wie misst du die Qualitaet?
- **Feedback-Loops:** Wie korrigierst du systematisch?

Prompting ist ein Bruchteil davon. Die eigentliche Arbeit ist Engineering.

### Fehler 3: Autonomie als Ziel

"Je autonomer, desto besser" ist ein Irrglaube. Autonomie ist kein Feature — sie ist ein Trade-off.

Mehr Autonomie bedeutet mehr Unvorhersagbarkeit. In manchen Kontexten ist das akzeptabel. In den meisten ist es das nicht.

Die kluge Frage ist nicht "Wie autonom kann der Agent sein?", sondern "Wo ist Human-in-the-Loop wertschoepfend und wo ist er Verschwendung?"

## Mein aktuelles Setup

Ich nutze aktuell vier Agent-Typen in unseren Systemen:

1. **Code-Agent:** Schreibt, reviewed und refactored Code basierend auf unserer Architektur und unseren Conventions. Laeuft taeglich.

2. **Research-Agent:** Aggregiert Informationen aus definierten Quellen zu strukturierten Briefings. Laeuft woechentlich.

3. **Content-Agent:** Wandelt Rohentwuerfe in verschiedene Formate um — Website, LinkedIn, Newsletter. Laeuft pro Artikel.

4. **Ops-Agent:** Ueberwacht Systeme, klassifiziert Alerts und generiert Zusammenfassungen. Laeuft kontinuierlich.

Alle vier haben klare Scopes, definierte Tools und menschliche Checkpoints. Keiner ist voll autonom. Und genau deshalb funktionieren sie.

## Die Kosten-Frage

Ein Aspekt, der in den meisten Agent-Diskussionen fehlt: Kosten.

LLM-API-Calls sind nicht gratis. Ein Agent, der fuer eine Aufgabe zehn API-Calls braucht, kostet zehnmal so viel wie ein einzelner Call. Bei Agents mit Schleifen koennen die Kosten schnell explodieren — besonders wenn der Agent in einer Sackgasse steckt und immer wieder neu ansetzt.

In meiner Erfahrung: Plant Kosten-Limits pro Agent-Lauf ein. Nicht nur als Budget-Massnahme, sondern als Design-Constraint. Ein Agent, der sein Kosten-Limit erreicht, hat wahrscheinlich ein Scope-Problem.

## Enterprise-Implikationen

Fuer grosse Organisationen sehe ich drei strategische Handlungsfelder:

**1. Investiert in Infrastruktur, nicht in Piloten.** Der Engpass bei Enterprise-Agents ist nicht das Modell — es sind die Daten-Pipelines, die Tool-Integrationen und die Governance-Frameworks. Baut die Infrastruktur, und die Use Cases werden klar.

**2. Standardisiert das Agent-Framework.** Wenn jedes Team sein eigenes Agent-Setup baut, entstehen Silos, Doppelarbeit und inkonsistente Qualitaet. Ein zentrales Framework mit klaren Standards fuer Tools, Guardrails und Evaluation spart langfristig enorm.

**3. Plant Human-in-the-Loop als Feature, nicht als Kompromiss.** Die besten Agent-Systeme nutzen menschliche Checkpoints strategisch — nicht als Notloesung, sondern als Qualitaetsmechanismus.

## Empfehlungen

- Agents als Engineering-Problem behandeln, nicht als Prompting-Problem
- Scope vor Modellwahl definieren — eng, klar, messbar
- Feedback-Loops einbauen, bevor du Autonomie erhoehst
- Kosten-Limits als Design-Constraint nutzen
- Human-in-the-Loop strategisch platzieren, nicht grundsaetzlich vermeiden
- Infrastruktur vor Use Cases bauen

Die Technologie funktioniert. Aber sie funktioniert anders, als die Demos suggerieren. Nicht als autonomer Mitarbeiter, sondern als strukturiertes Werkzeug in einem bewusst designten System.

Das ist weniger spektakulaer. Aber es liefert.
