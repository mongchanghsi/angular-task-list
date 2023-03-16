import { Routes } from "@angular/router";
import { AboutComponent } from "../components/about/about.component";
import { TasklistComponent } from "../components/tasklist/tasklist.component";

export const appRoutes: Routes = [
  { path: '', component: TasklistComponent },
  { path: 'about', component: AboutComponent },
];