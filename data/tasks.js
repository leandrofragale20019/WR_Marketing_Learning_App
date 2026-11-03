// Aufgaben zu den beiden Themen. Alle Inhalte stammen aus den Zusammenfassungen.
// karten:      { f: Vorderseite, b: Rückseite (Markdown) }
// quiz:        { q: Frage, o: Antworten (erste = richtig), e: Erklärung }
// zuordnen:    { title, buckets: [...], items: [[Text, Index der richtigen Gruppe], ...] }
// reihenfolge: { title, items: [... in richtiger Reihenfolge] }
window.TASKS = {};

/* ================================================================== */
/*  THEMA 1 – MARKETING GRUNDBEGRIFFE                                  */
/* ================================================================== */
window.TASKS.t1 = {
  karten: [
    { f: 'Was ist **Marketing**?', b: '**Marketing** = alle Bemühungen/Massnahmen einer Unternehmung, um möglichst viele Produkte/Dienstleistungen zu verkaufen.\n- Kommt vom englischen *«to market»* = verkaufen, vermarkten.\n- Marketing ist ein wichtiger **Geschäftsprozess**: Das Unternehmen richtet seine Tätigkeit auf den **Markt** aus.' },
    { f: 'Was ist ein **Markt**? Wer sind **Anbieter** und **Nachfrager**?', b: '**Markt** = Ort, an dem sich Marktteilnehmer treffen, um Geschäfte zu machen.\n- **Anbieter** = Unternehmen, die Güter und Dienstleistungen verkaufen wollen.\n- **Nachfrager** = Marktteilnehmer, die kaufen wollen (Anspruchsgruppe «Kundschaft»).' },
    { f: 'Welche **drei Aufgaben** haben die Marketing-Aktivitäten?', b: '1. Bedürfnisse des Marktes herausfinden\n2. sie in Produkte/Dienstleistungen umwandeln\n3. diese auf dem Markt bekannt machen und verkaufen' },
    { f: 'Wo im **Unternehmungskonzept** werden die Markt- und Produktziele festgelegt?', b: 'Das **Unternehmungskonzept** formuliert die Unternehmensstrategie aus (Ziele, Mittel, Verfahren) in drei Bereichen: **Leistung, Finanzen, Soziales**.\n\nIm **Bereich Leistung** werden auf der **Zielebene** die **Markt- und Produktziele** festgelegt – je drei.' },
    { f: 'Nenne die drei **Marktziele** mit ihrer Leitfrage.', b: '1. **Bedürfnisse** – Welche Bedürfnisse werden befriedigt?\n2. **Märkte** – Welche Kundengruppen (Zielgruppen) werden angesprochen? Welche geografischen Märkte werden bearbeitet?\n3. **Marktstellung** – Welche Marktstellung wird angestrebt?' },
    { f: 'Nenne die drei **Produktziele** mit ihrer Leitfrage.', b: '1. **Produkte und Dienstleistungen** – Welche Produkte/Dienstleistungen (Absatzprogramm), in welcher Qualität und mit welchen Eigenschaften?\n2. **Sortiment** – Welche Auswahl an Produkten/Dienstleistungen?\n3. **Umsatz** – Wie viel mengenmässiger Umsatz wird angestrebt?' },
    { f: 'Was ist das **Markt-Produkt-Konzept**?', b: 'Markt- und Produktziele müssen **aufeinander abgestimmt** sein. Jedes Produkt ist für einen bestimmten Markt (Marktsegment) gemacht und muss dazu passen – und umgekehrt. Zusammen ergeben sie das **Markt-Produkt-Konzept**.' },
    { f: 'Warum wird **zuerst der Markt analysiert**, und was ist der **Zweck der Marktanalyse**?', b: 'Produkte können nicht von heute auf morgen erfunden, hergestellt und verkauft werden. Darum muss ein Unternehmen den **Wandel der Bedürfnisse möglichst früh erkennen**.\n\n**Zweck der Marktanalyse:** Die Unternehmensleitung will **verlässliche Informationen** erhalten, um das anzubieten, was den **Bedürfnissen der Kundschaft** entspricht.' },
    { f: 'Ziele der Marktanalyse – Informationen beschaffen über …?', b: '- die **Bedürfnisse und Wünsche** der Kundschaft (was, wie viel, zu welchem Preis?)\n- die **Grösse des Marktes** (Marktpotenzial, Marktvolumen) und seine Entwicklung\n- die **Konkurrenz** (Anbieter, Marktanteile, Preise, Stärken/Schwächen)\n- **Trends** und Veränderungen (z. B. Mode, Technik, Umweltsphären)\n- mögliche **Absatzwege** und Preise' },
    { f: 'Was ist **Primärmarktforschung**? (Name, Bedeutung, Instrumente, Vor-/Nachteil)', b: '- Auch genannt: **Field-Research, Feldforschung**\n- **Neue Daten werden selbst erhoben** (direkt beim Markt / bei der Kundschaft)\n- Instrumente: **Befragung** (schriftlich, Face-to-Face, telefonisch, online) · **Beobachtung** · **Experiment/Test** (Feldexperiment, Laborexperiment)\n- Vorteil: genau auf die eigene Frage zugeschnitten, aktuell\n- Nachteil: teuer, zeitaufwendig' },
    { f: 'Was ist **Sekundärmarktforschung**? (Name, Bedeutung, Instrumente, Vor-/Nachteil)', b: '- Auch genannt: **Desk-Research**, «Schreibtischforschung»\n- **Bereits vorhandene Daten werden ausgewertet**\n- Instrumente: **Analyse interner Datenquellen** (z. B. eigene Verkaufszahlen, Kundendatei, Reklamationen) · **Analyse externer Datenquellen** (z. B. Statistiken BFS, Branchenberichte, Internet, Zeitungen)\n- Vorteil: günstig, schnell\n- Nachteil: Daten evtl. veraltet oder nicht genau passend' },
    { f: 'Unterschied **Markterkundung** vs. **Marktforschung**?', b: '**Markterkundung:** unsystematisch, gelegentlich, eher zufällig · meist das Unternehmen selbst · z. B. Gespräche mit Kunden, Messebesuch, Konkurrenz-Läden anschauen, Rückmeldungen vom Verkaufspersonal · günstig · Aussagekraft eher gering / subjektiv\n\n**Marktforschung:** systematisch, wissenschaftlich, geplant · oft externe Marktforschungsinstitute · z. B. repräsentative Umfrage, Testmarkt, statistische Auswertung · teuer · Aussagekraft hoch, verlässlich' },
    { f: 'Was sind **Bedürfnisse**?', b: '**Bedürfnisse** = unerfüllte Wünsche, Sehnsüchte und Ansprüche der Menschen.\nUnternehmen wollen Bedürfnisse **entdecken oder erzeugen**, um mit passenden Produkten deren Befriedigung zu versprechen.' },
    { f: 'Was ist **Marktsegmentierung**? Wann spricht man von einer **Zielgruppe**?', b: '**Marktsegmentierung** = Der **Gesamtmarkt** wird in **Personengruppen (Kundengruppen) mit gleichen Bedürfnissen** eingeteilt.\nWird für ein Marktsegment ein spezifisches Produkt angeboten, werden diese Personen zur **Zielgruppe**.' },
    { f: 'Nenne die **Vorteile der Marktsegmentierung**.', b: '- **zielgruppengerichtete Produktentwicklung** (Produkt passt genau zu den Bedürfnissen)\n- **zielgruppengerichtete Kommunikation/Werbung** (weniger Streuverluste, Kosten werden gespart)\n- bessere Kundenbindung, Abgrenzung von der Konkurrenz, evtl. höhere Preise durchsetzbar' },
    { f: 'Welche drei **Kriteriengruppen der Marktsegmentierung** gibt es? (je Beispiele)', b: '- **Geografisch:** International, National, Regional, Gebiete nach PLZ, Siedlungsart (Stadt/Land), Ortsgrösse, Sprachgebiet\n- **Demografisch:** Altersklasse, Geschlecht, Haushaltsgrösse, Einkommensklasse, Bildungsstand, Beruf / Stellung, Religion, Nationalität\n- **Psychografisch / Kundenverhalten:** Lebensstil, Werthaltung, Risikobereitschaft, Kaufmotive' },
    { f: 'Wovon hängt ab, **wie viele Segmente** ein Unternehmen bedient?', b: '- der **Attraktivität** des Segments (erwarteter Umsatz, Wachstumspotenzial),\n- der eigenen **Marktstellung**,\n- wie gut das **Produkt gestaltet** werden kann.' },
    { f: 'Was sind **Teilmärkte**? (mit Beispiel Fahrräder)', b: '**Teilmärkte** = **Produktgruppen**, die aus einem Produkt entstanden sind und **je ein anderes Bedürfnis** befriedigen. Innerhalb eines Teilmarktes gibt es evtl. verschiedene Varianten.\n- **Sportfahrräder** ohne Ausrüstung: MTB, Cross, Rennfahrräder, Junior, Freestyle\n- **Alltags-/Freizeitfahrräder** mit Ausrüstung (City): Citybikes, Junior, Specials (Tandem, Falträder)\n- **Elektro-Fahrräder**' },
    { f: 'Unterschied **Marktsegmentierung** vs. **Teilmärkte**?', b: '- **Marktsegmentierung** geht von der **Kundenseite** aus → Einteilung der **Personen** nach Merkmalen.\n- **Teilmärkte** gehen von der **Produktseite** aus → Einteilung der **Produkte** nach Bedürfnis/Verwendung.' },
    { f: 'Wie misst man die **Grösse eines Marktes**?', b: 'Die Grösse eines Marktes hängt von der **Anzahl Nachfrager** ab. Man misst entweder die **abgesetzte Menge** (Stückzahl) oder den **Umsatz** (Verkaufswert in CHF). → **Umsatzzahlen in CHF werden bevorzugt.**' },
    { f: 'Was ist das **Marktpotenzial**?', b: '**Grösstmögliche, geschätzte** Absatzmenge bzw. denkbar grösstmöglicher Umsatz einer Branche/Produktgruppe/eines Produkts.' },
    { f: 'Was ist das **Marktvolumen**?', b: '**Tatsächlich erreichte** Absatzmenge bzw. tatsächlich erzielter Umsatz aller Anbieter (= 100 %). Maximal so gross wie das Marktpotenzial.' },
    { f: 'Was ist der **Marktanteil**? Formel?', b: '**Anteil eines Unternehmens am Marktvolumen in %** → Vergleich mit Konkurrenz\n\n`Marktanteil (%) = Umsatz des Unternehmens / Marktvolumen × 100`' },
    { f: 'Was ist der **Sättigungsgrad**? Formel und Faustregel?', b: 'Wie viel % das Marktvolumen vom Marktpotenzial beträgt.\n\n`Sättigungsgrad (%) = Marktvolumen / Marktpotenzial × 100`\n- **über 90 %** → **gesättigter Markt** (Verdrängungsmarkt)\n- **unter 90 %** → **Wachstumsmarkt**' },
    { f: 'Wie berechnet man den **Umsatz eines Unternehmens** aus Marktvolumen und Marktanteil?', b: '`Umsatz Unternehmen = Marktvolumen × Marktanteil (%) / 100`' },
    { f: 'Grafik (Abb. 4): Was bedeuten **äusserer Kreis**, **innerer Kreis** und **schwarzes Kuchenstück**?', b: '- **Äusserer, grosser Kreis** = **Marktpotenzial**\n- **Innerer Kreis** = **Marktvolumen**\n- **Schwarzes Kuchenstück** im inneren Kreis = **Marktanteil** eines Unternehmens' },
    { f: 'Merkmale eines **gesättigten Markts mit Nischenanbieter**?', b: '(typisch für die meisten Märkte)\n- Geringe Wachstumschancen: Wachstum nur **auf Kosten der Konkurrenz** → **Verdrängungswettbewerb**\n- Marktanteile gewinnt man über **Zusatznutzen, Sonderkonditionen oder Preiskampf**\n- Kleine **Nischenanbieter** überleben, wenn sie spezielle Bedürfnisse abdecken und eine hohe Kundenbindung haben' },
    { f: 'Merkmale eines **Wachstumsmarkts mit führendem Anbieter**?', b: '(eher die Ausnahme)\n- Grosse Wachstumschancen: **alle Anbieter** können mehr Umsatz machen, Marktpotenzial noch lange nicht erreicht\n- Führende Anbieter haben grosse Marktanteile und können **Preisführer** sein und Preise durchsetzen' },
    { f: 'Was ist der **Zweck des BCG-Portfolios**?', b: 'Von der **Boston Consulting Group** entwickelte Methode zur **Beurteilung der Marktstellung von Produkten/Dienstleistungen**. Daraus werden Empfehlungen (**Normstrategien**) abgeleitet. Ziel: ein **ausgewogenes Produktsortiment**.' },
    { f: 'BCG: Was zeigen die **Achsen**? Was ist der **relative Marktanteil**?', b: '- **y-Achse:** **Marktwachstum** (niedrig – hoch)\n- **x-Achse:** **relativer Marktanteil** (niedrig – hoch)\n  - Relativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Konkurrenten\n  - Wert > 1 = man ist Marktführer' },
    { f: 'BCG: **Question Marks** – Wachstum, Anteil, Merkmale, Normstrategie?', b: '(Fragezeichen, Nachwuchsprodukte)\n- Marktwachstum **hoch**, Marktanteil **klein**\n- Zukunft fraglich, verschlingen hohe Kosten für Entwicklung und Markteinführung\n- Normstrategie: **Intensive Marktbearbeitung** (z. B. Werbung), hohe Investitionen → zum Star machen (oder aufgeben)' },
    { f: 'BCG: **Stars** – Wachstum, Anteil, Merkmale, Normstrategie?', b: '- Marktwachstum **hoch**, Marktanteil **hoch**\n- haben sich im Markt durchgesetzt, pflegen das Image, aber weiterhin kostenintensiv\n- Normstrategie: **Position halten und ausbauen** (Investitionen in Werbung)' },
    { f: 'BCG: **Cash Cows** – Wachstum, Anteil, Merkmale, Normstrategie?', b: '(Melkkühe)\n- Marktwachstum **niedrig**, Marktanteil **hoch**\n- hohe, stabile Gewinne bei tiefen Ausgaben, hohe Kapitalrückflüsse\n- Normstrategie: **Keine grösseren Investitionen** mehr; Gewinn für Aufbau anderer Produkte verwenden («melken»)' },
    { f: 'BCG: **Poor Dogs** – Wachstum, Anteil, Merkmale, Normstrategie?', b: '(arme Hunde, Auslaufmodelle)\n- Marktwachstum **niedrig**, Marktanteil **klein**\n- schwach im Wettbewerb, bringen kaum Erträge, evtl. Verlust\n- Normstrategie: **Ausstieg**: Abbau der Leistungen, Streichung aus dem Sortiment' },
    { f: 'BCG: Was ist der **typische Weg** eines Produkts?', b: 'Question Mark → Star → Cash Cow → Poor Dog (oder Question Mark → direkt Poor Dog, wenn es scheitert).' },
    { f: 'Ordne die **Coca-Cola-Produkte** dem BCG-Portfolio zu.', b: '- **Coca-Cola Original** → **Cash Cow**: sehr hoher Marktanteil, Cola-Markt wächst kaum\n- **Coca-Cola Zero Sugar** → **Star**: wachsender Markt für zuckerfreie Getränke, hoher Anteil\n- **Coca-Cola Energy** → **Question Mark**: Energy-Drink-Markt wächst stark, aber Red Bull/Monster dominieren → kleiner Anteil (wurde in vielen Ländern wieder eingestellt → auch Poor Dog vertretbar)\n- **Coca-Cola C2** → **Poor Dog**: Flop, kleiner Anteil, wurde vom Markt genommen' },
    { f: 'Wie werden **wirtschaftliche Güter** unterteilt?', b: '- **Produkte** = Konsumgüter (**Gebrauchsgüter** wie Auto, **Verbrauchsgüter** wie Lebensmittel) und **Investitionsgüter**\n- **Dienstleistungen** = immaterielle Güter' },
    { f: '**Grundnutzen, Zusatznutzen, Nebennutzen** – Ebene und Bedeutung?', b: '- **Grundnutzen** – **Kernprodukt**: grundlegende Anforderung, eigentliche Funktion\n- **Zusatznutzen** – **Formales Produkt**: Marke, Design, Verpackung, Farbe, Qualität, Dimension, besondere Eigenschaften\n- **Nebennutzen** – **Erweitertes Produkt**: besondere Dienstleistungen: Installation, Service, Schulung, Garantie, Lieferbedingungen, Hotline, Bedienungsanleitung' },
    { f: 'Grund-, Zusatz- und Nebennutzen am Beispiel **Auto** und **Kaffeemaschine**?', b: '**Auto:** Grundnutzen: Auto fährt, dient der Fortbewegung · Zusatznutzen: tiefer Treibstoffverbrauch, schönes Design, bekannte Marke · Nebennutzen: Garantie, Servicepaket, Hotline\n\n**Kaffeemaschine:** Grundnutzen: macht Kaffee · Zusatznutzen: Design, Milchschäumer · Nebennutzen: Entkalkungsservice, 2 Jahre Garantie' },
    { f: 'Was ist das **Sortiment**?', b: '**Sortiment** (= Absatzprogramm) = alle Produkte und Dienstleistungen, die ein Unternehmen anbietet. Abgestimmt auf die Kundensegmente.' },
    { f: '**Sortimentsbreite** vs. **Sortimentstiefe**?', b: '- **Sortimentsbreite:** Wie viele **Produktgruppen** (T-Shirts, Schuhe, Hosen, Jacken)? wenige = **schmal** · viele = **breit**\n- **Sortimentstiefe:** Wie viele **Varianten innerhalb einer Produktgruppe** (Modelle, Farben, Grössen)? wenige = **flach** · viele = **tief**\n\nMerkhilfe: **Breite = horizontal = Anzahl Produktgruppen**, **Tiefe = vertikal = Anzahl Varianten**.' },
    { f: 'Vorteil und Gefahr eines **breiten** bzw. **schmalen** Sortiments?', b: '- **breit:** Vorteil: **mehr Zielgruppen** ansprechbar · Gefahr: **Verzettelung, Unübersichtlichkeit**, höhere Stückkosten (kleinere Einkaufsmengen)\n- **schmal:** Vorteil: **starke Spezialisierung**, evtl. tiefere Einkaufskosten dank grösserer Einkaufsmenge · Gefahr: **grosse Abhängigkeit**, anfällig auf Umsatzeinbussen, wenn sich Bedürfnisse ändern oder Umweltsphären negativ wirken' },
    { f: 'Vorteil und Gefahr eines **tiefen** bzw. **flachen** Sortiments?', b: '- **tief:** Vorteil: Bedürfnisse der Kundschaft **individuell** befriedigt · Gefahr: **höhere Stückkosten**, da kleine Einkaufsmengen\n- **flach:** Vorteil: **klare Positionierung**, hohe Erkennbarkeit · Gefahr: **zu kleine Zielgruppe**' },
    { f: 'Sortiments-**Kombinationen**: Warenhaus (Manor), Schuhgeschäft, Kiosk?', b: '- Warenhaus (Manor) = **breit und tief**\n- Schuhgeschäft = **schmal und tief**\n- Kiosk = **breit und flach**' },
    { f: 'Was gehört zu **Produktionsmenge, Umsatz** (4.3)?', b: '- Das Unternehmen legt fest, **welche Menge** an Produkten bereitgestellt und abgesetzt werden **kann und soll**.\n- Danach werden **Einkauf und Kosten** geplant.\n- Der **Umsatz wird möglichst genau prognostiziert** (vorhergesagt). Hilfen: Berichte zu den Umweltsphären, Analysen der Konkurrenzsituation (Mengen- und Preisentwicklung).\n\n`Produktionsmenge = Umsatzziel (CHF) / Preis pro Stück`' },
    { f: 'Nenne die Phasen des **Produktlebenszyklus** und was jeweils passiert.', b: '- (Entwicklung): Produkt wird entwickelt, nur Kosten\n- 1. **Einführung:** viel Werbung und Verkaufsförderung nötig, Produkt noch unbekannt → Verlust\n- 2. **Wachstum:** Umsatz wird stark ausgeweitet → Gewinnschwelle wird überschritten\n- 3. **Reife:** Konkurrenz kommt auf → Gewinn am höchsten\n- 4. **Sättigung:** Wettbewerb wird intensiver, Markt gesättigt\n- 5. **Rückgang (Degeneration):** wegen technischem Fortschritt und Demodierung' },
    { f: 'Produktlebenszyklus: Welche **BCG-Kategorie** passt zu welcher Phase?', b: '- Einführung → Question Mark\n- Wachstum → Star (oder Question Mark)\n- Reife → Star / Cash Cow\n- Sättigung → Cash Cow\n- Rückgang → Poor Dog' },
    { f: 'Was gilt allgemein zum **Produktlebenszyklus** (Dauer, Trend, Sortiment)?', b: '- **Spätestens in der Reifephase** muss über eine Veränderung des Produkts nachgedacht werden.\n- Wie lange eine Phase dauert, kann **nicht generell** gesagt werden.\n- Durch dynamische Märkte und technischen Fortschritt werden die **Produktlebenszyklen immer kürzer**.\n- Unternehmen sollten ein **ausgewogenes Sortiment** halten: **Cash Cows (und Stars)** finanzieren **neue Produkte** (Question Marks) und zukunftsträchtige Geschäftsfelder.' },
  ],

  quiz: [
    { q: 'Was bezeichnet das **Marktvolumen**?', o: ['Die tatsächlich erreichte Absatzmenge bzw. den tatsächlich erzielten Umsatz aller Anbieter', 'Die grösstmögliche, geschätzte Absatzmenge einer Branche', 'Den Anteil eines Unternehmens am Markt in %', 'Das Verhältnis von Marktvolumen zu Marktpotenzial'], e: '**Marktvolumen** = tatsächlich erreichte Absatzmenge bzw. tatsächlich erzielter Umsatz aller Anbieter (= 100 %). Maximal so gross wie das Marktpotenzial.' },
    { q: 'Ein Markt hat einen **Sättigungsgrad von 95 %**. Wie nennt man ihn?', o: ['Gesättigter Markt (Verdrängungsmarkt)', 'Wachstumsmarkt', 'Teilmarkt', 'Nischenmarkt'], e: 'Faustregel: **über 90 %** → gesättigter Markt (Verdrängungsmarkt) · **unter 90 %** → Wachstumsmarkt.' },
    { q: 'Ein Markt hat einen Sättigungsgrad von **70 %**. Was trifft zu?', o: ['Es ist ein Wachstumsmarkt', 'Es ist ein gesättigter Markt', 'Wachstum ist nur auf Kosten der Konkurrenz möglich', 'Das Marktvolumen ist grösser als das Marktpotenzial'], e: '**Unter 90 %** → Wachstumsmarkt.' },
    { q: 'Welches Instrument gehört zur **Sekundärmarktforschung**?', o: ['Analyse der eigenen Verkaufszahlen', 'Befragung', 'Beobachtung', 'Feldexperiment'], e: 'Sekundär = **vorhandene Daten nutzen**: Analyse interner Datenquellen (z. B. eigene Verkaufszahlen, Kundendatei, Reklamationen) und externer Datenquellen.' },
    { q: 'Wie wird die **Primärmarktforschung** auch genannt?', o: ['Field-Research, Feldforschung', 'Desk-Research, «Schreibtischforschung»', 'Markterkundung', 'Portfolio-Analyse'], e: 'Primärmarktforschung = **Field-Research, Feldforschung**: Neue Daten werden selbst erhoben.' },
    { q: 'Welcher **Nachteil** gilt für die Primärmarktforschung?', o: ['teuer, zeitaufwendig', 'Daten evtl. veraltet oder nicht genau passend', 'nicht auf die eigene Frage zugeschnitten', 'Aussagekraft eher gering / subjektiv'], e: 'Primär: Vorteil = genau auf die eigene Frage zugeschnitten, aktuell · Nachteil = **teuer, zeitaufwendig**.' },
    { q: 'Was beschreibt die **Markterkundung**?', o: ['unsystematisch, gelegentlich, meist durch das Unternehmen selbst', 'systematisch, wissenschaftlich, oft durch externe Institute', 'repräsentative Umfrage mit statistischer Auswertung', 'teuer, aber hohe Aussagekraft'], e: '**Markterkundung** = unsystematisch, gelegentlich, eher zufällig · meist das Unternehmen selbst · günstig · Aussagekraft eher gering / subjektiv.' },
    { q: 'Welches ist ein **Marktziel**?', o: ['Marktstellung', 'Sortiment', 'Umsatz', 'Produkte und Dienstleistungen'], e: 'Marktziele = **Bedürfnisse, Märkte, Marktstellung** · Produktziele = Produkte/Qualität, Sortiment, Umsatz.' },
    { q: 'Welches ist ein **Produktziel**?', o: ['Sortiment', 'Bedürfnisse', 'Märkte', 'Marktstellung'], e: 'Produktziele = **Produkte und Dienstleistungen, Sortiment, Umsatz**.' },
    { q: 'Wo werden die Markt- und Produktziele im **Unternehmungskonzept** festgelegt?', o: ['Im Bereich Leistung, auf der Zielebene', 'Im Bereich Finanzen, auf der Mittelebene', 'Im Bereich Soziales, auf der Zielebene', 'Im Bereich Leistung, auf der Ebene Verfahren'], e: 'Im **Bereich Leistung** werden auf der **Zielebene** die **Markt- und Produktziele** festgelegt – je drei.' },
    { q: 'Ein Produkt hat **hohes Marktwachstum** und **kleinen Marktanteil**. Welche BCG-Kategorie?', o: ['Question Mark', 'Star', 'Cash Cow', 'Poor Dog'], e: '**Question Marks**: Marktwachstum hoch, Marktanteil klein – Zukunft fraglich, verschlingen hohe Kosten.' },
    { q: 'Ein Produkt hat **niedriges Marktwachstum** und **hohen Marktanteil**. Welche BCG-Kategorie?', o: ['Cash Cow', 'Star', 'Question Mark', 'Poor Dog'], e: '**Cash Cows** (Melkkühe): niedrig / hoch – hohe, stabile Gewinne bei tiefen Ausgaben.' },
    { q: 'Welche **Normstrategie** gilt für Cash Cows?', o: ['Keine grösseren Investitionen mehr; Gewinn für Aufbau anderer Produkte verwenden', 'Intensive Marktbearbeitung, hohe Investitionen', 'Position halten und ausbauen', 'Ausstieg: Streichung aus dem Sortiment'], e: 'Cash Cows: **Keine grösseren Investitionen** mehr; Gewinn für Aufbau anderer Produkte verwenden («melken»).' },
    { q: 'Welche **Normstrategie** gilt für Poor Dogs?', o: ['Ausstieg: Abbau der Leistungen, Streichung aus dem Sortiment', 'Position halten und ausbauen', 'Intensive Marktbearbeitung (z. B. Werbung)', 'Gewinn «melken»'], e: 'Poor Dogs: **Ausstieg**: Abbau der Leistungen, Streichung aus dem Sortiment.' },
    { q: 'Was zeigt die **x-Achse** des BCG-Portfolios?', o: ['den relativen Marktanteil', 'das Marktwachstum', 'den Sättigungsgrad', 'das Marktpotenzial'], e: '**y-Achse:** Marktwachstum · **x-Achse:** relativer Marktanteil (niedrig – hoch).' },
    { q: 'Der **relative Marktanteil** eines Produkts beträgt **1,4**. Was bedeutet das?', o: ['Man ist Marktführer', 'Man hat 1,4 % Marktanteil', 'Der Markt ist gesättigt', 'Das Produkt ist ein Poor Dog'], e: 'Relativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Konkurrenten. **Wert > 1 = man ist Marktführer.**' },
    { q: 'Welcher BCG-Kategorie wurde **Coca-Cola C2** zugeordnet?', o: ['Poor Dog', 'Question Mark', 'Star', 'Cash Cow'], e: '**Coca-Cola C2** → Poor Dog: Flop, kleiner Anteil, wurde vom Markt genommen.' },
    { q: 'Welcher BCG-Kategorie wurde **Coca-Cola Zero Sugar** zugeordnet?', o: ['Star', 'Cash Cow', 'Question Mark', 'Poor Dog'], e: '**Coca-Cola Zero Sugar** → Star: wachsender Markt für zuckerfreie Getränke, hoher Anteil.' },
    { q: 'Was ist bei einem Auto die **Garantie**?', o: ['Nebennutzen (Erweitertes Produkt)', 'Grundnutzen (Kernprodukt)', 'Zusatznutzen (Formales Produkt)', 'Teilmarkt'], e: '**Nebennutzen** – Erweitertes Produkt: besondere Dienstleistungen wie Installation, Service, Schulung, **Garantie**, Lieferbedingungen, Hotline, Bedienungsanleitung.' },
    { q: 'Was ist bei einem Auto das **schöne Design**?', o: ['Zusatznutzen (Formales Produkt)', 'Grundnutzen (Kernprodukt)', 'Nebennutzen (Erweitertes Produkt)', 'Normstrategie'], e: '**Zusatznutzen** – Formales Produkt: Marke, **Design**, Verpackung, Farbe, Qualität, Dimension, besondere Eigenschaften.' },
    { q: 'Was beschreibt die **Sortimentstiefe**?', o: ['die Anzahl Varianten innerhalb einer Produktgruppe', 'die Anzahl Produktgruppen', 'die Anzahl Verkaufsstellen', 'die Anzahl Zielgruppen'], e: '**Tiefe = vertikal = Anzahl Varianten** (Modelle, Farben, Grössen): wenige = flach · viele = tief.' },
    { q: 'Wie ist das Sortiment eines **Kiosks**?', o: ['breit und flach', 'schmal und tief', 'breit und tief', 'schmal und flach'], e: 'Kombinationen: Warenhaus (Manor) = breit und tief · Schuhgeschäft = schmal und tief · **Kiosk = breit und flach**.' },
    { q: 'Welche **Gefahr** hat ein **schmales** Sortiment?', o: ['grosse Abhängigkeit, anfällig auf Umsatzeinbussen', 'Verzettelung, Unübersichtlichkeit', 'zu kleine Zielgruppe', 'höhere Stückkosten wegen vieler Varianten'], e: 'Schmal: Vorteil = starke Spezialisierung · Gefahr = **grosse Abhängigkeit**, anfällig auf Umsatzeinbussen, wenn sich Bedürfnisse ändern oder Umweltsphären negativ wirken.' },
    { q: 'In welcher Phase des Produktlebenszyklus ist der **Gewinn am höchsten**?', o: ['Reife', 'Einführung', 'Wachstum', 'Sättigung'], e: '3. **Reife**: Konkurrenz kommt auf · Umsatz steigt noch, erreicht Höhepunkt · **Gewinn am höchsten**.' },
    { q: 'Warum kommt es zur Phase **Rückgang (Degeneration)**?', o: ['wegen technischem Fortschritt und Demodierung', 'weil viel Werbung nötig ist', 'weil die Konkurrenz aufkommt', 'weil der Umsatz stark ausgeweitet wird'], e: '5. **Rückgang (Degeneration)**: wegen **technischem Fortschritt** und **Demodierung** (aus der Mode kommen).' },
    { q: '**Spätestens** in welcher Phase muss über eine Veränderung des Produkts nachgedacht werden?', o: ['in der Reifephase', 'in der Einführungsphase', 'in der Rückgangsphase', 'in der Entwicklungsphase'], e: '**Spätestens in der Reifephase** muss über eine Veränderung des Produkts nachgedacht werden.' },
    { q: 'Wovon geht die **Marktsegmentierung** aus?', o: ['von der Kundenseite → Einteilung der Personen nach Merkmalen', 'von der Produktseite → Einteilung der Produkte', 'von der Konkurrenz → Einteilung nach Marktanteilen', 'von den Kosten → Einteilung nach Preisen'], e: '**Marktsegmentierung** geht von der **Kundenseite** aus · **Teilmärkte** gehen von der **Produktseite** aus.' },
    { q: 'Zu welcher Kriteriengruppe gehört der **Lebensstil** (verschwenderisch/sparsam)?', o: ['Psychografisch / Kundenverhalten', 'Demografisch', 'Geografisch', 'Teilmarkt'], e: 'Psychografisch / Kundenverhalten: Lebensstil, Werthaltung, Risikobereitschaft, Kaufmotive.' },
    { q: 'Wie gewinnt man in einem **gesättigten Markt** Marktanteile?', o: ['über Zusatznutzen, Sonderkonditionen oder Preiskampf', 'alle Anbieter wachsen automatisch mit', 'nur durch Preisführerschaft des grössten Anbieters', 'durch Sekundärmarktforschung'], e: 'Gesättigter Markt: Wachstum nur auf Kosten der Konkurrenz → Verdrängungswettbewerb. Marktanteile gewinnt man über **Zusatznutzen, Sonderkonditionen oder Preiskampf**.' },
  ],

  zuordnen: [
    { title: 'Marktziel oder Produktziel?', buckets: ['Marktziele', 'Produktziele'], items: [
      ['Bedürfnisse', 0], ['Märkte', 0], ['Marktstellung', 0], ['Welche Kundengruppen (Zielgruppen) werden angesprochen?', 0], ['Welche geografischen Märkte werden bearbeitet?', 0], ['Welche Bedürfnisse werden befriedigt?', 0],
      ['Produkte und Dienstleistungen', 1], ['Sortiment', 1], ['Umsatz', 1], ['Welche Auswahl an Produkten/Dienstleistungen?', 1], ['Wie viel mengenmässiger Umsatz wird angestrebt?', 1] ] },
    { title: 'Primär- oder Sekundärmarktforschung?', buckets: ['Primärmarktforschung', 'Sekundärmarktforschung'], items: [
      ['Field-Research, Feldforschung', 0], ['Neue Daten werden selbst erhoben', 0], ['Befragung', 0], ['Beobachtung', 0], ['Experiment/Test', 0], ['genau auf die eigene Frage zugeschnitten, aktuell', 0], ['teuer, zeitaufwendig', 0],
      ['Desk-Research, «Schreibtischforschung»', 1], ['Bereits vorhandene Daten werden ausgewertet', 1], ['eigene Verkaufszahlen, Kundendatei, Reklamationen', 1], ['Statistiken BFS, Branchenberichte', 1], ['günstig, schnell', 1], ['Daten evtl. veraltet oder nicht genau passend', 1] ] },
    { title: 'Markterkundung oder Marktforschung?', buckets: ['Markterkundung', 'Marktforschung'], items: [
      ['unsystematisch, gelegentlich, eher zufällig', 0], ['meist das Unternehmen selbst', 0], ['Gespräche mit Kunden', 0], ['Messebesuch', 0], ['Konkurrenz-Läden anschauen', 0], ['Rückmeldungen vom Verkaufspersonal', 0], ['Aussagekraft eher gering / subjektiv', 0],
      ['systematisch, wissenschaftlich, geplant', 1], ['oft externe Marktforschungsinstitute', 1], ['repräsentative Umfrage', 1], ['Testmarkt', 1], ['statistische Auswertung', 1], ['Aussagekraft hoch, verlässlich', 1] ] },
    { title: 'Kriterien der Marktsegmentierung', buckets: ['Geografisch', 'Demografisch', 'Psychografisch / Kundenverhalten'], items: [
      ['International', 0], ['Regional', 0], ['Gebiete nach PLZ', 0], ['Siedlungsart (Stadt/Land)', 0], ['Ortsgrösse', 0], ['Sprachgebiet', 0],
      ['Altersklasse (z. B. 15–20 J.)', 1], ['Geschlecht', 1], ['Haushaltsgrösse (z. B. 2-Personen-Haushalt)', 1], ['Einkommensklasse', 1], ['Bildungsstand', 1], ['Nationalität', 1],
      ['Lebensstil (verschwenderisch/sparsam)', 2], ['Werthaltung (konservativ, fortschrittlich, «grün»)', 2], ['Risikobereitschaft (risikofreudig/sicherheitsorientiert)', 2], ['Kaufmotive (Spontankäufer, Markentreue, Qualität, Preis, Ansehen)', 2] ] },
    { title: 'Marktsegmentierung oder Teilmärkte?', buckets: ['Marktsegmentierung', 'Teilmärkte'], items: [
      ['geht von der Kundenseite aus', 0], ['Einteilung der Personen nach Merkmalen', 0], ['Personengruppen (Kundengruppen) mit gleichen Bedürfnissen', 0], ['Fahrräder: nach Alter (Kinder, Erwachsene), Geschlecht, Einkommen', 0],
      ['geht von der Produktseite aus', 1], ['Einteilung der Produkte nach Bedürfnis/Verwendung', 1], ['Produktgruppen, die aus einem Produkt entstanden sind', 1], ['Sportfahrräder, Alltags-/Freizeitfahrräder, Elektro-Fahrräder', 1] ] },
    { title: 'Marktkennzahlen', buckets: ['Marktpotenzial', 'Marktvolumen', 'Marktanteil', 'Sättigungsgrad'], items: [
      ['grösstmögliche, geschätzte Absatzmenge', 0], ['Äusserer, grosser Kreis', 0], ['Klasse = 25 Personen', 0],
      ['tatsächlich erreichte Absatzmenge aller Anbieter (= 100 %)', 1], ['Innerer Kreis', 1], ['23 haben ein Smartphone', 1],
      ['Anteil eines Unternehmens am Marktvolumen in %', 2], ['Schwarzes Kuchenstück im inneren Kreis', 2], ['12 / 23 × 100 = 52,2 %', 2],
      ['Wie viel % das Marktvolumen vom Marktpotenzial beträgt', 3], ['über 90 % → gesättigter Markt', 3], ['23 / 25 × 100 = 92 %', 3] ] },
    { title: 'BCG-Portfolio', buckets: ['Question Marks', 'Stars', 'Cash Cows', 'Poor Dogs'], items: [
      ['Marktwachstum hoch · Marktanteil klein', 0], ['Zukunft fraglich, verschlingen hohe Kosten für Entwicklung und Markteinführung', 0], ['Intensive Marktbearbeitung, hohe Investitionen', 0], ['Coca-Cola Energy', 0],
      ['Marktwachstum hoch · Marktanteil hoch', 1], ['haben sich im Markt durchgesetzt, pflegen das Image', 1], ['Position halten und ausbauen', 1], ['Coca-Cola Zero Sugar', 1],
      ['Marktwachstum niedrig · Marktanteil hoch', 2], ['hohe, stabile Gewinne bei tiefen Ausgaben', 2], ['Keine grösseren Investitionen mehr («melken»)', 2], ['Coca-Cola Original', 2],
      ['Marktwachstum niedrig · Marktanteil klein', 3], ['schwach im Wettbewerb, bringen kaum Erträge', 3], ['Ausstieg: Streichung aus dem Sortiment', 3], ['Coca-Cola C2', 3] ] },
    { title: 'Grund-, Zusatz- oder Nebennutzen?', buckets: ['Grundnutzen', 'Zusatznutzen', 'Nebennutzen'], items: [
      ['Kernprodukt', 0], ['Auto fährt, dient der Fortbewegung', 0], ['Kaffeemaschine macht Kaffee', 0], ['eigentliche Funktion', 0],
      ['Formales Produkt', 1], ['tiefer Treibstoffverbrauch', 1], ['schönes Design', 1], ['bekannte Marke', 1], ['Milchschäumer', 1], ['Verpackung', 1],
      ['Erweitertes Produkt', 2], ['Servicepaket', 2], ['Hotline', 2], ['Entkalkungsservice', 2], ['2 Jahre Garantie', 2], ['Bedienungsanleitung', 2] ] },
    { title: 'Sortiment: breit, schmal, tief oder flach?', buckets: ['breit', 'schmal', 'tief', 'flach'], items: [
      ['grosse Anzahl Artikelarten/Produktgruppen', 0], ['Geschäft führt Hosen, Blusen, Pullover, Jacken, Taschen, Gürtel, Foulards und Schuhe', 0], ['mehr Zielgruppen ansprechbar', 0], ['Verzettelung, Unübersichtlichkeit', 0],
      ['kleine Anzahl Artikelarten/Produktgruppen', 1], ['Geschäft führt nur Schuhe', 1], ['starke Spezialisierung', 1], ['grosse Abhängigkeit', 1],
      ['grosse Anzahl Varianten innerhalb einer Produktgruppe', 2], ['Geschäft führt ein T-Shirt in 20 Farben', 2], ['Bedürfnisse der Kundschaft individuell befriedigt', 2],
      ['kleine Anzahl Varianten', 3], ['Geschäft führt Kleider immer in einer Farbe', 3], ['klare Positionierung, hohe Erkennbarkeit', 3], ['zu kleine Zielgruppe', 3] ] },
  ],

  reihenfolge: [
    { title: 'Phasen des Produktlebenszyklus', items: ['(Entwicklung)', 'Einführung', 'Wachstum', 'Reife', 'Sättigung', 'Rückgang (Degeneration)'] },
    { title: 'Was passiert im Produktlebenszyklus?', items: ['Produkt wird entwickelt, nur Kosten', 'viel Werbung und Verkaufsförderung nötig, Produkt noch unbekannt', 'Umsatz wird stark ausgeweitet', 'Konkurrenz kommt auf', 'Wettbewerb wird intensiver, Markt gesättigt', 'wegen technischem Fortschritt und Demodierung'] },
    { title: 'Beispiel Smartphone-Modell', items: ['Launch, viel Werbung', 'viele kaufen es', 'Konkurrenzmodelle erscheinen', 'fast alle, die es wollen, haben es', 'Nachfolgemodell kommt, wird nicht mehr produziert'] },
    { title: 'Typischer Weg im BCG-Portfolio', items: ['Question Mark', 'Star', 'Cash Cow', 'Poor Dog'] },
    { title: 'Aufgabe der Marketing-Aktivitäten', items: ['Bedürfnisse des Marktes herausfinden', 'sie in Produkte/Dienstleistungen umwandeln', 'diese auf dem Markt bekannt machen und verkaufen'] },
  ],

  rechnen: true,
};

