import { Component } from '@angular/core';
import { CourseCoupon } from './course-coupon.model';

@Component({
  selector: 'app-udemy-coupons',
  templateUrl: './udemy-coupons.component.html',
  styleUrls: ['./udemy-coupons.component.scss']
})
export class UdemyCouponsComponent {

  today: string;
  yesterday: string;
  dayBeforeYesterday: string;

  tabs: string[];
  defaultTabIndex: number;

  data: CourseCoupon[];

  constructor() {

    this.today = new Date().toDateString().substring(4, 10);
    this.yesterday = new Date(Date.now() - 864e5).toDateString().substring(4, 10);
    this.dayBeforeYesterday = new Date(Date.now() - 2 * 864e5).toDateString().substring(4, 10);

    this.tabs = [this.dayBeforeYesterday, this.yesterday, this.today];
    this.defaultTabIndex = 2;

    this.data = [
      {
        title: "Python Network Programming for Network Engineers (Python 3)",
        url: "https://www.udemy.com/course/python-network-programming-for-network-engineers-python-3/?couponCode=PYTHONNOW"
      },
      {
        title: "Shopify Bootcamp: Increase Your Sales and Conversion rate",
        url: "https://www.udemy.com/course/shopify-bootcamp-increase-your-sales-and-conversion-rate/?couponCode=CEDC008E411DDFF9B851"
      },
      {
        title: "Linear Programming in Data Science: College/University Level",
        url: "https://www.udemy.com/course/linear-programming-for-data-science/?couponCode=1F7AFDD175012084E536"
      },
      {
        title: "HTML & CSS – Certification Course for Beginners",
        url: "https://www.udemy.com/course/html-css-certification-course-for-beginners-e/?couponCode=82036B5C06C5C98711E5"
      }
    ];

  }

  onTabChange(index: number) {
    console.log(index);
  }


}
