import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecw-widget-library';
  visible = false;
  tableHeader = ['Sr No.', 'Name', 'Phone No', 'Email', 'City', 'Bill Amount'];
  rawData = [
    {
      id: 1,
      name: 'WILLIAMS, John WILLIAMS, John WILLIAMS, John WILLIAMS, John',
      phoneNumber: '431-666-5404',
      email: 'john@email.com',
      city: 'Coltan, WV',
      billAmount: '$3127.00',
    },
    {
      id: 2,
      name: 'WILLIAMS, John',
      phoneNumber: '431-666-5404',
      email: 'john@email.com',
      city: 'ColtMan, WV',
      billAmount: '$3127.00',
    },
    {
      id: 3,
      name: 'WILLIAMS, John',
      phoneNumber: '431-666-5404',
      email: 'john@email.com',
      city: 'ColtMan, WV ColtMan, WV ColtMan, WV ColtMan, WV',
      billAmount: '$3127.00',
    },
    {
      id: 4,
      name: 'WILLIAMS, John',
      phoneNumber: '431-666-5404',
      email: 'john@email.com',
      city: 'ColtMan, WV',
      billAmount: '$3127.00',
    },
    {
      id: 5,
      name: 'WILLIAMS, John',
      phoneNumber: '431-666-5404',
      email: 'john@email.com',
      city: 'ColtMan, WV',
      billAmount: '$3127.00',
    },
  ];

  option_qualityReportingPeriod = [
    {
      name: '01/01/2023 to 03/31/2023',
      label: '01/01/2023 to 03/31/2023',
    },
    {
      name: '01/01/2023 to 03/15/2023',
      label: '01/01/2023 to 03/15/2023',
    },
    {
      name: '01/01/2023 to 06/31/2023',
      label: '01/01/2023 to 06/31/2023',
    },
    {
      name: '01/01/2023 to 10/15/2023',
      label: '01/01/2023 to 10/15/2023',
    },
    {
      name: '01/01/2023 to 03/31/2023',
      label: '01/01/2023 to 03/31/2023',
    },
    {
      name: '01/01/2023 to 03/15/2023',
      label: '01/01/2023 to 03/15/2023',
    },
    {
      name: '01/01/2023 to 06/31/2023',
      label: '01/01/2023 to 06/31/2023',
    },
    {
      name: '01/01/2023 to 10/15/2023',
      label: '01/01/2023 to 10/15/2023',
    },
    {
      name: '01/01/2023 to 03/31/2023',
      label: '01/01/2023 to 03/31/2023',
    },
    {
      name: '01/01/2023 to 03/15/2023',
      label: '01/01/2023 to 03/15/2023',
    },
    {
      name: '01/01/2023 to 06/31/2023',
      label: '01/01/2023 to 06/31/2023',
    },
    {
      name: '01/01/2023 to 10/15/2023',
      label: '01/01/2023 to 10/15/2023',
    },
  ];

  selectedMultiSelectValue(value: any, item: any, key: any) {
    item[key] = value;
  }
  filter_config = {
    provider: '',
    NPI: '',
    TIN: '',
    program: '',
    year: '',
    qualityReportingYear: '',
    measureSelected: '',
    measureCode: '',
    piReportingPeriod: '',
    score: '',
    scoreValue: '',
    scoreType: '',
  };

  tableOptions = {
    hasChildren: true,
    collapseAble: false,
    checkbox: true,
    maxWidth: 300,
    showOptionColumn: true,
    noBorder: false,
    ordered: true,
    productInfo: true,
    currency: true,
    orderNow: true,
  };

  providerList = [
    {
      name: 'Caesar, Julius',
      label: 'Caesar, Julius',
    },
    { name: 'Hannon, Erin', label: 'Hannon, Erin' },
    { name: 'Cumin, Brian', label: 'Cumin, Brian' },
    { name: 'Wills, Sam', label: 'Wills, Sam' },
    { name: 'Scott, Michael', label: 'Scott, Michael Scott, Michael' },
    { name: 'Schrute, Moses', label: 'Schrute, Moses ' },
  ];

  handleOrderInternal(origin: string) {
    switch (origin) {
      case 'ordered':
        console.log('CASE: ', origin);
        break;
      case 'productInfo':
        console.log('CASE: ', origin);
        break;
      case 'currency':
        console.log('CASE: ', origin);
        break;
      case 'orderNow':
        console.log('CASE: ', origin);
        break;
      default:
        console.log('No Match Found');
        break;
    }
  }
}
