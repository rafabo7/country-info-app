import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
})
export class HomePage {}
