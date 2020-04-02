export type Employee = {
  employee_id: number;
  firstname: string;
  lastname: string;
  email: string;
  createdby: number;
  updatedby: number;
}

export type Query = {
  allEmployees: Employee[];
}
