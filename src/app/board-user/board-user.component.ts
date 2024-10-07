import { Component } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  searchTerm: string = '';
  users = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', role: 'Admin' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', role: 'User' },
    { firstName: 'Mike', lastName: 'Johnson', email: 'mike.johnson@example.com', role: 'Editor' }
  ];

  editUser(user: any) {
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
  }

  filteredUsers() {
    return this.users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const searchTermLower = this.searchTerm.toLowerCase();

      return (
        fullName.includes(searchTermLower) ||
        user.email.toLowerCase().includes(searchTermLower) ||
        user.role.toLowerCase().includes(searchTermLower)
      );
    });
  }
}
