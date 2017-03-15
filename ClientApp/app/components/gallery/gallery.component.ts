import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'gallery',
	template: `
	<div class="modal fade" id="selectedImageModal" >
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
		  <div class="modal-body">
			 <img *ngIf="selectedImage" src="{{selectedImage.url}}" >
		  </div>
		</div>
	  </div>
	</div>
	<ul id="thumbnailsList">
	   <li *ngFor="let image of datasource" >
		  <img src="{{image.url}}" class="tn"
		  width="191" height="146"  
		  data-toggle="modal" data-target="#selectedImageModal"
				  (click)=setSelectedImage(image)>
	   </li>
	</ul>
  `,
	styles: [`
	ul { padding:0; width:780px; margin:20px auto}
	li { display:inline;}
		.tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
		}
	.modal-content {
		width: 670px !important;
	}
  `]
})
export class GalleryComponent {

	@Input() datasource;
	selectedImage;

	constructor(private http: Http) {
		//this.datasource = [
		//	{ "url": "http://lorempixel.com/output/city-q-c-1920-1920-9.jpg" },
		//	{ "url": "http://lorempixel.com/output/sports-q-c-1920-1920-2.jpg" },
		//	{ "url": "http://lorempixel.com/output/animals-q-c-1920-1920-8.jpg" },
		//	{ "url": "http://lorempixel.com/output/city-q-c-1920-1920-5.jpg" },
		//	{ "url": "http://lorempixel.com/output/nature-q-c-1920-1920-7.jpg" },
		//	{ "url": "http://lorempixel.com/output/abstract-q-c-1920-1920-8.jpg" },
		//	{ "url": "http://lorempixel.com/output/nature-q-c-1920-1920-1.jpg" },
		//	{ "url": "http://lorempixel.com/output/people-q-c-1920-1920-7.jpg" },
		//	{ "url": "http://lorempixel.com/output/animals-q-c-1920-1920-1.jpg" },
		//	{ "url": "http://lorempixel.com/output/technics-q-c-1920-1920-8.jpg" },
		//	{ "url": "http://lorempixel.com/output/abstract-q-c-1920-1920-1.jpg" },
		//	{ "url": "http://lorempixel.com/output/food-q-c-1920-1920-9.jpg" }
		//];

		this.http.get('/api/gallery/photo').subscribe(result => {
			this.datasource = result.json();
		});
	}

	setSelectedImage(image) {
		this.selectedImage = image;
	}
}