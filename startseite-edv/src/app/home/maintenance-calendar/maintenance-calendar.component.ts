import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { map, Observable, of } from 'rxjs';
import { CollapsibleCardComponent } from "../../components/collapsible-card/collapsible-card.component";

interface MaintenanceElement {
  id: string,
  from: string,
  to: string,
  maintenanceStatus: string,
  maintenanceUpdate: string,
  system: string,
  reason: string,
  contacts: string,
  tel: string
}

const DATA: MaintenanceElement[] = [
      {
        id: "719",
        from: "11.01.2025 / 20:00",
        to: "12.01.2025 / 01:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "03.01.2025 12:11:01",
        system: "PAS (LSA)",
        reason: "Wartungsarbeiten",
        contacts: "Carolin Bofinger ",
        tel: "7518"
      },
      {
        id: "707",
        from: "15.01.2025 / 08:00",
        to: "15.01.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:42:30",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "612",
        from: "15.01.2025 / 16:30",
        to: "15.01.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "09.01.2024 08:18:01",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 24-09",
        contacts: "Sonja Nikolov & Timo Priester",
        tel: "05661/ 72-7572"
      },
      {
        id: "720",
        from: "18.01.2025 / 07:00",
        to: "19.01.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "03.01.2025 12:14:50",
        system: "PAS (LSA)",
        reason: "Wartungsarbeiten",
        contacts: "Carolin Bofinger ",
        tel: "7518"
      },
      {
        id: "708",
        from: "19.02.2025 / 08:00",
        to: "19.02.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:44:34",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "613",
        from: "19.02.2025 / 16:30",
        to: "19.02.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "09.01.2024 08:20:16",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 24-10",
        contacts: "Sonja Nikolov & Timo Priester",
        tel: "05661/ 72-7572"
      },
      {
        id: "709",
        from: "19.03.2025 / 08:00",
        to: "19.03.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:45:14",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "614",
        from: "19.03.2025 / 16:30",
        to: "19.03.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "09.01.2024 08:20:16",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-01",
        contacts: "Sonja Nikolov & Timo Priester",
        tel: "05661/ 72-7572"
      },
      {
        id: "710",
        from: "16.04.2025 / 08:00",
        to: "16.04.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:45:25",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "697",
        from: "07.05.2025 / 16:30",
        to: "07.05.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:16:52",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-02",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
      },
      {
        id: "711",
        from: "21.05.2025 / 08:00",
        to: "21.05.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:46:11",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "698",
        from: "11.06.2025 / 16:30",
        to: "11.06.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:20:18",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-03",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
      },
      {
        id: "712",
        from: "18.06.2025 / 08:00",
        to: "18.06.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:46:34",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
      },
      {
        id: "713",
        from: "16.07.2025 / 08:00",
        to: "16.07.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:46:57",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    },
    {
        id: "699",
        from: "16.07.2025 / 16:30",
        to: "16.07.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:21:42",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-04",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
    },
    {
        id: "714",
        from: "20.08.2025 / 08:00",
        to: "20.08.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:47:14",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    },
    {
        id: "700",
        from: "20.08.2025 / 16:30",
        to: "20.08.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:22:44",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-05",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
    },
    {
        id: "715",
        from: "17.09.2025 / 08:00",
        to: "17.09.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:47:57",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    },
    {
        id: "701",
        from: "24.09.2025 / 16:30",
        to: "24.09.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:23:46",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-06",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
    },
    {
        id: "716",
        from: "15.10.2025 / 08:00",
        to: "15.10.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:48:21",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    },
    {
        id: "702",
        from: "29.10.2025 / 16:30",
        to: "29.10.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:25:31",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-07",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
    },
    {
        id: "717",
        from: "19.11.2025 / 08:00",
        to: "19.11.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:48:45",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    },
    {
        id: "703",
        from: "26.11.2025 / 16:30",
        to: "26.11.2025 / 18:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:28:58",
        system: "SAP Produktivsysteme ohne HCM",
        reason: "Sprint 25-08",
        contacts: "Timo Priester",
        tel: "05661/ 72-7276"
    },
    {
        id: "718",
        from: "17.12.2025 / 08:00",
        to: "17.12.2025 / 14:00",
        maintenanceStatus: "Geplant",
        maintenanceUpdate: "18.12.2024 14:49:17",
        system: "R/3 CU Systeme (CRQ[RWWS],DG1[GATP],DE0[FICO-EH],CS0[F&R])",
        reason: "Wartungsarbeiten (Patchfenster)",
        contacts: "Edeka IT (Judith Hasenstab)",
        tel: "40 6377 - 1652"
    }
];

function getMonday() {
  let d = new Date();
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}


@Component({
  selector: 'app-maintenance-calendar',
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatIconModule, CommonModule, CollapsibleCardComponent],
  templateUrl: './maintenance-calendar.component.html',
  styleUrl: './maintenance-calendar.component.scss'
})
export class MaintenanceCalendarComponent {
  displayedColumns: string[] = [
    'from', 
    'to', 
    'system',
    'id',
  ];
  dataSource = DATA;

  filteredData$ = of(DATA).pipe(
    map(data => data.filter(item => {
      const now = new Date().getTime();
      const inAMonth = now + (24 * 60 * 60 * 1000) * 30;

      const from = this.parseTime(item.from).getTime();
      const to = this.parseTime(item.to).getTime();
      return now < to && from < inAMonth;
    }))
  );

  parseTime(str: string): Date {
    let parts = [];
    for (let part of str.split("/")) {
        parts.push(part.trim());
    }
  
    let dateParts = parts[0].split(".");
    return new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${parts[1]}:00`);
  }

  

  checkDanger(row: MaintenanceElement) {
    const from = this.parseTime(row.from).getTime();
    const to = this.parseTime(row.to).getTime();
    const now = new Date().getTime();
    return (now > from && now < to);
  }

  checkWarning(row: MaintenanceElement) {
    const from = this.parseTime(row.from).getTime();
    const to = this.parseTime(row.to).getTime();
    const mon = getMonday().getTime();
    const son = getMonday().getTime() + (24 * 60 * 60 * 1000) * 6; // +6 Tage
    //return mon < from && from < son && mon < to;
    return true;
  }


}
