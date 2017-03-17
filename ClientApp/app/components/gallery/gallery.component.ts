import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'gallery',
	host: { '(window:keydown)': 'hotkeys($event)' },
	template: `
	<div class="modal fade" id="selectedImageModal" >
	  <div class="modal-dialog" role="document">
		<div class="modal-content">
		  <div class="modal-body">
			<div class="selectedImage" *ngIf="selectedImage">
                                <img src="{{selectedImage.url}}" >
<div class="arrow-back" (click)=navigate(false)>
      &lt;
   </div>
   <div class="arrow-forward" (click)=navigate(true)>
      &gt;
   </div>
			   <div class="caption">
				  <p><strong>{{selectedImage.title}}</strong></p>
				  <p>{{selectedImage.caption}}</p>
			   </div>
			</div>
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
i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
	ul { padding:0; width:780px; margin:20px auto}
	li { display:inline;}
		.tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
		}
img {
    position: relative;
	max-width: 100%;
	max-height: 100%;
}
	.modal-content {
		width: 670px !important;
        height: 670px !important;
        background: antiquewhite
	}
	.selectedImage{ 
		width:640px;
		position:relative }
	.caption{
		position:absolute;
		width:100%;
		bottom:0;
		opacity:0.5;
		background-color:black;
		color:white;
		padding:5px;
		font-family:verdana;
		font-size:12px;
	}
	p {
	   -webkit-margin-before: 5px !important;
	   -webkit-margin-after: 5px !important;
	}
.arrow-back, .arrow-forward{
	position:absolute;
	opacity:0.5;
	top:50%;
	color:whitesmoke;
	font-weight:900;
    font-size: xx-large;
	cursor:pointer;
}
.arrow-left{
	margin-left:5px;
}
.arrow-forward{
    margin-right:5px;
	right:0;
}
  `]
})

    
export class GalleryComponent {

	@Input() datasource;
	selectedImage;

	constructor(private http: Http) {
		this.http.get('/api/gallery/photo').subscribe(result => {
			this.datasource = result.json();
		});
	}

	setSelectedImage(image) {
		this.selectedImage = image;
	}

	navigate(forward) {
		var index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
		if (index >= 0 && index < this.datasource.length) {
			this.selectedImage = this.datasource[index];
		}
	}

	hotkeys(event) {
		if (this.selectedImage) {
			if (event.keyCode == 37) {
				this.navigate(false);
			} else if (event.keyCode == 39) {
				this.navigate(true);
			}
		}
	}
}