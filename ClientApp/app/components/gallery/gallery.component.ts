import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'gallery',
	host: { '(window:keydown)': 'hotkeys($event)' },
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
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