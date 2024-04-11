#! /usr/bin/env node

// discord : raza0131

import inquirer from 'inquirer';
async function Currency_Converter() {
  while (true) {

    let { Amount, exchangeTo } = await inquirer.prompt([
      {
        'type': 'number',
        'name': 'Amount',
        'message': 'Enter the amount in PKR: '
      },
      {
        'type': 'list',
        'name': 'exchangeTo',
        'message': 'exchangeTo',
        'choices': ['USD', 'EUR','GBP', 'INR','AUD','CAD','SGD','NZD','CNY','KWD','QAR','OMR', 'SAR', 'AED']
      }
    ])
    // pkr to other
    if (exchangeTo == 'USD') {
      console.log(Amount / 278.2, 'USD')
    }
    else if (exchangeTo == 'EUR') {
      console.log(Amount / 301.45, 'EUR')
    }
    else if (exchangeTo == 'GBP') {
        console.log(Amount / 353.5, 'GBP')
      }
    else if (exchangeTo == 'INR') {
        console.log(Amount / 3.36, 'INR')
    }
    else if (exchangeTo == 'AUD') {
        console.log(Amount / 182.7, 'AUD')
    }
    else if (exchangeTo == 'CAD') {
        console.log(Amount / 204, 'CAD')
    }
    else if (exchangeTo == 'SGD') {
        console.log(Amount / 206, 'SGC')
    }
    else if (exchangeTo == 'NZD') {
        console.log(Amount / 168.56, 'NZD')
    }
    else if (exchangeTo == 'CNY') {
      console.log(Amount / 38.74, 'CNY')
    }
    else if (exchangeTo == 'KWD') {
        console.log(Amount / 906.92, 'KWD')
      }



    else if (exchangeTo == 'QAR') {
      console.log(Amount / 76.57, 'QAR')
    }
    else if (exchangeTo == 'OMR') {
        console.log(Amount / 724.36, 'OMR')
      }




    else if (exchangeTo == 'SAR') {
      console.log(Amount / 73, 'SAR')
    }
    else if (exchangeTo == 'AED') {
      console.log(Amount / 75.55, 'AED')
    }
// increase conditions for more curruncies or from curruncy
    else {
      console.log('Invalid')
    }
  }

}
Currency_Converter()