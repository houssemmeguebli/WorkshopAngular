import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {Universite} from "../_models/universityModel";
import {UniversityServiceService} from "../_services/university-service.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {
  universities: Universite[] = [];
  displayedColumns: string[] = ['idUniversite', 'nomUniversite', 'adresse', 'actions'];

  constructor(
    private universityService: UniversityServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUniversities();
  }

  getUniversities(): void {
    this.universityService.retrieveAllUniversities().subscribe(
      (data) => {
        this.universities = data;
      },
      (error) => {
        console.error('Error fetching universities', error);
      }
    );
  }

  // View details action
  viewDetails(university: Universite): void {
    Swal.fire({
      title: university.nomUniversite,
      text: `Address: ${university.adresse}`,
      icon: 'info',
      confirmButtonText: 'Close'
    });
  }

  // Edit action


  // Delete action
  deleteUniversity(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this university?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.universityService.desaffecterFoyerAUniversite(id).subscribe(
          () => {
            this.getUniversities(); // Refresh the list after deletion
            Swal.fire('Deleted!', 'University has been deleted.', 'success');
          },
          (error) => {
            console.error('Error deleting university', error);
            Swal.fire('Error', 'Failed to delete the university.', 'error');
          }
        );
      }
    });
  }
}
