import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CollapsibleCardComponent } from "../../components/collapsible-card/collapsible-card.component";

interface PageNode {
  id: string;
  text: string;
  icon: string;
  nodes?: PageNode[];
}

const DATA: PageNode[] = [
  
    {
        "id": "200266671",
        "text": "Digitaler Arbeitsplatz",
        "icon": "",
        "nodes": [
            {
                "id": "200266681",
                "text": "Anleitungen / Schulungsmaterial (DA)",
                "icon": "",
                "nodes": [
                    {
                        "id": "231637611",
                        "text": "Daten-Transfer auf neuen PC/Notebook durchführen (DA)",
                        "icon": ""
                    },
                    {
                        "id": "222305327",
                        "text": "Standard-Drucker abändern (Drucker ist bereits installiert)",
                        "icon": ""
                    },
                    {
                        "id": "231643245",
                        "text": "Scanner am Drucker einrichten (DA)",
                        "icon": ""
                    },
                    {
                        "id": "226144460",
                        "text": "Energiesparoptionen einstellen / Zuklapp-Verhalten Notebook einstellen (DA)",
                        "icon": ""
                    },
                    {
                        "id": "231640278",
                        "text": "IBM Notes Einrichtung auf neuem Laptop (DA)",
                        "icon": ""
                    },
                    {
                        "id": "231643811",
                        "text": "Microsoft Teams installieren (DA)",
                        "icon": ""
                    },
                    {
                        "id": "231638829",
                        "text": "Abbau des alten Computers, anschließen der Docking-Station und einstellen der Monitore",
                        "icon": ""
                    },
                    {
                        "id": "231653431",
                        "text": "WLAN Hamburg - EGast Anmeldung",
                        "icon": ""
                    },
                    {
                        "id": "244525355",
                        "text": "\"Windows Updates\" selbst durchführen",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266683",
                "text": "FAQ Häufige Fragen / Probleme (DA)",
                "icon": "",
                "nodes": [
                    {
                        "id": "222298493",
                        "text": "Drucker druckt nicht - Authentifizierung",
                        "icon": ""
                    },
                    {
                        "id": "200274583",
                        "text": "Scanner Kennwort Änderung",
                        "icon": ""
                    },
                    {
                        "id": "226140317",
                        "text": "Office Makros deaktiviert / blockiert (=>aktivieren)",
                        "icon": ""
                    },
                    {
                        "id": "222305345",
                        "text": "Standard-Programme für Dateien einstellen",
                        "icon": ""
                    },
                    {
                        "id": "217876517",
                        "text": "VPN / Teams / Netzlaufwerk Probleme lösen",
                        "icon": ""
                    },
                    {
                        "id": "255430846",
                        "text": "Outlook/ Mail \"gelesen Markierung\" deaktivieren",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266685",
                "text": "Know-How / Tipps & Tricks (DA)",
                "icon": "",
                "nodes": [
                    {
                        "id": "231643537",
                        "text": "Einrichten der Monitore",
                        "icon": ""
                    }
                ]
            }
        ]
    },
    {
        "id": "231647067",
        "text": "Informationen (Ehemalig Notes)",
        "icon": "",
        "nodes": [
            {
                "id": "231647674",
                "text": "(STOP-Datenbank) EDV",
                "icon": "",
                "nodes": [
                    {
                        "id": "231647679",
                        "text": "(STOP-Datenbank) Lotus Notes",
                        "icon": ""
                    },
                    {
                        "id": "231647677",
                        "text": "(STOP-Datenbank) SAP",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231647070",
                "text": "Allgemeine Informationen",
                "icon": ""
            },
            {
                "id": "231647385",
                "text": "Betr. Gesundheitsförd.",
                "icon": ""
            },
            {
                "id": "231647485",
                "text": "Datenschutz",
                "icon": ""
            },
            {
                "id": "231648810",
                "text": "EHG Melsungen",
                "icon": "",
                "nodes": [
                    {
                        "id": "231648815",
                        "text": "Formulare",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231648819",
                "text": "Fleischwerk",
                "icon": "",
                "nodes": [
                    {
                        "id": "231648821",
                        "text": "Einstellungsleitfäden(Fleischwerk)",
                        "icon": ""
                    },
                    {
                        "id": "231648824",
                        "text": "Formulare(Fleischwerk)",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231648750",
                "text": "Marktkauf",
                "icon": "",
                "nodes": [
                    {
                        "id": "231648768",
                        "text": "ExplosivstoffVO(Marktkauf)",
                        "icon": ""
                    },
                    {
                        "id": "231648762",
                        "text": "Kassen-Nachschau(Marktkauf)",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231647454",
                "text": "Personalabteilung",
                "icon": ""
            },
            {
                "id": "231647378",
                "text": "Personalentwicklung",
                "icon": ""
            },
            {
                "id": "231648262",
                "text": "Rheika-Delta",
                "icon": "",
                "nodes": [
                    {
                        "id": "231648608",
                        "text": "Bildungswesen",
                        "icon": ""
                    },
                    {
                        "id": "231648648",
                        "text": "EBUSwin SBW",
                        "icon": ""
                    },
                    {
                        "id": "231648322",
                        "text": "Einstellungsleitfäden",
                        "icon": "",
                        "nodes": [
                            {
                                "id": "231648387",
                                "text": "R/D-Aushilfen",
                                "icon": ""
                            },
                            {
                                "id": "231648324",
                                "text": "R/D-Märkte",
                                "icon": ""
                            },
                            {
                                "id": "231648337",
                                "text": "R/D-Zentrale",
                                "icon": ""
                            }
                        ]
                    },
                    {
                        "id": "231648736",
                        "text": "ExplosivstoffVO",
                        "icon": ""
                    },
                    {
                        "id": "231648264",
                        "text": "Kassen-Nachschau",
                        "icon": ""
                    },
                    {
                        "id": "231648602",
                        "text": "Lohn und Gehalt",
                        "icon": ""
                    },
                    {
                        "id": "231648283",
                        "text": "Personal",
                        "icon": ""
                    },
                    {
                        "id": "231648706",
                        "text": "Unfallanzeige",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231648033",
                "text": "SB-Union",
                "icon": "",
                "nodes": [
                    {
                        "id": "231648203",
                        "text": "SB Union-Zentrale",
                        "icon": ""
                    },
                    {
                        "id": "231648038",
                        "text": "SB Union Märkte",
                        "icon": ""
                    }
                ]
            }
        ]
    },
    {
        "id": "200265938",
        "text": "Lotus Notes",
        "icon": "",
        "nodes": [
            {
                "id": "200266578",
                "text": "Anleitungen / Schulungsmaterial (LN)",
                "icon": "",
                "nodes": [
                    {
                        "id": "231667614",
                        "text": "E-Mails entschlüsseln",
                        "icon": ""
                    },
                    {
                        "id": "226144354",
                        "text": "IBM Notes Einrichtung auf neuem Laptop",
                        "icon": ""
                    },
                    {
                        "id": "244537805",
                        "text": "Lotus Notes ARCHIV zum Übergang auf Netzlaufwerk sichern",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266587",
                "text": "FAQ : Häufige Probleme / Fragen (LN)",
                "icon": ""
            },
            {
                "id": "200266589",
                "text": "Know-How / Tipps & Tricks (LN)",
                "icon": ""
            }
        ]
    },
    {
        "id": "231669178",
        "text": "Microsoft Excel",
        "icon": "",
        "nodes": [
            {
                "id": "231669180",
                "text": "Anleitungen / Schulungsmaterial (ME)",
                "icon": "",
                "nodes": [
                    {
                        "id": "244530733",
                        "text": "Office Makros deaktiviert",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231669182",
                "text": "FAQ Häufige Probleme / Fragen (ME)",
                "icon": "",
                "nodes": [
                    {
                        "id": "244534158",
                        "text": "SAP Analysis for Office fehlt.",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "231669185",
                "text": "Know-How / Tipps & Tricks (ME)",
                "icon": ""
            }
        ]
    },
    {
        "id": "244538025",
        "text": "Microsoft OneDrive",
        "icon": "",
        "nodes": [
            {
                "id": "244538028",
                "text": "Anleitungen / Schulungsmaterial (MOD)",
                "icon": "",
                "nodes": [
                    {
                        "id": "244537901",
                        "text": "Browser-Lesezeichen/Favoriten in \"OneDrive\" sichern: Google Chrome | Mozilla Firefox | Microsoft Edge",
                        "icon": ""
                    },
                    {
                        "id": "244535668",
                        "text": "Datensicherung mit Microsoft \"OneDrive\" verwenden",
                        "icon": ""
                    },
                    {
                        "id": "255427178",
                        "text": "Lotus Notes ARCHIV zum Übergang auf Netztlaufwerk sichern (MOD)",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "244538030",
                "text": "FAQ Häufige Probleme / Fragen (MOD)",
                "icon": ""
            },
            {
                "id": "244538032",
                "text": "Know-How / Tipps & Tricks (MOD)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200266814",
        "text": "Microsoft Outlook",
        "icon": "",
        "nodes": [
            {
                "id": "200266818",
                "text": "Anleitung / Schulungsmaterial (MO)",
                "icon": ""
            },
            {
                "id": "200266820",
                "text": "FAQ Häufige Probleme / Fragen (MO)",
                "icon": ""
            },
            {
                "id": "200266822",
                "text": "Know-How / Tipps & Tricks (MO)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200266639",
        "text": "Microsoft Share Point",
        "icon": "",
        "nodes": [
            {
                "id": "200266654",
                "text": "Anleitung / Schulungsmaterial (MSP)",
                "icon": "",
                "nodes": [
                    {
                        "id": "217881014",
                        "text": "MS: Teams Test Hierarchie",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266656",
                "text": "FAQ Häufige Probleme / Fragen (MSP)",
                "icon": ""
            },
            {
                "id": "200266658",
                "text": "Know-How / Tipps & Tricks (MSP)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200265942",
        "text": "Microsoft Teams",
        "icon": "",
        "nodes": [
            {
                "id": "200266605",
                "text": "Anleitungen / Schulungsmaterial (MT)",
                "icon": "",
                "nodes": [
                    {
                        "id": "255445331",
                        "text": "Teams zurücksetzen",
                        "icon": ""
                    },
                    {
                        "id": "231643749",
                        "text": "Microsoft Teams installieren (MT)",
                        "icon": ""
                    },
                    {
                        "id": "231668452",
                        "text": "Teams NEW",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266608",
                "text": "FAQ Häufige Probleme / Fragen (MT)",
                "icon": "",
                "nodes": [
                    {
                        "id": "231640243",
                        "text": "VPN / Teams / Netzlaufwerk Probleme lösen (MT)",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266610",
                "text": "Know-How / Tipps & Tricks (MT)",
                "icon": ""
            }
        ]
    },
    {
        "id": "231669165",
        "text": "Microsoft Word",
        "icon": "",
        "nodes": [
            {
                "id": "231669167",
                "text": "Anleitungen / Schulungsmaterial (MW)",
                "icon": ""
            },
            {
                "id": "231669169",
                "text": "FAQ Häufige Probleme / Fragen (MW)",
                "icon": ""
            },
            {
                "id": "231669172",
                "text": "Know-How / Tipps & Tricks (MW)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200266667",
        "text": "OTRS",
        "icon": "",
        "nodes": [
            {
                "id": "200266688",
                "text": "Anleitungen / Schulungsmaterial (OTRS)",
                "icon": "",
                "nodes": [
                    {
                        "id": "226132943",
                        "text": "OTRS - Agent Dashboard einrichten",
                        "icon": ""
                    },
                    {
                        "id": "226132978",
                        "text": "OTRS - Agent Telefonticket erstellen",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266690",
                "text": "FAQ Häufige Probleme / Fragen (OTRS)",
                "icon": ""
            },
            {
                "id": "200266692",
                "text": "Know-How / Tipps & Tricks (OTRS)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200266826",
        "text": "SAP",
        "icon": "",
        "nodes": [
            {
                "id": "200266831",
                "text": "Anleitungen / Schulungsmaterial (SAP)",
                "icon": ""
            },
            {
                "id": "200266834",
                "text": "FAQ Häufige Probleme / Fragen (SAP)",
                "icon": ""
            },
            {
                "id": "200266836",
                "text": "Know-How / Tipps & Tricks (SAP)",
                "icon": ""
            }
        ]
    },
    {
        "id": "200266677",
        "text": "Telefon Client",
        "icon": "",
        "nodes": [
            {
                "id": "200266740",
                "text": "Anleitungen / Schulungsmaterial (TC)",
                "icon": "",
                "nodes": [
                    {
                        "id": "231662833",
                        "text": "Anrufumleitung bei Abwesenheit",
                        "icon": ""
                    },
                    {
                        "id": "231663817",
                        "text": "Anwesenheitsabgleich XPhone und Teams",
                        "icon": ""
                    },
                    {
                        "id": "231648374",
                        "text": "Benutzeranleitung Telefon Client \"XPhone\"",
                        "icon": ""
                    }
                ]
            },
            {
                "id": "200266742",
                "text": "FAQ Häufige Probleme / Fragen (TC)",
                "icon": ""
            },
            {
                "id": "200266745",
                "text": "Know-How / Tipps & Tricks (TC)",
                "icon": ""
            }
        ]
    }
]


@Component({
  selector: 'app-knowledge-db',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatListModule, CollapsibleCardComponent],
  templateUrl: './knowledge-db.component.html',
  styleUrl: './knowledge-db.component.scss'
})
export class KnowledgeDbComponent {
  childrenAccessor = (node: PageNode) => node.nodes ?? [];

  dataSource = DATA;

  hasChild = (_: number, node: PageNode) => !!node.nodes && node.nodes.length > 0;
}