/* ================================================================== */
/*  THEMA 2 – MARKETING-MIX                                            */
/* ================================================================== */
window.TASKS.t2 = {
  karten: [
    { f: 'Was sind die **4 P\'s**?', b: '- **Product** – **Produktpolitik** (Produkt- und Dienstleistungsgestaltung) – Was bieten wir an?\n- **Price** – **Preispolitik** (Preisgestaltung) – Zu welchem Preis?\n- **Place** – **Vertriebs- oder Distributionspolitik** (Place → Verkaufsstelle) – Wo / wie kommt es zur Kundschaft?\n- **Promotion** – **Kommunikationspolitik** (Werbung, Kommunikation) – Wie informieren wir?' },
    { f: 'Was kann das Unternehmen mit den 4 P\'s erreichen?', b: '- sich und seine Produkte **von der Konkurrenz unterscheidbar** machen (z. B. spezielles Design, attraktive Preise),\n- die Produkte **zur Kundschaft bringen** (z. B. Verkauf in Supermärkten),\n- **mit der Kundschaft kommunizieren** (z. B. TV-Werbung, Social Media).' },
    { f: 'Definition **Marketing-Mix**?', b: 'Um die Markt- und Produktziele zu erreichen, müssen die **4 P\'s optimal miteinander kombiniert** werden. Diese **gegenseitige Abstimmung** heisst **Marketing-Mix**.\n- Einordnung: Im Unternehmungskonzept, Bereich **«Leistung»**, Ebene **«Verfahren»**.\n- Bild: wie die **Zahnräder eines Getriebes** – die Instrumente müssen ineinandergreifen, sonst funktioniert es nicht.' },
    { f: 'Welches P hat das **Schwergewicht**? (Markenartikel, Frischprodukt, Billigpreisstrategie, gesättigter Markt)', b: '- Markenartikel → **Product** (Produkteigenschaften) – Red Bull\n- Frischprodukt → **Place** (Vertrieb) – Joghurt\n- Billigpreisstrategie → **Price** – easyJet, Denner, Aldi\n- stark gesättigter Markt → **Promotion** (Werbung) – Waschmittel' },
    { f: 'Mögliche Fragen zu **Product**?', b: '- Wie sehen die Produkteigenschaften im Detail aus?\n- Wie soll der Markenname gestaltet werden?\n- Wie soll das Design aussehen?\n- Wie soll die Verpackung gestaltet sein?\n- Wie soll der Kundendienst ausgebaut werden?' },
    { f: 'Mögliche Fragen zu **Price**, **Place** und **Promotion**?', b: '**Price:** Wie hoch sollen die Verkaufspreise sein? · Wie werden Preisermässigungen eingesetzt? · Wie sollen die Zahlungsbedingungen gestaltet werden?\n\n**Place:** Wie gelangen die Produkte zur Kundschaft? · Wie hoch ist der optimale Lagerbestand? · Wie wird der Transport organisiert?\n\n**Promotion:** Wie wird über die Produkte informiert? · Wie wird die Werbebotschaft gestaltet? · Wie wird die Werbebotschaft vermittelt?' },
    { f: 'Was ist **Produktdifferenzierung**?', b: '**Produktdifferenzierung** = Ziel, die eigenen Produkte/Dienstleistungen **von der Konkurrenz unterscheidbar** zu machen. So entsteht **Zusatznutzen** für die Kundschaft → evtl. lassen sich **höhere Preise** durchsetzen.' },
    { f: 'Nenne die **6 Möglichkeiten**, Produkte unterscheidbar zu machen.', b: '1. **Produkt selbst (Design)** – Coca-Cola-Flasche, Apple-Geräte, Porsche\n2. **Kennzeichen zur Wiedererkennung** – Nike-Swoosh, Adidas-Streifen, Lacoste-Krokodil, Puma\n3. **Verpackung** – Toblerone-Dreiecksverpackung\n4. **Zusatzleistungen** – Autohändler: Finanzierung, Versicherungsofferten, Garantieverlängerung, Servicepakete\n5. **Mitarbeitende** – Fachgeschäft mit Beratung\n6. **Image des Unternehmens** – Victorinox, Rivella, Ricola' },
    { f: 'Welche Funktionen hat die **Verpackung** bei der Produktdifferenzierung?', b: 'Neben Schutz und Stapelbarkeit auch **Kommunikationsfunktion**: informiert über das Produkt, dient als Werbeträger (z. B. Toblerone-Dreiecksverpackung).' },
    { f: 'Produktdifferenzierung am Beispiel **Apple iPhone**?', b: 'Design (schlankes Aluminium-Gehäuse) · Kennzeichen (Apfel-Logo) · Verpackung (minimalistische weisse Box) · Zusatzleistungen (AppleCare, Genius Bar) · Mitarbeitende (Beratung im Apple Store) · Image (innovativ, Premium).' },
    { f: 'Was ist **Preispolitik**? Welche zwei Fragen stellen sich?', b: '**Preispolitik** = Das Unternehmen will seine Produkte/Dienstleistungen **über den Preis** von der Konkurrenz unterscheidbar machen.\n1. Mit welchem Verfahren wird der Preis bestimmt? → **Preisbestimmung**\n2. Können unterschiedliche Preise durchgesetzt werden? → **Preisdifferenzierung**' },
    { f: 'Von welchen **drei Grössen** hängt der Preis ab?', b: '1. **Herstellungskosten**\n2. **Preise der Konkurrenz**\n3. **Zahlungsbereitschaft der Kundschaft**' },
    { f: '**Kostenorientierung**: Vorgehen, Vorteil, Eignung?', b: '- Vorgehen: Preisuntergrenze = **alle anfallenden Kosten**, darauf wird ein **Gewinn** gerechnet\n- Vorteil: einfach, da die Kosten bekannt sind\n- Eignung: Güter mit **hohem Nutzen und geringer Austauschbarkeit** (z. B. massgeschneiderte Kleider)' },
    { f: '**Wettbewerbsorientierung**: Vorgehen, Vorteil, Eignung?', b: '- Vorgehen: Preis wird an den **Konkurrenzpreisen** ausgerichtet: gleich hoch, höher oder tiefer\n- Vorteil: einfach, da Konkurrenzpreise einen Vergleich bieten\n- Eignung: Güter des **täglichen Bedarfs** (z. B. Margarine – Butter)' },
    { f: '**Nachfrageorientierung**: Vorgehen, Vorteil, Eignung?', b: '- Vorgehen: **Kunden werden gefragt**, ob sie das Produkt zu einem bestimmten Preis kaufen würden\n- Vorteil: man kennt die **Zahlungsbereitschaft** der Kundschaft\n- Eignung: bei **gesättigten Märkten**' },
    { f: 'Was ist **Preisdifferenzierung**?', b: '**Preisdifferenzierung** = Das Unternehmen verkauft **das gleiche Produkt zu unterschiedlichen Preisen**. → Es werden **mehr Kundensegmente** angesprochen → mehr Verkäufe und höhere Gewinne.' },
    { f: 'Nenne die **6 Kriterien der Preisdifferenzierung** mit je einem Beispiel.', b: '- **Personen** – Jugend-Bankkonto, Rabatt mit Lehrlings-/Studentenausweis, Gruppenpreis\n- **Zeitpunkt des Kaufs** – Hotel Haupt-/Nebensaison, Spar-Billette ausserhalb Stosszeiten\n- **Menge** – Mengenrabatt für Grosskunden\n- **Geografische Märkte** – Produkte in der Schweiz teurer als im Ausland\n- **Verpackung** – Prix Garantie (Coop) / M-Budget (Migros); Alu-Dose statt Glasflasche\n- **Kennzeichnung zur Wiedererkennung** – Markenprodukte teurer als No-Name-/Eigenmarken (Lidl «Milbona»-Milch von einer Emmi-Tochter)' },
    { f: 'Preisdifferenzierung am Beispiel **Kino**?', b: 'Kino: Erwachsene CHF 20, Studierende CHF 16 (**Personen**), Dienstag Kinotag CHF 14 (**Zeitpunkt**), 10er-Abo günstiger (**Menge**). Gleicher Film = gleiches Produkt, unterschiedliche Preise.' },
    { f: 'Was ist **Distributionspolitik**?', b: '**Distributionspolitik** = legt fest und organisiert, **auf welchem Weg und an welchen Orten** die Kundschaft die Produkte kaufen kann.\n- Vertrieb = **Nahtstelle zwischen Unternehmen und Kundschaft**, gestaltet den Weg vom Produzenten zum Endabnehmer.\n- Entscheid: **direkter oder indirekter Absatzweg**.\n- Betrifft vor allem **Sachgüter** – bei Dienstleistungen fallen Produktion und Verbrauch zeitlich und örtlich zusammen.' },
    { f: '**Direkter Absatzweg**: Bedeutung, wann, Beispiele?', b: '- **Hersteller selbst** ist beim Verkauf **in Kontakt mit den Endverbrauchern**\n- Wann: wenige Produkte / kleiner Kundenkreis · hoher **Erklärungsbedarf** · **Spezialanfertigungen** · Verkauf über **Automaten** oder **Internet** (E-Commerce)\n- Beispiele: Hofladen beim Bauern, Bäckerei, Massschneider, Nespresso-Boutique, Online-Shop des Herstellers, Tesla' },
    { f: '**Indirekter Absatzweg**: Bedeutung, wann, Beispiele, Bezeichnung?', b: '- Produzent hat **keinen Kontakt** zu Endverbrauchern; verkauft an **Grosshändler (Grossisten)** oder **Detailhändler (Einzelhändler)**\n- Wann: Produkte für viele Kunden an vielen Orten\n- Beispiele: Coca-Cola via Migros/Coop; Hersteller → Grosshändler → Kiosk\n- Bezeichnung: **Handelskette**, kann **einstufig** (nur Detailhandel) oder **mehrstufig** (Gross- + Detailhandel) sein' },
    { f: 'Nenne die **Kriterien für die Wahl des Absatzweges**.', b: '- **Grösse der Unternehmung / Konkurrenz** – kleine Produzenten bekommen schwer einen Platz in den Regalen der Grossverteiler\n- **Erfahrungen in der Distribution** – direkter Weg: Absatznetzwerk und Lager aufbauen → hohe Kosten\n- **Produkteigenschaft** – Beratungsbedarf, Frischprodukte, Image des Absatzkanals (Rolex nicht im Discounter)\n- **Anzahl Verkaufsstellen** – Produkte für viele Kunden an vielen Orten eignen sich **nicht für den Direktabsatz**' },
    { f: 'Was ist **E-Commerce**?', b: '- **E-Commerce / Onlineshopping** = Direktverkauf übers Internet, eine **Variante des direkten Absatzweges**.\n- Kundschaft kann bequem und jederzeit aussuchen, vergleichen, bestellen und online bezahlen.\n- In der Schweiz stark wachsend: Online-Anteil am Detailhandel von ca. 3,5 % (2008) auf ca. 9,1 % (2019); Marktvolumen von 5,1 Mrd. CHF (2010) auf 10,3 Mrd. CHF (2019).\n- Trend: Hersteller richten sich **direkter auf Endkunden** aus, **Online-Marktplätze** wachsen weiter.' },
    { f: 'Nenne die **4 Instrumente der Kommunikationspolitik** (mit Stichwort).', b: '- **Werbung** – Verhaltensbeeinflussung\n- **Verkaufsförderung** – zeitlich begrenzte Anreize\n- **PR (Public Relations)** – Werben um Vertrauen in der Öffentlichkeit\n- **Sponsoring** – finanzielle Unterstützung' },
    { f: 'Was sind die **Ziele der Werbung**?', b: '- eigenen **Bekanntheitsgrad erhöhen**\n- Zielgruppe und potenzielle Kundschaft **informieren**\n- durch gefühlsbetonte Inhalte **positiv beeinflussen**\n- **Kaufhandlungen auslösen**' },
    { f: 'Erkläre die **AIDA-Formel**.', b: '- **A – Attention** (Aufmerksamkeit): Aufmerksamkeit auf die Werbeaktion und damit auf die Leistung lenken\n- **I – Interest** (Interesse): Werbeversprechen weckt Interesse für Produkt/Dienstleistung\n- **D – Desire** (Wunsch): den Wunsch zum Kauf erzeugen\n- **A – Action** (Handlung): Werbeversprechen löst den Kauf aus' },
    { f: 'AIDA am Beispiel **Rivella-Plakat «mach\'s zusammen»**?', b: '- **A:** Das Plakat mit der fröhlichen Jugendgruppe am Fotoautomaten fällt einer Passantin auf.\n- **I:** Sie findet die Werbung ansprechend, weil sie eine aktive, optimistische, kreative Lebenseinstellung zeigt.\n- **D:** Sie identifiziert sich mit diesen Werten und möchte das Getränk wieder einmal trinken.\n- **A:** Sie geht in den Supermarkt und kauft das Getränk.' },
    { f: 'Unterschied **Werbemittel** vs. **Werbeträger**?', b: '- **Werbemittel** = **konkrete Form** einer Werbebotschaft (das «Was») – Inserat, Werbespot, Plakat, Banner, Flyer\n- **Werbeträger** = **Plattform**, über die das Werbemittel zur Zielgruppe gelangt (das «Wo/Wodurch») – Zeitung, TV-Sender, Radiosender, Plakatwand, Instagram\n\nMerkhilfe: Das **Mittel** (Spot) wird vom **Träger** (TV-Sender) **getragen**.' },
    { f: 'Unterschied **informative** vs. **suggestive** Werbebotschaft?', b: '- **Informativ:** **sachliche Information** über das Produkt überwiegt (Preis, Eigenschaften, Fakten) – z. B. Prospekt mit technischen Daten eines Laptops, Aktionsflyer mit Preisen\n- **Suggestiv:** spricht **Gefühle und Bedürfnisse** an, es geht um **Emotionen**, manchmal sogar Manipulation – z. B. Parfumwerbung, Rivella «mach\'s zusammen», Bier-Werbung mit Freunden am See' },
    { f: 'Welche **Möglichkeiten** gibt es, die Werbebotschaft zu den Kunden zu bringen?', b: '1. **Klassische Mediawerbung** – Printwerbung (Zeitungen, Zeitschriften, Plakatwände, Werbung auf Fahrzeugen) · Elektronische Werbung (Fernsehen, Radio, Kino)\n2. **Online-Werbung** – Websites (Banner, Pop-ups), Social Media (direkt oder via Influencer/innen), Apps und Games, E-Mails (z. B. Newsletter)\n3. **Direktmarketing** – Zielgruppen werden **direkt und einzeln** angesprochen: Werbesendungen per Post, Telefon oder Internet, SMS' },
    { f: 'Was ist **Verkaufsförderung**? Welche Arten gibt es?', b: '**Verkaufsförderung** = alle **kurzfristigen Anreize**, die den Verkauf **zusätzlich** unterstützen (für Handel oder Endverbraucher).\n- **Preisorientiert:** Einführungsrabatte, Aktionen mit Rabatten, Liquidationsrabatte\n- **Nicht preisorientiert – zur Information:** Handzettel, Prospekt, Gebrauchsanweisung, Mailings, Produktworkshops für den Handel\n- **– zur Motivation:** Wettbewerb, Muster, Events\n- **– zum Verkauf:** Zugabe, Gutschein, Display (POS)' },
    { f: 'Was sind **Public Relations (PR)**? Beispiele?', b: 'Unternehmen wollen bei **allen Anspruchsgruppen** (nicht nur bei Kunden) ein **gutes Image**.\n**PR** = alle Massnahmen der **Öffentlichkeitsarbeit**, welche die Anspruchsgruppen **informieren und positiv beeinflussen**.\n- **Leitbild** mit unternehmerischen Zielen und Werten\n- Firmenporträt (z. B. als Film)\n- Tag der offenen Tür, Betriebsbesichtigungen\n- Events bei Produkteinführungen\n- evtl. Veröffentlichung von Geschäftsberichten' },
    { f: 'Unterschied **Werbung** ↔ **PR**?', b: '**Werbung** wirbt für das **Produkt** (Ziel: Verkauf), **PR** wirbt um **Vertrauen in das Unternehmen** (Ziel: gutes Image).' },
    { f: 'Was ist **Sponsoring**? Was ist **Imagetransfer**?', b: '- **Spezielle Form der Öffentlichkeitsarbeit**.\n- Unternehmen **unterstützt** eine Veranstaltung, Institution oder Person **finanziell**.\n- **Gegenwert** = grössere Bekanntheit, Beliebtheit, positives Image.\n- **Positiver Imagetransfer** – das Image des Gesponserten geht auf die Marke über.\n- Bereiche: **Sport, Kultur, Soziales, Wissenschaft, Medien**\n- Beispiele: **Sunrise** mit Roger Federer, **Migros** am Openair Frauenfeld, **PostFinance** im Eishockey.' },
    { f: 'Welche **Kommunikationsmassnahmen** passen zu den Phasen des **Produktlebenszyklus**?', b: '- **1. Einführung:** Informative Werbung, die auch emotional anspricht; Einführungsrabatte, Warenproben, Displays\n- **2./3. Wachstum und Reife:** Werbung zur Erinnerung, Eventmarketing\n- **4. Sättigung:** neue Werbekampagne zur Erinnerung, evtl. Preisreduktion, Verkaufsförderung (z. B. «3 für 2»)\n- **5. Relaunch oder Degeneration:** Produktdifferenzierung, Neulancierung mit Werbung wie in der Einführung, oder Totalausverkauf' },
  ],

  quiz: [
    { q: 'Wofür steht **Place** in den 4 P\'s?', o: ['Vertriebs- oder Distributionspolitik', 'Preispolitik', 'Kommunikationspolitik', 'Produktpolitik'], e: '**Place** – Vertriebs- oder Distributionspolitik (Place → Verkaufsstelle): Wo / wie kommt es zur Kundschaft?' },
    { q: 'Wofür steht **Promotion**?', o: ['Kommunikationspolitik (Werbung, Kommunikation)', 'Verkaufsförderung durch Rabatte allein', 'Distributionspolitik', 'Produktdifferenzierung'], e: '**Promotion** – Kommunikationspolitik (Werbung, Kommunikation): Wie informieren wir?' },
    { q: 'Was ist der **Marketing-Mix**?', o: ['die gegenseitige Abstimmung der 4 P\'s, um die Markt- und Produktziele zu erreichen', 'die Summe aller Werbeausgaben', 'die Einteilung des Marktes in Kundengruppen', 'die Mischung aller Produkte im Sortiment'], e: 'Die **4 P\'s** müssen **optimal miteinander kombiniert** werden. Diese **gegenseitige Abstimmung** heisst **Marketing-Mix**.' },
    { q: 'Wo ist der Marketing-Mix im **Unternehmungskonzept** eingeordnet?', o: ['Bereich «Leistung», Ebene «Verfahren»', 'Bereich «Leistung», Ebene «Ziele»', 'Bereich «Finanzen», Ebene «Mittel»', 'Bereich «Soziales», Ebene «Verfahren»'], e: 'Einordnung: Im Unternehmungskonzept, Bereich **«Leistung»**, Ebene **«Verfahren»**.' },
    { q: 'Bei einem **Frischprodukt** (z. B. Joghurt) liegt das Schwergewicht auf …', o: ['Place (Vertrieb)', 'Product', 'Price', 'Promotion'], e: 'Frischprodukt → **Place** (Vertrieb), Beispiel Joghurt.' },
    { q: 'In einem **stark gesättigten Markt** (z. B. Waschmittel) liegt das Schwergewicht auf …', o: ['Promotion (Werbung)', 'Place', 'Product', 'Price'], e: 'stark gesättigter Markt → **Promotion** (Werbung), Beispiel Waschmittel.' },
    { q: 'Die **Toblerone-Dreiecksverpackung** ist ein Beispiel für welche Möglichkeit der Produktdifferenzierung?', o: ['Verpackung', 'Kennzeichen zur Wiedererkennung', 'Zusatzleistungen', 'Image des Unternehmens'], e: '**Verpackung**: neben Schutz und Stapelbarkeit auch Kommunikationsfunktion – Beispiel Toblerone-Dreiecksverpackung.' },
    { q: 'Das **Lacoste-Krokodil** ist ein Beispiel für …', o: ['Kennzeichen zur Wiedererkennung', 'Produkt selbst (Design)', 'Verpackung', 'Mitarbeitende'], e: '**Kennzeichen zur Wiedererkennung**: Name, Marke, Logo – Nike-Swoosh, Adidas-Streifen, Lacoste-Krokodil, Puma.' },
    { q: 'Was kann durch **Produktdifferenzierung** entstehen?', o: ['Zusatznutzen für die Kundschaft → evtl. höhere Preise', 'tiefere Herstellungskosten', 'ein schmaleres Sortiment', 'ein indirekter Absatzweg'], e: 'So entsteht **Zusatznutzen** für die Kundschaft → evtl. lassen sich **höhere Preise** durchsetzen.' },
    { q: 'Von welchen **drei Grössen** hängt der Preis ab?', o: ['Herstellungskosten, Preise der Konkurrenz, Zahlungsbereitschaft der Kundschaft', 'Werbung, Verpackung, Design', 'Marktpotenzial, Marktvolumen, Marktanteil', 'Personen, Zeitpunkt, Menge'], e: 'Der Preis hängt von **Herstellungskosten**, **Preisen der Konkurrenz** und der **Zahlungsbereitschaft der Kundschaft** ab.' },
    { q: 'Für **massgeschneiderte Kleider** eignet sich welche Preisorientierung?', o: ['Kostenorientierung', 'Wettbewerbsorientierung', 'Nachfrageorientierung', 'Preisdifferenzierung nach Menge'], e: 'Kostenorientierung eignet sich für Güter mit **hohem Nutzen und geringer Austauschbarkeit** (z. B. massgeschneiderte Kleider).' },
    { q: 'Für Güter des **täglichen Bedarfs** (z. B. Margarine – Butter) eignet sich …', o: ['Wettbewerbsorientierung', 'Kostenorientierung', 'Nachfrageorientierung', 'Sponsoring'], e: '**Wettbewerbsorientierung**: Preis wird an den Konkurrenzpreisen ausgerichtet – geeignet für Güter des täglichen Bedarfs.' },
    { q: 'Bei **gesättigten Märkten** eignet sich welche Preisorientierung?', o: ['Nachfrageorientierung', 'Kostenorientierung', 'Wettbewerbsorientierung', 'keine – der Preis ist fix'], e: '**Nachfrageorientierung**: Kunden werden gefragt, ob sie zu einem bestimmten Preis kaufen würden – geeignet bei gesättigten Märkten.' },
    { q: 'Was ist **Preisdifferenzierung**?', o: ['das gleiche Produkt zu unterschiedlichen Preisen verkaufen', 'verschiedene Produkte zum gleichen Preis verkaufen', 'den Preis an die Konkurrenz anpassen', 'den Preis aus den Kosten berechnen'], e: '**Preisdifferenzierung** = das **gleiche Produkt zu unterschiedlichen Preisen** → mehr Kundensegmente angesprochen.' },
    { q: 'Ein Hotel verlangt in der **Hauptsaison** mehr als in der Nebensaison. Kriterium?', o: ['Zeitpunkt des Kaufs', 'Personen', 'Menge', 'Geografische Märkte'], e: '**Zeitpunkt des Kaufs**: Jahres- oder Tageszeit (Nachfrage schwankt) – Hotel Haupt-/Nebensaison.' },
    { q: 'Lidl-**«Milbona»**-Milch wird von einer Emmi-Tochter produziert, ist aber günstiger. Kriterium?', o: ['Kennzeichnung zur Wiedererkennung', 'Verpackung', 'Personen', 'Zeitpunkt des Kaufs'], e: '**Kennzeichnung zur Wiedererkennung**: Markenprodukte teurer als No-Name-/Eigenmarken.' },
    { q: 'Eine **Nespresso-Boutique** ist ein Beispiel für …', o: ['den direkten Absatzweg', 'den indirekten, mehrstufigen Absatzweg', 'den indirekten, einstufigen Absatzweg', 'Sponsoring'], e: 'Direkter Absatzweg: Hersteller selbst ist beim Verkauf in Kontakt mit den Endverbrauchern – z. B. Nespresso-Boutique.' },
    { q: 'Was ist eine **mehrstufige** Handelskette?', o: ['Produzent → Grosshandel → Detailhandel → Konsument', 'Produzent → Konsument', 'Produzent → Detailhandel → Konsument', 'Produzent → Online-Shop → Konsument'], e: 'Handelskette kann **einstufig** (nur Detailhandel) oder **mehrstufig** (Gross- + Detailhandel) sein.' },
    { q: '**E-Commerce** ist …', o: ['eine Variante des direkten Absatzweges', 'eine Variante des indirekten Absatzweges', 'ein Instrument der PR', 'eine Form der Preisdifferenzierung'], e: '**E-Commerce / Onlineshopping** = Direktverkauf übers Internet, eine **Variante des direkten Absatzweges**.' },
    { q: 'Eine **Rolex** gehört nicht in einen Discounter. Welches Kriterium für die Wahl des Absatzweges?', o: ['Produkteigenschaft (Image des Absatzkanals)', 'Anzahl Verkaufsstellen', 'Erfahrungen in der Distribution', 'Grösse der Unternehmung / Konkurrenz'], e: '**Produkteigenschaft** – Image des Absatzkanals: teure Qualitätsprodukte (Rolex) gehören nicht in Discounter, sondern in ausgewählte Verkaufsstellen.' },
    { q: 'Wofür steht das **D** in AIDA?', o: ['Desire (Wunsch)', 'Decision (Entscheidung)', 'Demand (Nachfrage)', 'Display (Verkaufsmaterial)'], e: '**D – Desire** (Wunsch): den Wunsch zum Kauf erzeugen.' },
    { q: 'Ein **TV-Sender** ist ein …', o: ['Werbeträger', 'Werbemittel', 'Instrument der Verkaufsförderung', 'Sponsoringpartner'], e: '**Werbeträger** = Plattform (das «Wo/Wodurch») – Zeitung, TV-Sender, Radiosender, Plakatwand, Instagram.' },
    { q: 'Ein **Werbespot** ist ein …', o: ['Werbemittel', 'Werbeträger', 'PR-Instrument', 'Absatzweg'], e: '**Werbemittel** = konkrete Form einer Werbebotschaft (das «Was») – Inserat, Werbespot, Plakat, Banner, Flyer.' },
    { q: '**Parfumwerbung** ist typischerweise …', o: ['suggestiv', 'informativ', 'Direktmarketing', 'Verkaufsförderung'], e: '**Suggestive Werbung** spricht Gefühle und Bedürfnisse an – z. B. Parfumwerbung.' },
    { q: 'Ein **Leitbild** mit unternehmerischen Zielen und Werten gehört zu …', o: ['PR (Public Relations)', 'Werbung', 'Verkaufsförderung', 'Sponsoring'], e: 'PR-Beispiele: **Leitbild**, Firmenporträt, Tag der offenen Tür, Events bei Produkteinführungen, Geschäftsberichte.' },
    { q: 'Eine **«3 für 2»-Aktion** gehört zu …', o: ['Verkaufsförderung', 'PR', 'Sponsoring', 'Werbung'], e: '**Verkaufsförderung** = kurzfristige Anreize – Beispiele: «3 für 2»-Aktion, Degustationsstand, Gratis-Muster, Gewinnspiel.' },
    { q: 'Was ist beim **Sponsoring** besonders wichtig?', o: ['der positive Imagetransfer', 'die sachliche Information', 'der Mengenrabatt', 'der direkte Absatzweg'], e: '**Positiver Imagetransfer** – das Image des Gesponserten geht auf die Marke über.' },
    { q: 'PR wirbt um …', o: ['Vertrauen in das Unternehmen (Ziel: gutes Image)', 'den Verkauf eines Produkts', 'kurzfristige Kaufanreize', 'tiefere Preise'], e: '**Werbung** wirbt für das **Produkt** (Ziel: Verkauf), **PR** wirbt um **Vertrauen in das Unternehmen** (Ziel: gutes Image).' },
    { q: 'Was ist **Direktmarketing**?', o: ['Zielgruppen werden direkt und einzeln angesprochen', 'Verkauf ohne Zwischenhandel', 'Werbung im Fernsehen', 'Werbung über Influencer/innen'], e: '**Direktmarketing** – Zielgruppen werden **direkt und einzeln** angesprochen (Post, Telefon/Internet, SMS).' },
    { q: 'Welche Kommunikation passt zur **Einführungsphase**?', o: ['Informative Werbung, Einführungsrabatte, Warenproben, Displays', 'Werbung zur Erinnerung, Eventmarketing', 'Totalausverkauf', 'neue Werbekampagne und Preisreduktion'], e: '**1. Einführung**: Informative Werbung, die auch emotional anspricht; Verkaufsförderung wie Einführungsrabatte, Warenproben, Displays.' },
  ],

  zuordnen: [
    { title: 'Zu welchem P gehört die Frage?', buckets: ['Product', 'Price', 'Place', 'Promotion'], items: [
      ['Wie sehen die Produkteigenschaften im Detail aus?', 0], ['Wie soll der Markenname gestaltet werden?', 0], ['Wie soll das Design aussehen?', 0], ['Wie soll die Verpackung gestaltet sein?', 0], ['Wie soll der Kundendienst ausgebaut werden?', 0],
      ['Wie hoch sollen die Verkaufspreise sein?', 1], ['Wie werden Preisermässigungen eingesetzt?', 1], ['Wie sollen die Zahlungsbedingungen gestaltet werden?', 1],
      ['Wie gelangen die Produkte zur Kundschaft?', 2], ['Wie hoch ist der optimale Lagerbestand?', 2], ['Wie wird der Transport organisiert?', 2],
      ['Wie wird über die Produkte informiert?', 3], ['Wie wird die Werbebotschaft gestaltet?', 3], ['Wie wird die Werbebotschaft vermittelt?', 3] ] },
    { title: 'Schwergewicht im Marketing-Mix', buckets: ['Product', 'Price', 'Place', 'Promotion'], items: [
      ['Markenartikel', 0], ['Red Bull', 0], ['Billigpreisstrategie', 1], ['easyJet, Denner, Aldi', 1], ['Frischprodukt', 2], ['Joghurt', 2], ['stark gesättigter Markt', 3], ['Waschmittel', 3] ] },
    { title: 'Produkte unterscheidbar machen', buckets: ['Produkt selbst (Design)', 'Kennzeichen', 'Verpackung', 'Zusatzleistungen', 'Mitarbeitende', 'Image'], items: [
      ['Coca-Cola-Flasche', 0], ['Porsche', 0], ['schlankes Aluminium-Gehäuse', 0],
      ['Nike-Swoosh', 1], ['Lacoste-Krokodil', 1], ['Apfel-Logo', 1],
      ['Toblerone-Dreiecksverpackung', 2], ['minimalistische weisse Box', 2],
      ['Garantieverlängerung beim Autohändler', 3], ['AppleCare, Genius Bar', 3], ['Finanzierung, Versicherungsofferten', 3],
      ['Fachgeschäft mit Beratung', 4], ['Beratung im Apple Store', 4],
      ['Victorinox, Rivella, Ricola → Schweizer Qualität', 5], ['innovativ, Premium', 5] ] },
    { title: 'Preisorientierung', buckets: ['Kostenorientierung', 'Wettbewerbsorientierung', 'Nachfrageorientierung'], items: [
      ['Preisuntergrenze = alle anfallenden Kosten, darauf ein Gewinn', 0], ['einfach, da die Kosten bekannt sind', 0], ['Güter mit hohem Nutzen und geringer Austauschbarkeit', 0], ['massgeschneiderte Kleider', 0],
      ['Preis an den Konkurrenzpreisen ausgerichtet: gleich hoch, höher oder tiefer', 1], ['einfach, da Konkurrenzpreise einen Vergleich bieten', 1], ['Güter des täglichen Bedarfs', 1], ['Margarine – Butter', 1],
      ['Kunden werden gefragt, ob sie zu einem bestimmten Preis kaufen würden', 2], ['man kennt die Zahlungsbereitschaft der Kundschaft', 2], ['bei gesättigten Märkten', 2] ] },
    { title: 'Kriterien der Preisdifferenzierung', buckets: ['Personen', 'Zeitpunkt des Kaufs', 'Menge', 'Geografische Märkte', 'Verpackung', 'Kennzeichnung'], items: [
      ['Jugend-Bankkonto', 0], ['Rabatt mit Lehrlings-/Studentenausweis', 0], ['Gruppenpreis Europapark-Fahrt ab 10 Personen', 0], ['Kino: Studierende CHF 16', 0],
      ['Hotel Haupt-/Nebensaison', 1], ['Spar-Billette ausserhalb Stosszeiten', 1], ['Kino: Dienstag Kinotag CHF 14', 1],
      ['Mengenrabatt für Grosskunden', 2], ['Kino: 10er-Abo günstiger', 2],
      ['Produkte in der Schweiz teurer als im Ausland', 3],
      ['Prix Garantie (Coop) / M-Budget (Migros)', 4], ['Alu-Dose statt Glasflasche', 4],
      ['Lidl «Milbona»-Milch von einer Emmi-Tochter', 5], ['Prix-Garantie-Rauchspeck von Bell (Coop)', 5] ] },
    { title: 'Direkter oder indirekter Absatzweg?', buckets: ['Direkter Absatzweg', 'Indirekter Absatzweg'], items: [
      ['Hofladen beim Bauern', 0], ['Massschneider', 0], ['Nespresso-Boutique', 0], ['Tesla', 0], ['Online-Shop des Herstellers', 0], ['hoher Erklärungsbedarf', 0], ['Spezialanfertigungen', 0], ['Verkauf über Automaten', 0],
      ['Coca-Cola via Migros/Coop', 1], ['Hersteller → Grosshändler → Kiosk', 1], ['Produkte für viele Kunden an vielen Orten', 1], ['Handelskette', 1], ['Produzent hat keinen Kontakt zu Endverbrauchern', 1] ] },
    { title: 'Werbemittel oder Werbeträger?', buckets: ['Werbemittel', 'Werbeträger'], items: [
      ['Inserat', 0], ['Werbespot', 0], ['Plakat', 0], ['Banner', 0], ['Flyer', 0], ['konkrete Form einer Werbebotschaft (das «Was»)', 0],
      ['Zeitung', 1], ['TV-Sender', 1], ['Radiosender', 1], ['Plakatwand', 1], ['Instagram', 1], ['Plattform, über die das Werbemittel zur Zielgruppe gelangt', 1] ] },
    { title: 'Informative oder suggestive Werbung?', buckets: ['Informative Werbung', 'Suggestive Werbung'], items: [
      ['sachliche Information über das Produkt überwiegt', 0], ['Preis, Eigenschaften, Fakten', 0], ['Prospekt mit technischen Daten eines Laptops', 0], ['Aktionsflyer mit Preisen', 0],
      ['spricht Gefühle und Bedürfnisse an', 1], ['manchmal sogar Manipulation', 1], ['Parfumwerbung', 1], ['Rivella «mach\'s zusammen»', 1], ['Bier-Werbung mit Freunden am See', 1] ] },
    { title: 'Instrumente der Kommunikationspolitik', buckets: ['Werbung', 'Verkaufsförderung', 'PR', 'Sponsoring'], items: [
      ['Verhaltensbeeinflussung', 0], ['Bekanntheitsgrad erhöhen', 0], ['Kaufhandlungen auslösen', 0], ['AIDA-Formel', 0],
      ['zeitlich begrenzte Anreize', 1], ['«3 für 2»-Aktion', 1], ['Degustationsstand im Coop', 1], ['Gewinnspiel', 1],
      ['Werben um Vertrauen in der Öffentlichkeit', 2], ['Leitbild', 2], ['Tag der offenen Tür', 2], ['Veröffentlichung von Geschäftsberichten', 2],
      ['finanzielle Unterstützung', 3], ['positiver Imagetransfer', 3], ['Sunrise mit Roger Federer', 3], ['PostFinance im Eishockey', 3] ] },
    { title: 'Arten der Verkaufsförderung', buckets: ['Preisorientiert', 'Zur Information', 'Zur Motivation', 'Zum Verkauf'], items: [
      ['Einführungsrabatte', 0], ['Aktionen mit Rabatten', 0], ['Liquidationsrabatte', 0],
      ['Handzettel', 1], ['Prospekt', 1], ['Gebrauchsanweisung', 1], ['Mailings', 1], ['Produktworkshops für den Handel', 1],
      ['Wettbewerb', 2], ['Muster', 2], ['Events', 2],
      ['Zugabe', 3], ['Gutschein', 3], ['Display (Point of Sale, POS)', 3] ] },
    { title: 'Wege der Werbebotschaft', buckets: ['Klassische Mediawerbung', 'Online-Werbung', 'Direktmarketing'], items: [
      ['Tages- und Wochenzeitungen', 0], ['Plakatwände', 0], ['Werbung auf Fahrzeugen', 0], ['Fernsehen, Radio, Kino', 0],
      ['Websites (Banner, Pop-ups)', 1], ['Social Media via Influencer/innen', 1], ['Apps und Games', 1], ['E-Mails (z. B. Newsletter)', 1],
      ['persönlich adressierte Werbesendungen per Post', 2], ['direkte Kontakte via Telefon', 2], ['direkte Kontakte per SMS', 2] ] },
    { title: 'Kommunikation im Produktlebenszyklus', buckets: ['Einführung', 'Wachstum und Reife', 'Sättigung', 'Relaunch oder Degeneration'], items: [
      ['Informative Werbung, die auch emotional anspricht', 0], ['Einführungsrabatte, Warenproben, Displays', 0],
      ['Werbung zur Erinnerung', 1], ['Eventmarketing', 1],
      ['neue Werbekampagne zur Erinnerung', 2], ['evtl. Preisreduktion, «3 für 2»', 2],
      ['Produktdifferenzierung', 3], ['Neulancierung', 3], ['Totalausverkauf', 3] ] },
  ],

  reihenfolge: [
    { title: 'Die AIDA-Formel', items: ['Attention (Aufmerksamkeit)', 'Interest (Interesse)', 'Desire (Wunsch)', 'Action (Handlung)'] },
    { title: 'AIDA – Rivella-Plakat «mach\'s zusammen»', items: ['Das Plakat mit der fröhlichen Jugendgruppe am Fotoautomaten fällt einer Passantin auf.', 'Sie findet die Werbung ansprechend, weil sie eine aktive, optimistische, kreative Lebenseinstellung zeigt.', 'Sie identifiziert sich mit diesen Werten und möchte das Getränk wieder einmal trinken.', 'Sie geht in den Supermarkt und kauft das Getränk.'] },
    { title: 'AIDA – Instagram-Werbung für Sneaker', items: ['Auffälliges Video mit neuem Sneaker im Feed stoppt das Scrollen.', 'Text zeigt besondere Dämpfung und limitierte Farbe.', 'Bekannter Influencer trägt ihn – man will ihn auch haben.', '«Jetzt kaufen»-Button mit 10 % Rabattcode → Bestellung.'] },
    { title: 'Indirekter, mehrstufiger Absatzweg', items: ['Produzent/in', 'Grosshandel', 'Detailhandel (Einzelhandel)', 'Konsument/in'] },
    { title: 'Kommunikation im Produktlebenszyklus', items: ['Informative Werbung, Einführungsrabatte, Warenproben', 'Werbung zur Erinnerung, Eventmarketing', 'neue Werbekampagne, evtl. Preisreduktion, «3 für 2»', 'Produktdifferenzierung, Neulancierung oder Totalausverkauf'] },
  ],
};

