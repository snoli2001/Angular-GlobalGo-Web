import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MotoStateService } from '../../../states/moto.state.service';
import { CategoryService } from '../../../services/categories.service';
import { ICategory } from '../../../models/Categories';
@Component({
  selector: 'app-filter-by-categories',
  standalone: true,
  imports: [AccordionModule,ClearFilterComponent,DropdownModule,FormsModule],
  templateUrl: './filter-by-categories.component.html',
  styleUrl: './filter-by-categories.component.css'
})
export class FilterByCategoriesComponent {
  public selectedCategory:ICategory = {} as ICategory;
  public categories: ICategory[];
  constructor(private categoryService:CategoryService, private motoServiceState:MotoStateService){
    this.categories = [];
    this.getData();
  }

  handleFilter(){
    this.motoServiceState.orderByCategories(this.selectedCategory.categoria);
  }

  async getData() {
    try {
      this.categories = await this.categoryService.FetchCategories();
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

}
