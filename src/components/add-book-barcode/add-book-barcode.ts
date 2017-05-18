import { Component } from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import { BookDataServiceProvider } from '../../providers/book-data.service/book-data.service';
import { AddbookconfirmationPage } from "../../pages/addbookconfirmation/addbookconfirmation";
import { NavController } from "ionic-angular";

/**
 * Generated class for the AddBookBarcodeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-book-barcode',
  templateUrl: 'add-book-barcode.html'
})
export class AddBookBarcodeComponent {


  constructor(public navCtrl: NavController,private barcodeScanner : BarcodeScanner, private bookDataService: BookDataServiceProvider) {
    
    this.bookDataService = bookDataService;

    this.barcodeScanner.scan().then((barcodeData) => {
        // success
          this.bookDataService.getBookByIsbn(parseInt(barcodeData.text)).then(data => {
          console.log(data);
          if (data) {
            this.navCtrl.push(AddbookconfirmationPage, data[0].volumeInfo);
          }
          else {
            alert("No Book found");
          }
        });
    }, (err) => {
        //  error
        alert("Error while scanning barcode");
    });
  }

}