/* ================================================================== */
/*  RECHENAUFGABEN (Thema 1) – Formeln aus der Zusammenfassung         */
/* ================================================================== */
window.CALC = (function () {
  const rnd = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pick = (arr) => arr[rnd(0, arr.length - 1)];
  const r1 = (x) => Math.round(x * 10) / 10;
  const r2 = (x) => Math.round(x * 100) / 100;
  const fmt = (x, d) => x.toLocaleString('de-CH', { minimumFractionDigits: d || 0, maximumFractionDigits: d === undefined ? 2 : d });

  const MARKETS = [
    ['E-Bikes', 'Velotec AG'], ['Mineralwasser', 'Alpenquell AG'], ['Sportschuhe', 'Laufwerk AG'],
    ['Kaffeemaschinen', 'Brühwerk AG'], ['Glacé', 'Gletscherglück AG'], ['Kopfhörer', 'Klangraum AG'],
    ['Skibekleidung', 'Pistenstoff AG'], ['Energy-Drinks', 'Volt Getränke AG'],
  ];

  const types = [
    {
      id: 'marktanteil', name: 'Marktanteil',
      gen() {
        const [m, firm] = pick(MARKETS);
        const mv = rnd(20, 180);
        const u = r1(mv * rnd(40, 450) / 1000);
        const ans = r1(u / mv * 100);
        return {
          text: `Im Schweizer Markt für **${m}** erzielen alle Anbieter zusammen einen Umsatz von **CHF ${fmt(mv)} Mio.** Die ${firm} erzielt einen Umsatz von **CHF ${fmt(u, 1)} Mio.**\n\nBerechne den **Marktanteil** der ${firm}.`,
          fields: [{ label: 'Marktanteil', unit: '%', answer: ans, tol: 0.11 }],
          solution: `\`Marktanteil (%) = Umsatz des Unternehmens / Marktvolumen × 100\`\n\n${fmt(u, 1)} / ${fmt(mv)} × 100 = **${fmt(ans, 1)} %**`,
        };
      },
    },
    {
      id: 'saettigung', name: 'Sättigungsgrad',
      gen() {
        const [m] = pick(MARKETS);
        const mp = rnd(8, 40) * 10;
        const mv = rnd(Math.round(mp * 0.55), mp);
        const ans = r1(mv / mp * 100);
        const sat = ans > 90 ? 0 : 1;
        return {
          text: `Für **${m}** wird das Marktpotenzial auf **CHF ${fmt(mp)} Mio.** geschätzt. Tatsächlich wurden **CHF ${fmt(mv)} Mio.** umgesetzt.\n\nBerechne den **Sättigungsgrad** und beurteile den Markt.`,
          fields: [
            { label: 'Sättigungsgrad', unit: '%', answer: ans, tol: 0.11 },
            { label: 'Beurteilung', type: 'select', options: ['gesättigter Markt (Verdrängungsmarkt)', 'Wachstumsmarkt'], answer: sat },
          ],
          solution: `\`Sättigungsgrad (%) = Marktvolumen / Marktpotenzial × 100\`\n\n${fmt(mv)} / ${fmt(mp)} × 100 = **${fmt(ans, 1)} %** → ${sat === 0 ? '**über 90 %** → **gesättigter Markt** (Verdrängungsmarkt)' : '**unter 90 %** → **Wachstumsmarkt**'}`,
        };
      },
    },
    {
      id: 'umsatz', name: 'Umsatz Unternehmen',
      gen() {
        const [m, firm] = pick(MARKETS);
        const mv = rnd(20, 150);
        const ma = rnd(3, 45);
        const ans = r2(mv * ma / 100);
        return {
          text: `Das Marktvolumen für **${m}** beträgt **CHF ${fmt(mv)} Mio.** Die ${firm} hat einen Marktanteil von **${ma} %**.\n\nWie gross ist der **Umsatz** der ${firm}?`,
          fields: [{ label: 'Umsatz', unit: 'Mio. CHF', answer: ans, tol: 0.011 }],
          solution: `\`Umsatz Unternehmen = Marktvolumen × Marktanteil (%) / 100\`\n\n${fmt(mv)} × ${ma} / 100 = **CHF ${fmt(ans, 2)} Mio.**`,
        };
      },
    },
    {
      id: 'relativ', name: 'Relativer Marktanteil',
      gen() {
        const [m, firm] = pick(MARKETS);
        const own = rnd(5, 40);
        let rival = rnd(5, 40);
        if (rival === own) rival += 3;
        const ans = r2(own / rival);
        return {
          text: `Die ${firm} hat im Markt für **${m}** einen Marktanteil von **${own} %**. Der stärkste Konkurrent hat **${rival} %**.\n\nBerechne den **relativen Marktanteil** (2 Dezimalstellen) und beurteile die Stellung.`,
          fields: [
            { label: 'Relativer Marktanteil', unit: '', answer: ans, tol: 0.011 },
            { label: 'Marktführer?', type: 'select', options: ['Ja – man ist Marktführer', 'Nein'], answer: ans > 1 ? 0 : 1 },
          ],
          solution: `Relativer Marktanteil = eigener Marktanteil / Marktanteil des stärksten Konkurrenten\n\n${own} / ${rival} = **${fmt(ans, 2)}** → ${ans > 1 ? '**Wert > 1 = man ist Marktführer**' : 'Wert < 1 → kein Marktführer'}`,
        };
      },
    },
    {
      id: 'menge', name: 'Produktionsmenge',
      gen() {
        const [m, firm] = pick(MARKETS);
        const price = pick([12, 18, 25, 40, 60, 75, 120, 250, 480, 900]);
        const qty = rnd(4, 90) * 500;
        const goal = price * qty;
        return {
          text: `Die ${firm} plant für **${m}** ein Umsatzziel von **CHF ${fmt(goal)}**. Der Preis pro Stück beträgt **CHF ${fmt(price)}**.\n\nWie gross muss die **Produktionsmenge** sein?`,
          fields: [{ label: 'Produktionsmenge', unit: 'Stück', answer: qty, tol: 0.5 }],
          solution: `\`Produktionsmenge = Umsatzziel (CHF) / Preis pro Stück\`\n\n${fmt(goal)} / ${fmt(price)} = **${fmt(qty)} Stück**`,
        };
      },
    },
    {
      id: 'umfrage', name: 'Klassenumfrage (alles)',
      gen() {
        const brands = ['iPhone', 'Samsung', 'Google Pixel'];
        const brand = pick(brands);
        const n = rnd(18, 28);
        const mv = rnd(Math.max(12, n - 6), n);
        const k = rnd(Math.round(mv * 0.25), Math.round(mv * 0.7));
        const ma = r1(k / mv * 100);
        const sg = r1(mv / n * 100);
        return {
          text: `Wie im Rechenbeispiel aus dem Dossier: Eine Klasse hat **${n} Personen**. **${mv}** davon haben ein Smartphone, **${k}** haben ein **${brand}**.\n\nBestimme Marktpotenzial, Marktvolumen, Marktanteil ${brand} und Sättigungsgrad.`,
          fields: [
            { label: 'Marktpotenzial', unit: 'Personen', answer: n, tol: 0.5 },
            { label: 'Marktvolumen', unit: 'Personen', answer: mv, tol: 0.5 },
            { label: `Marktanteil ${brand}`, unit: '%', answer: ma, tol: 0.11 },
            { label: 'Sättigungsgrad', unit: '%', answer: sg, tol: 0.11 },
            { label: 'Beurteilung', type: 'select', options: ['gesättigter Markt', 'Wachstumsmarkt'], answer: sg > 90 ? 0 : 1 },
          ],
          solution: `- Marktpotenzial = ${n}\n- Marktvolumen = ${mv}\n- Marktanteil ${brand} = ${k} / ${mv} × 100 = **${fmt(ma, 1)} %**\n- Sättigungsgrad = ${mv} / ${n} × 100 = **${fmt(sg, 1)} %** → ${sg > 90 ? 'gesättigter Markt' : 'Wachstumsmarkt'}`,
        };
      },
    },
  ];

  return { types };
})();
